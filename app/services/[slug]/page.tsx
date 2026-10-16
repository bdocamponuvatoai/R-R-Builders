import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { JsonLd, RevealLine, SectionLabel } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/sections";
import { getService, services } from "@/content/services";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/env";
import { buttonStyles } from "@/lib/ui";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { images: [{ url: service.image.src, alt: service.alt }] },
  };
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const next = services[(services.indexOf(service) + 1) % services.length];

  const spec = [
    {
      label: "Scope",
      content: (
        <ul className="border-t border-bone-300">
          {service.items.map((item) => (
            <li key={item} className="flex gap-4 border-b border-bone-300 py-4 text-xl">
              <span aria-hidden="true" className="text-forest-600">
                —
              </span>
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    { label: "Before you call", content: <p className="text-xl leading-relaxed">{service.prepare}</p> },
    {
      label: "Confirmed directly",
      content: (
        <p className="text-xl leading-relaxed">
          Service area, scope, pricing and availability are agreed with you directly before booking.
        </p>
      ),
    },
  ];

  return (
    <>
      <section aria-labelledby="service-heading">
        <div className="container-page pt-10 sm:pt-14 lg:pt-20">
          <nav aria-label="Breadcrumb">
            <ol className="mono-label flex gap-2 text-muted">
              <li>
                <Link href="/services" className="hover:text-forest-950">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-forest-950">
                {service.name}
              </li>
            </ol>
          </nav>

          <SectionLabel index={service.number} className="mt-12 lg:mt-16">
            {service.name}
          </SectionLabel>
          <h1
            id="service-heading"
            className="mt-8 max-w-[16ch] font-display text-[clamp(2.75rem,7.5vw,8rem)] leading-[0.88] text-forest-950"
          >
            <RevealLine>{service.title}</RevealLine>
          </h1>

          <div className="mt-10 grid gap-8 border-t border-bone-300 pt-8 motion-safe:animate-fade motion-safe:[animation-delay:250ms] lg:mt-14 lg:grid-cols-12">
            <p className="max-w-xl text-lg leading-relaxed text-muted lg:col-span-5 lg:text-xl">{service.description}</p>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:col-start-7 lg:items-start lg:justify-end">
              <Link href={`/contact?service=${service.slug}`} className={buttonStyles({ size: "lg" })}>
                Discuss your {service.name.toLowerCase()} project
                <ArrowRight aria-hidden="true" className="group-hover/button:translate-x-1" />
              </Link>
              <a href={`tel:${site.tel}`} className={buttonStyles({ variant: "secondary", size: "lg" })}>
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>

        <figure className="container-page mt-10 lg:mt-14">
          <div className="relative aspect-[4/3] overflow-hidden bg-bone-200 lg:aspect-[21/9]">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              preload
              placeholder="blur"
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover motion-safe:animate-settle"
            />
          </div>
          <figcaption className="mono-label mt-4 text-muted">Fig. {service.number}. Illustrative photography</figcaption>
        </figure>
      </section>

      <section aria-label="Project details" className="py-24 lg:py-32">
        <div className="container-page">
          <dl className="border-t border-forest-950">
            {spec.map((row) => (
              <div key={row.label} className="grid gap-4 border-b border-bone-300 py-10 lg:grid-cols-12 lg:py-14">
                <dt className="mono-label pt-1.5 text-muted lg:col-span-3">{row.label}</dt>
                <dd className="max-w-3xl lg:col-span-8 lg:col-start-5">{row.content}</dd>
              </div>
            ))}
          </dl>

          <Link
            href={`/services/${next.slug}`}
            className="group mt-16 flex items-end justify-between gap-6 border-b border-forest-950 pb-6 lg:mt-24"
          >
            <span>
              <span className="mono-label block text-muted">Next service</span>
              <span className="mt-3 block font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] transition-colors duration-500 group-hover:text-forest-600">
                {next.name}
              </span>
            </span>
            <ArrowRight
              aria-hidden="true"
              className="mb-2 size-8 shrink-0 transition-transform duration-500 ease-out-expo group-hover:translate-x-2 lg:size-12"
            />
          </Link>
        </div>
      </section>

      <CtaBand />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: `${siteUrl}/services/${service.slug}`,
          provider: { "@type": "RoofingContractor", name: site.name, telephone: site.tel },
        }}
      />
    </>
  );
}
