import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} | Roofing & Home Repairs`,
    short_name: "R&R Rebuilders",
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#f2efe7",
    theme_color: "#192f20",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
