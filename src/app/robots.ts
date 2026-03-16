import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
        "/dashboard/",
        "/internal/"
      ],
    },
    sitemap: "https://yourdomain.com/sitemap.xml",
  }
}
