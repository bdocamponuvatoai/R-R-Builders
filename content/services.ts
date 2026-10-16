import type { StaticImageData } from "next/image";
import roofingImage from "@/public/images/roofing-craft.jpg";
import homeRepairImage from "@/public/images/home-repair-craft.jpg";

export type Service = {
  slug: "roofing" | "home-repairs";
  number: string;
  name: string;
  title: string;
  short: string;
  image: StaticImageData;
  alt: string;
  items: readonly string[];
  description: string;
  prepare: string;
};

export const services: readonly Service[] = [
  {
    slug: "roofing",
    number: "01",
    name: "Roofing",
    title: "Care for the roof that protects it all.",
    short:
      "From a roof concern to your next roofing project. Start with a conversation about what your home needs.",
    image: roofingImage,
    alt: "Craftsperson carefully aligning architectural roof shingles (illustrative photography)",
    items: ["Leaks and visible roof damage", "Aging roofs and replacement planning", "Roofing project enquiries"],
    description:
      "A ceiling stain, a damaged section or a roof nearing the end of its life can leave you wondering where to start. Tell us what you are seeing so we can discuss the right next step.",
    prepare:
      "Share your town, the approximate age of your roof if known, and photos taken safely from the ground. Never climb onto a roof to document a problem.",
  },
  {
    slug: "home-repairs",
    number: "02",
    name: "Home repairs",
    title: "Make your home feel right again.",
    short:
      "Give the repairs on your list the attention they deserve. Tell us what needs fixing, inside or out.",
    image: homeRepairImage,
    alt: "Craftsperson checking new timber window trim with a level (illustrative photography)",
    items: ["Interior repair enquiries", "Exterior repair enquiries", "A list of repairs around your home"],
    description:
      "Small issues can make a big difference to how your home feels. Whether you have one repair or a longer list, describe the work you have in mind and discuss the scope directly with the owner.",
    prepare:
      "Make a short list of the repairs, note any access considerations, and include photos if available. Your location and preferred timing will help start the conversation.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
