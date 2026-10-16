import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { siteUrl } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    ...services.map((service) => ({ path: `/services/${service.slug}`, priority: 0.8 })),
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.9 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];

  return paths.map(({ path, priority }) => ({ url: `${siteUrl}${path}`, priority }));
}
