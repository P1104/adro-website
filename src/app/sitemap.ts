import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yourdomain.com"

  const routes = [
    "",
    "/about",
    "/adro-vs-excel",
    "/adro-vs-powerbi",
    "/adro-vs-tableau",
    "/contact",
    "/docs",
    "/downloads",
    "/features",
    "/services",
    "/solutions",
    "/use-cases"
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }))
}
