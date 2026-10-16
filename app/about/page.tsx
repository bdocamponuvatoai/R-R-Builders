import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/primitives";
import { CtaBand, OwnerPanel, Principles, Process } from "@/components/site/sections";
import { site } from "@/content/site";
import { buttonStyles } from "@/lib/ui";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "R & R Rebuilders is an owner-run roofing and home repairs business. Get in touch directly about your project.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero label="About" title="Your home. A personal connection." />

      <section aria-labelledby="story-heading" className="py-24 lg:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <OwnerPanel />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
            <SectionLabel>The business behind the name</SectionLabel>
            <h2
              id="story-heading"
              className="mt-6 font-display text-[clamp(2.75rem,4.8vw,4.5rem)] leading-[0.9] text-forest-950"
            >
              A conversation before a commitment.
            </h2>
            <div className="mt-10 space-y-6 text-xl leading-relaxed text-muted">
              <p>
                {site.name} is an owner-run roofing and home repairs business. When you have work in mind, you can
                reach out to the owner directly.
              </p>
              <p>
                Tell us what is happening at your home, where the property is located and what you would like to
                achieve. From there, we’ll discuss whether the project is a fit and what the next steps should be.
              </p>
            </div>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${site.tel}`} className={buttonStyles({ size: "lg" })}>
                Call {site.phone}
              </a>
              <Link href="/services" className={buttonStyles({ variant: "secondary", size: "lg" })}>
                Explore services
                <ArrowRight aria-hidden="true" className="group-hover/button:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Principles />
      <Process />
      <CtaBand />
    </>
  );
}
