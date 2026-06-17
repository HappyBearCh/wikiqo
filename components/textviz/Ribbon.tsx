"use client";

import { useEffect, useRef } from "react";
import { select } from "d3-selection";
import type { Keyword } from "@/lib/keywords";

interface RibbonProps {
  words: Keyword[];
}

const W = 1000;
const H = 150;
const MAX_SEGMENTS = 9;
const GAP = 4; // px between segments, in viewBox units
const RADIUS = 12;
const COLORS = [
  "var(--rb-2)", "var(--rb-3)", "var(--rb-4)",
  "var(--rb-5)", "var(--rb-1)", "var(--rb-6)",
];

interface Segment {
  kw: Keyword;
  color: string;
  width: number; // full (settled) width
  fontSize: number;
  showLabel: boolean;
}

/**
 * Frequency ribbon: the page's top terms laid out as a single horizontal bar,
 * each segment's width proportional to how often the term appears — a
 * typographic read on the page's vocabulary. Widths grow in from the left on
 * mount; hovering a segment lifts it. Decorative, and skipped entirely when
 * there isn't enough text to make meaningful proportions.
 */
export default function Ribbon({ words }: RibbonProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl || words.length === 0) return;

    const data = words.slice(0, MAX_SEGMENTS);
    const total = data.reduce((sum, d) => sum + d.weight, 0) || 1;
    const usable = W - GAP * (data.length - 1);

    const segments: Segment[] = data.map((kw, i) => {
      const width = (kw.weight / total) * usable;
      // Font that fits the segment; hide the label if it still won't fit.
      const fontSize = Math.max(13, Math.min(30, (width / (kw.text.length || 1)) * 1.5));
      const showLabel = width > kw.text.length * fontSize * 0.55 + 12;
      return { kw, color: COLORS[i % COLORS.length], width, fontSize, showLabel };
    });

    const svg = select(svgEl);
    svg.selectAll("*").remove();
    svg
      .attr("viewBox", `0 0 ${W} ${H}`)
      .attr("width", "100%")
      .attr("preserveAspectRatio", "xMidYMid meet")
      .attr("role", "img")
      .attr("aria-label", "Most frequent terms on this page, sized by frequency");

    const groups = svg
      .selectAll<SVGGElement, Segment>("g")
      .data(segments)
      .join("g")
      .style("cursor", "default");

    groups
      .append("rect")
      .attr("y", 8)
      .attr("height", H - 16)
      .attr("rx", RADIUS)
      .attr("fill", (d) => d.color);

    groups
      .append("text")
      .attr("y", H / 2)
      .attr("dy", "0.32em")
      .attr("text-anchor", "middle")
      .attr("font-family", "var(--font-serif), serif")
      .attr("font-weight", 600)
      .attr("font-size", (d) => d.fontSize)
      .attr("fill", "var(--accent-foreground)")
      .style("pointer-events", "none")
      .attr("opacity", (d) => (d.showLabel ? 1 : 0))
      .text((d) => d.kw.text);

    groups.append("title").text((d) => `${d.kw.text} — ${d.kw.weight}×`);

    // Lift a segment on hover for a little tactility.
    groups
      .on("pointerenter", function () {
        select(this).select("rect").attr("transform", "translate(0,-3)");
      })
      .on("pointerleave", function () {
        select(this).select("rect").attr("transform", null);
      });

    // Lay segments out at a given 0..1 progress, growing widths in from the
    // left. At p = 1 this is the final, full-width ribbon.
    function layout(p: number) {
      let x = 0;
      groups.attr("transform", (d) => {
        const tx = x;
        x += d.width * p + GAP;
        return `translate(${tx},0)`;
      });
      groups.select("rect").attr("width", (d) => Math.max(0, d.width * p));
      groups
        .select("text")
        .attr("x", (d) => (d.width * p) / 2)
        .attr("opacity", (d) => (d.showLabel ? p : 0));
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      layout(1);
      return;
    }

    const DURATION = 750;
    const start = performance.now();
    let frame = 0;
    function tick(now: number) {
      const t = Math.min(1, (now - start) / DURATION);
      // easeOutCubic
      const p = 1 - Math.pow(1 - t, 3);
      layout(p);
      if (t < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [words]);

  return <svg ref={svgRef} className="block h-full w-full" />;
}
