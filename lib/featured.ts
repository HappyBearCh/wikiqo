/** A small, hand-picked shelf of articles used to give readers somewhere to
 *  start browsing — shown on the home page and on the empty search page. Each
 *  hue is one stripe of the shared pride spectrum (see globals.css --rb-*). */
export interface FeaturedArticle {
  title: string;
  blurb: string;
  hue: string;
}

export const FEATURED: FeaturedArticle[] = [
  { title: "Albert Einstein", blurb: "Theoretical physicist who developed relativity.", hue: "var(--rb-1)" },
  { title: "Artificial intelligence", blurb: "Machine intelligence and learning systems.", hue: "var(--rb-2)" },
  { title: "Mount Everest", blurb: "Earth's highest mountain above sea level.", hue: "var(--rb-3)" },
  { title: "Renaissance", blurb: "European cultural rebirth, 14th–17th century.", hue: "var(--rb-4)" },
  { title: "Photosynthesis", blurb: "How plants convert light into chemical energy.", hue: "var(--rb-5)" },
  { title: "Roman Empire", blurb: "Post-Republican period of ancient Rome.", hue: "var(--rb-6)" },
  { title: "Black hole", blurb: "Region of spacetime where gravity is inescapable.", hue: "var(--rb-1)" },
  { title: "Jazz", blurb: "Musical genre born in early 20th-century America.", hue: "var(--rb-5)" },
];
