import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yur1.xyz",
      lastModified: new Date("2026-05-07"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://yur1.xyz/projects",
      lastModified: new Date("2026-05-07"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
