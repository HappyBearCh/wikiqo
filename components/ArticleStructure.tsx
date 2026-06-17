"use client";

import { useEffect, useRef } from "react";
import { select } from "d3-selection";
import { hierarchy, type HierarchyNode } from "d3-hierarchy";
import type { HeadingNode } from "@/lib/structure";

interface ArticleStructureProps {
  root: HeadingNode;
}

// Per-level node colors, drawn from the site's navy spectrum (globals.css).
const LEVEL_COLOR: Record<number, string> = {
  1: "var(--accent)",
  2: "var(--rb-2)",
  3: "var(--rb-4)",
  4: "var(--rb-6)",
};

const ROW_HEIGHT = 26; // vertical space per node — every node gets its own row
const INDENT = 16; // horizontal indent added per nesting level
const LABEL_OFFSET = 10; // gap between a node's dot and its label
const MIN_LABEL_CHARS = 8; // never truncate a label below this many characters
const MARGIN = { top: 8, right: 10, bottom: 8, left: 6 };
const FALLBACK_WIDTH = 280; // used before the container has measured itself

/** Smoothly scrolls the reader to a section and briefly flashes its heading. */
function scrollToSection(id: string) {
  const target = id ? document.getElementById(id) : document.body;
  if (!target) return;

  if (id) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    target.classList.add("structure-target-flash");
    window.setTimeout(() => target.classList.remove("structure-target-flash"), 1200);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

interface PlacedNode {
  node: HierarchyNode<HeadingNode>;
  x: number; // horizontal position (indentation by depth)
  y: number; // vertical center of the node's row
}

function fontSizeFor(depth: number) {
  return depth === 0 ? 12.5 : 11.5;
}

/** Roughly how many characters of a label fit in the given pixel width. */
function fitChars(available: number, depth: number) {
  const charWidth = fontSizeFor(depth) * 0.58;
  return Math.max(MIN_LABEL_CHARS, Math.floor(available / charWidth));
}

function truncate(text: string, max: number) {
  return text.length > max ? `${text.slice(0, Math.max(1, max - 1))}…` : text;
}

/**
 * Interactive D3 visualization of an article's section outline. Renders the
 * heading hierarchy as an indented outline (table-of-contents style): each
 * heading occupies its own row, with nesting shown by indentation, so labels
 * never overlap regardless of how deep or wide the outline is. Clicking a node
 * scrolls the reader to that section. Purely a navigational aid layered over
 * content that is fully readable without it.
 */
export default function ArticleStructure({ root }: ArticleStructureProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svgEl = svgRef.current;
    const containerEl = containerRef.current;
    if (!svgEl || !containerEl) return;

    function draw() {
      const width = containerEl!.clientWidth || FALLBACK_WIDTH;

      // d3.hierarchy gives us pre-order (document-order) descendants; we lay
      // them out manually as one row each — no tree layout needed, which is
      // exactly what prevents the old horizontal-tree label collisions.
      const rootNode = hierarchy<HeadingNode>(root);
      const descendants = rootNode.descendants();
      const placed: PlacedNode[] = descendants.map((node, i) => ({
        node,
        x: MARGIN.left + node.depth * INDENT,
        y: MARGIN.top + i * ROW_HEIGHT + ROW_HEIGHT / 2,
      }));
      const byNode = new Map(placed.map((p) => [p.node, p]));

      const height = MARGIN.top + descendants.length * ROW_HEIGHT + MARGIN.bottom;

      const svg = select(svgEl!);
      svg.selectAll("*").remove();
      svg
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("role", "tree")
        .attr("aria-label", "Article section outline");

      // Elbow connectors: a vertical run down the parent's indent column, then
      // a short horizontal hop across to each child's dot.
      svg
        .append("g")
        .attr("fill", "none")
        .attr("stroke", "var(--border)")
        .attr("stroke-width", 1.5)
        .selectAll("path")
        .data(placed.filter((p) => p.node.parent))
        .join("path")
        .attr("d", (p) => {
          const parent = byNode.get(p.node.parent!)!;
          return `M${parent.x},${parent.y} V${p.y} H${p.x}`;
        });

      // One interactive group per heading: a dot plus a clickable label.
      const node = svg
        .append("g")
        .selectAll<SVGGElement, PlacedNode>("g")
        .data(placed)
        .join("g")
        .attr("transform", (p) => `translate(${p.x},${p.y})`)
        .attr("role", "treeitem")
        .style("cursor", "pointer")
        .on("click", (_event, p) => scrollToSection(p.node.data.id));

      node
        .append("circle")
        .attr("r", (p) => (p.node.depth === 0 ? 4.5 : 3.5))
        .attr("fill", (p) => LEVEL_COLOR[p.node.data.level] ?? "var(--rb-4)")
        .attr("stroke", "var(--background)")
        .attr("stroke-width", 1.5);

      node
        .append("text")
        .attr("dy", "0.32em")
        .attr("x", LABEL_OFFSET)
        .attr("font-size", (p) => fontSizeFor(p.node.depth))
        .attr("font-weight", (p) =>
          p.node.depth === 0 ? 600 : p.node.data.level === 2 ? 500 : 400,
        )
        .attr("fill", "var(--foreground)")
        .text((p) => {
          const available = width - p.x - LABEL_OFFSET - MARGIN.right;
          return truncate(p.node.data.text, fitChars(available, p.node.depth));
        })
        .append("title")
        .text((p) => p.node.data.text);

      // Hover affordance: underline the label and grow its dot.
      node
        .on("mouseenter", function () {
          select(this).select("text").attr("text-decoration", "underline");
          select(this)
            .select("circle")
            .attr("r", (p) => ((p as PlacedNode).node.depth === 0 ? 5.5 : 4.5));
        })
        .on("mouseleave", function () {
          select(this).select("text").attr("text-decoration", "none");
          select(this)
            .select("circle")
            .attr("r", (p) => ((p as PlacedNode).node.depth === 0 ? 4.5 : 3.5));
        });
    }

    draw();

    // Re-fit labels and width when the sidebar column changes size.
    const observer = new ResizeObserver(draw);
    observer.observe(containerEl);
    return () => observer.disconnect();
  }, [root]);

  return (
    <div ref={containerRef}>
      <svg ref={svgRef} />
    </div>
  );
}
