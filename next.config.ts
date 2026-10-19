import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site used to publish original articles (/wikiqorgi), mirror Wikipedia
  // (/wiki/) and search both. Those pages are gone; these keep old links and
  // search results landing somewhere useful. Redirects are resolved by the
  // router before any page, so they cost no function invocation.
  async redirects() {
    return [
      // A mirrored article goes to the same article on Wikipedia, as unknown
      // titles always did.
      {
        source: "/wiki/:slug",
        destination: "https://en.wikipedia.org/wiki/:slug",
        permanent: true,
      },
      { source: "/wikiqorgi/:path*", destination: "/", permanent: true },
      { source: "/search", destination: "/", permanent: true },
      { source: "/search-index.json", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
