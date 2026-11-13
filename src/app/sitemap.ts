import type { MetadataRoute } from "next";
import { caseStudyPages } from "@/content/case-studies";
import { siteUrl } from "@/lib/url";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = siteUrl();
  return [
    { url, changeFrequency: "monthly", priority: 1 },
    ...caseStudyPages.map((c) => ({ url: `${url}/work/${c.slug}`, changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}
