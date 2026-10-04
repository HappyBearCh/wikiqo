"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

/**
 * Google Analytics, loaded only after the reader agrees to it.
 *
 * GA4 sets cookies (_ga, _ga_*), which under the ePrivacy rules that apply to
 * EU, UK and Swiss visitors needs consent before they are written. So nothing
 * from googletagmanager.com loads until "Allow" is clicked. There is no
 * cookieless mode to fall back to, just no analytics.
 *
 * The choice is kept in localStorage, which is not sent to any server. A
 * browser sending Global Privacy Control is treated as having declined, and is
 * not asked. The footer's "Cookie settings" link reopens the banner (see
 * CookieSettingsButton below).
 */

const STORAGE_KEY = "wikiqo-analytics-consent";
const OPEN_EVENT = "wikiqo:open-consent";

type Choice = "granted" | "denied";

function readChoice(): Choice | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null; // storage blocked (private mode, disabled site data)
  }
}

function writeChoice(choice: Choice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Can't persist it; the choice still holds for this page view.
  }
}

function prefersNoTracking(): boolean {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

export default function AnalyticsConsent({ measurementId }: { measurementId: string }) {
  // undefined until mounted: localStorage doesn't exist during the server
  // render, and guessing would flash the banner at readers who already chose.
  const [choice, setChoice] = useState<Choice | null | undefined>(undefined);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    const stored = readChoice();
    const initial = stored ?? (prefersNoTracking() ? "denied" : null);
    // Reading localStorage has to happen after mount; there is no server value
    // to initialise from.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setChoice(initial);
    setBannerOpen(initial === null);

    const reopen = () => setBannerOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  function decide(next: Choice) {
    writeChoice(next);
    setBannerOpen(false);
    if (choice === "granted" && next === "denied") {
      // gtag.js is already running and has set its cookies. Clear them and
      // reload, which is the only reliable way to unload it.
      for (const name of document.cookie.split(";").map((c) => c.split("=")[0].trim())) {
        if (name.startsWith("_ga")) {
          document.cookie = `${name}=; Max-Age=0; path=/; domain=${location.hostname.replace(/^www\./, ".")}`;
          document.cookie = `${name}=; Max-Age=0; path=/`;
        }
      }
      window.location.reload();
      return;
    }
    setChoice(next);
  }

  return (
    <>
      {choice === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${measurementId}');
            `}
          </Script>
        </>
      )}

      {bannerOpen && (
        <div
          role="region"
          aria-label="Analytics consent"
          className="fixed bg-surface inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-2xl border border-border p-4 shadow-xl shadow-black/10 sm:inset-x-6 sm:bottom-6 sm:p-5"
        >
          <p className="text-sm leading-relaxed text-foreground">
            May wikiqo count your visit with Google Analytics? It sets cookies
            and sends Google which pages you read. Nothing loads unless you allow
            it, and the site works the same either way.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => decide("granted")}
              className="btn-primary"
            >
              Allow
            </button>
            <button
              type="button"
              onClick={() => decide("denied")}
              className="btn-secondary"
            >
              No thanks
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/** Reopens the consent banner. Lives in the footer. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className={className}
    >
      Cookie settings
    </button>
  );
}
