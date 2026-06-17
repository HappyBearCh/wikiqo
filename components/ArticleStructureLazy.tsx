"use client";

import dynamic from "next/dynamic";
import type { HeadingNode } from "@/lib/structure";

// The structure map is a client-only D3 viz (it draws into an SVG from a
// useEffect, so it renders nothing on the server anyway). Loading it with
// ssr:false keeps d3-selection/-hierarchy/-shape out of the initial page
// bundle; the chunk is fetched after hydration. ssr:false can't be used in a
// Server Component, so this thin client wrapper exists to host the dynamic
// import for the server-rendered article page.
const ArticleStructure = dynamic(() => import("@/components/ArticleStructure"), {
  ssr: false,
});

export default function ArticleStructureLazy({ root }: { root: HeadingNode }) {
  return <ArticleStructure root={root} />;
}
