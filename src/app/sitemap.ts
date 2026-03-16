import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.aidashboardbuilder.com";

  // Essential pages from the website structure
  const pages = [
    "",
    "/about",
    "/contact",
    "/docs",
    "/downloads",
    "/features",
    "/use-cases",
    "/services",
    "/solutions",
    "/ai-data-analysis-tool",
    "/ask-questions-to-your-data",
    "/adro-vs-powerbi",
    "/adro-vs-tableau",
    "/adro-vs-excel",
    "/blog",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1 : 0.8,
  }));
}
