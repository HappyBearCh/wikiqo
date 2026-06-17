"use client";

import { useEffect, useRef } from "react";
import { select } from "d3-selection";
import {
  forceSimulation,
  forceManyBody,
  forceCollide,
  forceX,
  forceY,
  type SimulationNodeDatum,
} from "d3-force";
import { scaleSqrt } from "d3-scale";
import { extent } from "d3-array";
import type { Keyword } from "@/lib/keywords";

interface ConstellationProps {
  words: Keyword[];
}

// Fixed coordinate space; the SVG scales to its container via viewBox, so the
// layout is deterministic regardless of screen width (matches the other D3
// pieces in this app).
const W = 1000;
const H = 150;
const MAX_WORDS = 22;
const COLORS = [
  "var(--rb-1)", "var(--rb-2)", "var(--rb-3)",
  "var(--rb-4)", "var(--rb-5)", "var(--rb-6)",
];

// How far a word drifts from its settled spot, and how far the pointer pushes.
const BOB_AMP = 5;
const PUSH_RADIUS = 110;
const PUSH_STRENGTH = 34;

interface WordNode extends SimulationNodeDatum {
  kw: Keyword;
  size: number;
  r: number;
  color: string;
  sx: number; // settled x
  sy: number; // settled y
  phase: number;
  speed: number;
  ox: number; // current pointer-push offset
  oy: number;
}

/**
 * Word "constellation": the page's salient terms floating in a slim banner,
 * sized by frequency and tinted across the brand's navy spectrum. A force
 * simulation lays them out without overlap; a light animation loop then bobs
 * each term and pushes them aside as the pointer sweeps through. Purely
 * decorative — it reflects the page's content but conveys no critical info.
 */
export default function Constellation({ words }: ConstellationProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl || words.length === 0) return;

    const data = words.slice(0, MAX_WORDS);
    const [minW, maxW] = extent(data, (d) => d.weight) as [number, number];
    const size = scaleSqrt()
      .domain([minW, Math.max(maxW, minW + 1)])
      .range([14, 40]);

    // Build nodes with an approximate collision radius based on rendered width.
    const nodes: WordNode[] = data.map((kw, i) => {
      const fontSize = size(kw.weight);
      const halfWidth = (kw.text.length * fontSize * 0.30) + fontSize * 0.4;
      return {
        kw,
        size: fontSize,
        r: halfWidth,
        color: COLORS[i % COLORS.length],
        x: W / 2 + (Math.random() - 0.5) * 120,
        y: H / 2 + (Math.random() - 0.5) * 60,
        sx: 0,
        sy: 0,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 0.5,
        ox: 0,
        oy: 0,
      };
    });

    // Settle the layout synchronously: pack words toward the center band with
    // collision keeping them apart, then freeze their resting positions.
    const sim = forceSimulation(nodes)
      .force("x", forceX(W / 2).strength(0.05))
      .force("y", forceY(H / 2).strength(0.16))
      .force("charge", forceManyBody().strength(-6))
      .force("collide", forceCollide<WordNode>((d) => d.r + 2).iterations(3))
      .stop();
    for (let i = 0; i < 300; i++) sim.tick();

    for (const n of nodes) {
      n.sx = Math.max(n.r, Math.min(W - n.r, n.x ?? W / 2));
      n.sy = Math.max(n.r, Math.min(H - n.r, n.y ?? H / 2));
    }

    const svg = select(svgEl);
    svg.selectAll("*").remove();
    svg
      .attr("viewBox", `0 0 ${W} ${H}`)
      .attr("width", "100%")
      .attr("preserveAspectRatio", "xMidYMid meet")
      .attr("role", "img")
      .attr("aria-label", "Key terms from this page");

    const text = svg
      .selectAll<SVGTextElement, WordNode>("text")
      .data(nodes)
      .join("text")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "central")
      .attr("font-family", "var(--font-serif), serif")
      .attr("font-weight", 600)
      .attr("font-size", (d) => d.size)
      .attr("fill", (d) => d.color)
      .attr("opacity", 0)
      .attr("transform", (d) => `translate(${d.sx},${d.sy})`)
      .text((d) => d.kw.text);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      text.attr("opacity", 0.92);
      return;
    }

    // Pointer position in viewBox coordinates; inactive until the cursor moves.
    const pointer = { x: -1e3, y: -1e3, active: false };

    function toViewBox(event: PointerEvent) {
      const rect = svgEl!.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * W;
      pointer.y = ((event.clientY - rect.top) / rect.height) * H;
      pointer.active = true;
    }
    const onLeave = () => (pointer.active = false);
    svgEl.addEventListener("pointermove", toViewBox);
    svgEl.addEventListener("pointerleave", onLeave);

    const start = performance.now();
    let frame = 0;

    function tick(now: number) {
      const t = (now - start) / 1000;
      text.attr("transform", (d, i) => {
        // Staggered entrance fade.
        const appear = Math.max(0, Math.min(1, (t - i * 0.035) / 0.5));

        // Gentle idle bob.
        const bx = Math.sin(t * d.speed + d.phase) * BOB_AMP;
        const by = Math.cos(t * d.speed * 0.9 + d.phase) * BOB_AMP * 0.6;

        // Ease the pointer push in and out so it feels springy, not jumpy.
        let px = 0;
        let py = 0;
        if (pointer.active) {
          const dx = d.sx - pointer.x;
          const dy = d.sy - pointer.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < PUSH_RADIUS) {
            const f = (1 - dist / PUSH_RADIUS) * PUSH_STRENGTH;
            px = (dx / dist) * f;
            py = (dy / dist) * f;
          }
        }
        d.ox += (px - d.ox) * 0.15;
        d.oy += (py - d.oy) * 0.15;

        // `appear` also drives opacity, applied in the pass below.
        void appear;
        const x = Math.max(d.r, Math.min(W - d.r, d.sx + bx + d.ox));
        const y = Math.max(d.r, Math.min(H - d.r, d.sy + by + d.oy));
        return `translate(${x},${y})`;
      });
      // Entrance opacity, kept out of the transform string.
      text.attr("opacity", (_d, i) =>
        0.92 * Math.max(0, Math.min(1, (t - i * 0.035) / 0.5)),
      );
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      svgEl.removeEventListener("pointermove", toViewBox);
      svgEl.removeEventListener("pointerleave", onLeave);
    };
  }, [words]);

  return <svg ref={svgRef} className="block h-full w-full" />;
}
