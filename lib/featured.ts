/** A small, hand-picked shelf of articles used to give readers somewhere to
 *  start browsing — shown on the home page and on the empty search page. */
export interface FeaturedArticle {
  title: string;
  blurb: string;
}

export const FEATURED: FeaturedArticle[] = [
  { title: "Albert Einstein", blurb: "Theoretical physicist who developed relativity." },
  { title: "Artificial intelligence", blurb: "Machine intelligence and learning systems." },
  { title: "Mount Everest", blurb: "Earth's highest mountain above sea level." },
  { title: "Renaissance", blurb: "European cultural rebirth, 14th–17th century." },
  { title: "Photosynthesis", blurb: "How plants convert light into chemical energy." },
  { title: "Roman Empire", blurb: "Post-Republican period of ancient Rome." },
  { title: "Black hole", blurb: "Region of spacetime where gravity is inescapable." },
  { title: "Jazz", blurb: "Musical genre born in early 20th-century America." },
];
