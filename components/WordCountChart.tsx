"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { select } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { max } from "d3-array";
// Side-effect import: augments the d3-selection prototype with .transition().
import "d3-transition";
import { articleHref } from "@/lib/links";

export interface WordCountDatum {
  title: string;
  wordcount: number;
}

interface WordCountChartProps {
  data: WordCountDatum[];
}

const VIEW_WIDTH = 640;
const ROW_HEIGHT = 30;
const MARGIN = { top: 4, right: 64, bottom: 4, left: 12 };
const BAR_COLORS = ["var(--rb-2)", "var(--rb-3)", "var(--rb-4)", "var(--rb-5)"];
const MAX_BARS = 12;

/**
 * D3 horizontal bar chart of article length (word count) across search
 * results — a quick "for any data" visualization that hints at how substantial
 * each match is before you open it. Bars link to their article.
 */
export default function WordCountChart({ data }: WordCountChartProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    const rows = [...data]
      .sort((a, b) => b.wordcount - a.wordcount)
      .slice(0, MAX_BARS);

    const height = MARGIN.top + rows.length * ROW_HEIGHT + MARGIN.bottom;
    const innerWidth = VIEW_WIDTH - MARGIN.left - MARGIN.right;

    const x = scaleLinear()
      .domain([0, max(rows, (d) => d.wordcount) ?? 1])
      .range([0, innerWidth]);

    const svg = select(svgEl);
    svg.selectAll("*").remove();
    svg
      .attr("viewBox", `0 0 ${VIEW_WIDTH} ${height}`)
      .attr("width", "100%")
      .attr("height", height)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("role", "img")
      .attr("aria-label", "Article length by word count for each search result");

    const g = svg.append("g").attr("transform", `translate(${MARGIN.left},${MARGIN.top})`);

    const row = g
      .selectAll<SVGGElement, WordCountDatum>("g")
      .data(rows)
      .join("g")
      .attr("transform", (_d, i) => `translate(0,${i * ROW_HEIGHT})`)
      .style("cursor", "pointer")
      .on("click", (_event, d) => router.push(articleHref(d.title)));

    // Track behind every bar, so short articles still register as a row.
    row
      .append("rect")
      .attr("y", 4)
      .attr("width", innerWidth)
      .attr("height", ROW_HEIGHT - 10)
      .attr("rx", 4)
      .attr("fill", "var(--surface-hover)");

    row
      .append("rect")
      .attr("y", 4)
      .attr("height", ROW_HEIGHT - 10)
      .attr("rx", 4)
      .attr("fill", (_d, i) => BAR_COLORS[i % BAR_COLORS.length])
      .attr("width", 0)
      .transition()
      .duration(600)
      .attr("width", (d) => Math.max(2, x(d.wordcount)));

    // Title sits on the bar starting at the left edge. Because it overhangs onto
    // the track whenever the title is wider than the bar (i.e. most short
    // articles), it can't use a single fill that only contrasts with the bar. A
    // foreground fill plus a surface-colored stroke halo (drawn under the fill
    // via paint-order) keeps it legible over both the bar and the track, in
    // light and dark themes.
    row
      .append("text")
      .attr("x", 8)
      .attr("y", ROW_HEIGHT / 2)
      .attr("dy", "0.05em")
      .attr("font-size", 12)
      .attr("font-weight", 500)
      .attr("fill", "var(--foreground)")
      .attr("stroke", "var(--surface)")
      .attr("stroke-width", 3)
      .attr("paint-order", "stroke")
      .attr("stroke-linejoin", "round")
      .style("pointer-events", "none")
      .text((d) => (d.title.length > 34 ? `${d.title.slice(0, 33)}…` : d.title));

    // Word count is right-aligned into the reserved right margin (a fixed
    // column) rather than trailing each bar. Trailing short bars would drop the
    // label into the middle of the row, where it collides with the title that
    // overhangs the track.
    row
      .append("text")
      .attr("x", innerWidth + MARGIN.right)
      .attr("y", ROW_HEIGHT / 2)
      .attr("dy", "0.05em")
      .attr("text-anchor", "end")
      .attr("font-size", 11)
      .attr("fill", "var(--muted)")
      .style("pointer-events", "none")
      .text((d) => `${d.wordcount.toLocaleString()} words`);

    row
      .on("mouseenter", function () {
        select(this).select("text").attr("text-decoration", "underline");
      })
      .on("mouseleave", function () {
        select(this).select("text").attr("text-decoration", "none");
      });
  }, [data, router]);

  return <svg ref={svgRef} />;
}
