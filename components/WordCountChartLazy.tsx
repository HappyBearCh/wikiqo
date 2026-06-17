"use client";

import dynamic from "next/dynamic";
import type { WordCountDatum } from "@/components/WordCountChart";

// Client-only D3 bar chart (draws into an SVG from a useEffect). Loading it with
// ssr:false keeps d3-selection/-scale/-array out of the search page's initial
// bundle. ssr:false can't be used in a Server Component, so this thin client
// wrapper hosts the dynamic import for the server-rendered search page.
const WordCountChart = dynamic(() => import("@/components/WordCountChart"), {
  ssr: false,
});

export default function WordCountChartLazy({ data }: { data: WordCountDatum[] }) {
  return <WordCountChart data={data} />;
}
