"use client";

import { useEffect, useRef } from "react";
import { select } from "d3-selection";

interface TitlePathProps {
  /** The headline to draw — page title, query, or site name. */
  title: string;
}

const W = 1000;
const H = 150;
const GRAD_ID = "titlepath-rainbow";
const PATH_ID = "titlepath-curve";

// A flowing curve the headline rides along, hugging the middle of the band.
const CURVE = `M 36 ${H * 0.62} C ${W * 0.22} ${H * 0.18}, ${W * 0.34} ${
  H * 0.98
}, ${W * 0.5} ${H * 0.52} S ${W * 0.82} ${H * 0.06}, ${W - 36} ${H * 0.58}`;

/**
 * Kinetic masthead: the page's headline set in large serif type running along
 * a gentle wave, filled with the brand's navy gradient. Letters fade in with a
 * staggered cascade on mount. The quietest of the three banner variants — more
 * "title treatment" than data view.
 */
export default function TitlePath({ title }: TitlePathProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    const label = title.trim();
    if (!label) return;

    const chars = [...label];
    // Scale the type down for long headlines so it still fits the curve.
    const fontSize = Math.max(26, Math.min(66, (W - 120) / (chars.length * 0.52)));

    const svg = select(svgEl);
    svg.selectAll("*").remove();
    svg
      .attr("viewBox", `0 0 ${W} ${H}`)
      .attr("width", "100%")
      .attr("preserveAspectRatio", "xMidYMid meet")
      .attr("role", "img")
      .attr("aria-label", label);

    const defs = svg.append("defs");

    const grad = defs
      .append("linearGradient")
      .attr("id", GRAD_ID)
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%");
    const stops = [
      "var(--rb-1)", "var(--rb-2)", "var(--rb-3)",
      "var(--rb-4)", "var(--rb-5)", "var(--rb-6)",
    ];
    stops.forEach((color, i) => {
      grad
        .append("stop")
        .attr("offset", `${(i / (stops.length - 1)) * 100}%`)
        .attr("stop-color", color);
    });

    defs.append("path").attr("id", PATH_ID).attr("d", CURVE).attr("fill", "none");

    const textPath = svg
      .append("text")
      .attr("font-family", "var(--font-serif), serif")
      .attr("font-weight", 700)
      .attr("font-size", fontSize)
      .attr("letter-spacing", "0.01em")
      .attr("fill", `url(#${GRAD_ID})`)
      .append("textPath")
      .attr("href", `#${PATH_ID}`)
      .attr("startOffset", "50%")
      .attr("text-anchor", "middle");

    const spans = textPath
      .selectAll<SVGTSpanElement, string>("tspan")
      .data(chars)
      .join("tspan")
      // Preserve runs of spaces between words.
      .attr("xml:space", "preserve")
      .text((d) => d)
      .attr("opacity", 0);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      spans.attr("opacity", 1);
      return;
    }

    const STAGGER = 45; // ms between letters
    const FADE = 320; // ms per letter
    const start = performance.now();
    let frame = 0;
    function tick(now: number) {
      const elapsed = now - start;
      let done = true;
      spans.attr("opacity", (_d, i) => {
        const o = Math.max(0, Math.min(1, (elapsed - i * STAGGER) / FADE));
        if (o < 1) done = false;
        return o;
      });
      if (!done) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [title]);

  return <svg ref={svgRef} className="block h-full w-full" />;
}
