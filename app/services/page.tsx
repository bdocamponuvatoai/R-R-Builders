import type { Metadata } from "next";
import { PageHero } from "@/components/site/primitives";
import { CtaBand, Process, ServiceList } from "@/components/site/sections";

export const metadata: Metadata = {
  title: "Roofing & Home Repair Services",
  description:
    "Explore roofing and home repair enquiries with R & R Rebuilders. Discuss your project directly with the owner.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="For the home you count on."
        intro="Roofing and home repairs, with a direct line to the person behind the business. Explore where we can start."
      />
      <section aria-label="Services" className="container-page py-16 lg:py-24">
        <ServiceList headingLevel="h2" />
      </section>
      <Process />
      <CtaBand />
    </>
  );
}
