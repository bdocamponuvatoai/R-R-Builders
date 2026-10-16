import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealLine, SectionLabel, TitleBlock } from "@/components/site/primitives";
import { Approach, CtaBand, Faq, Process, ServiceList } from "@/components/site/sections";
import { site } from "@/content/site";
import { buttonStyles } from "@/lib/ui";
import heroImage from "@/public/images/home-hero.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const facts = [
  { label: "Services", value: "Roofing, home repairs" },
  { label: "Approach", value: "Owner-run, direct contact" },
  { label: "Direct line", value: <a href={`tel:${site.tel}`}>{site.phone}</a> },
  { label: "Service area", value: "Confirmed by town or ZIP" },
];

export default function HomePage() {
  return (
    <>
      <section aria-labelledby="hero-heading">
        <div className="container-page pt-10 sm:pt-14 lg:pt-20">
          <div className="flex items-center justify-between gap-4">
            <SectionLabel index="01">Roofing &amp; home repairs</SectionLabel>
            <p className="mono-label hidden text-muted sm:block">Owner-run · Talk to us directly</p>
          </div>

          <h1
            id="hero-heading"
            className="mt-8 font-display text-[clamp(2.75rem,10.2vw,11rem)] leading-[0.86] text-forest-950 lg:mt-10"
          >
            <RevealLine>A stronger roof.</RevealLine>
            <RevealLine delay={110} className="text-forest-600">
              A home well cared for.
            </RevealLine>
          </h1>

          <div className="mt-10 grid gap-8 border-t border-bone-300 pt-8 motion-safe:animate-fade motion-safe:[animation-delay:350ms] lg:mt-14 lg:grid-cols-12">
            <p className="max-w-xl text-lg leading-relaxed text-muted lg:col-span-5 lg:text-xl">
              From the roof above you to the repairs around you. Talk directly with the owner about the attention your
              home deserves.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:col-start-7 lg:items-start lg:justify-end">
              <Link href="/contact" className={buttonStyles({ size: "lg" })}>
                Tell us about your project
                <ArrowRight aria-hidden="true" className="group-hover/button:translate-x-1" />
              </Link>
              <a href={`tel:${site.tel}`} className={buttonStyles({ variant: "secondary", size: "lg" })}>
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>

        <figure className="container-page mt-10 lg:mt-14">
          <div className="relative aspect-[4/5] overflow-hidden bg-bone-200 sm:aspect-[16/10] lg:aspect-[21/9]">
            <Image
              src={heroImage}
              alt="New England home with a charcoal pitched roof in warm evening light"
              fill
              preload
              placeholder="blur"
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover object-center motion-safe:animate-settle"
            />
            <TitleBlock
              rows={facts}
              className="absolute right-0 bottom-0 hidden w-[25rem] border-r-0 border-b-0 bg-bone-100 md:grid"
            />
          </div>
          <TitleBlock rows={facts} className="border-t-0 md:hidden" />
          <figcaption className="mono-label mt-4 flex justify-between gap-4 text-muted">
            <span>Fig. 1. Illustrative photography</span>
            <span className="hidden sm:inline">Not a completed R&amp;R project</span>
          </figcaption>
        </figure>
      </section>

      <Approach index="02" />

      <section aria-labelledby="services-heading" className="border-t border-bone-300 py-24 lg:py-32">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-3 lg:self-start">
              <SectionLabel index="03">Services</SectionLabel>
            </div>
            <h2
              id="services-heading"
              className="font-display text-[clamp(2.75rem,5.6vw,5.25rem)] leading-[0.88] text-forest-950 lg:col-span-6"
            >
              Your home has a to&#8209;do list. Let’s start here.
            </h2>
            <div className="lg:col-span-3 lg:text-right">
              <Link href="/services" className="link-line inline-flex items-center gap-2 font-medium">
                All services
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
          <div className="mt-14 lg:mt-20">
            <ServiceList />
          </div>
        </div>
      </section>

      <Process index="04" />
      <Faq index="05" />
      <CtaBand index="06" />
    </>
  );
}
