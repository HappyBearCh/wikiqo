import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  WIKIQORGI_ARTICLES,
  WIKIQORGI_SECTIONS,
  getRewrittenArticle,
  getSection,
  rewrittenHref,
  sectionHref,
} from "@/content/wikiqorgi";
import { OG_BASE } from "@/lib/site";
import ArticleView from "@/components/wikiqorgi/ArticleView";
import SectionView from "@/components/wikiqorgi/SectionView";

// This one segment serves two kinds of page: /wikiqorgi/deep-time lists a
// section, /wikiqorgi/evolution is an article. Two sibling dynamic segments
// cannot coexist in one directory, and nesting articles under their section
// would have changed every article URL that is already published — so both
// resolve from the same slug, section first. content/wikiqorgi asserts at
// import time that the two namespaces never collide.
//
// The whole shelf lives in content/wikiqorgi as compile-time constants, so
// every slug is known at build time and the set is closed. Prerendering all of
// them and refusing anything else keeps this route fully static — no fetch, no
// ISR writes, no runtime rendering. That is the opposite of /wiki/[slug], which
// is deliberately dynamic because it faces Wikipedia's unbounded title space.
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...WIKIQORGI_SECTIONS.map((section) => ({ slug: section.id })),
    ...WIKIQORGI_ARTICLES.map((article) => ({ slug: article.slug })),
  ];
}

interface WikiqorgiSlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: WikiqorgiSlugPageProps): Promise<Metadata> {
  const { slug } = await params;

  const section = getSection(slug);
  if (section) {
    const url = sectionHref(section.id);
    const title = `${section.title} — wikiqorgi`;
    return {
      title: section.title,
      description: section.blurb,
      alternates: { canonical: url },
      openGraph: {
        ...OG_BASE,
        type: "website",
        url,
        title,
        description: section.blurb,
      },
    };
  }

  const article = getRewrittenArticle(slug);
  if (!article) {
    return { title: "Not found", robots: { index: false, follow: true } };
  }

  const url = rewrittenHref(article.slug);
  return {
    title: article.title,
    description: article.dek,
    // Self-referencing, unlike the mirrored /wiki/[slug] pages: this text is
    // original writing, so wikiqo *is* the canonical source for it.
    alternates: { canonical: url },
    openGraph: {
      ...OG_BASE,
      type: "article",
      url,
      title: article.title,
      description: article.dek,
    },
  };
}

export default async function WikiqorgiSlugPage({ params }: WikiqorgiSlugPageProps) {
  const { slug } = await params;

  const section = getSection(slug);
  if (section) {
    return <SectionView section={section} />;
  }

  const article = getRewrittenArticle(slug);
  if (!article) {
    notFound();
  }

  return <ArticleView article={article} />;
}
