import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionLabel, TitleBlock } from "@/components/site/primitives";
import { services } from "@/content/services";
import { faqs, site, steps, valueProps } from "@/content/site";
import { buttonStyles } from "@/lib/ui";
import ctaImage from "@/public/images/cta-home.jpg";
import planningImage from "@/public/images/project-planning.jpg";

const LETTERS = ["a", "b", "c", "d"];

/** Large editorial statement introducing the business. */
export function Approach({ index }: { index?: string }) {
  return (
    <section aria-labelledby="approach-heading" className="py-24 lg:py-36">
      <div className="container-page grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <SectionLabel index={index}>The approach</SectionLabel>
          <h2 id="approach-heading" className="sr-only">
            The approach
          </h2>
        </div>
        <div className="lg:col-span-9">
          <p className="max-w-none text-[clamp(1.75rem,3.3vw,3.25rem)] leading-[1.12] font-medium tracking-[-0.025em] text-forest-950">
            {site.name} is an owner-run roofing and home repair business.{" "}
            <span className="text-muted">
              When something at home needs attention, you talk to the person who runs it first, about the leak, the
              list and the plan, before any work begins.
            </span>
          </p>

          <ul className="mt-14 grid gap-px border border-bone-300 bg-bone-300 sm:grid-cols-3 lg:mt-20">
            {valueProps.map((item, i) => (
              <li key={item.title} className="bg-bone-100 p-6 lg:p-8">
                <span className="mono-label text-forest-600">({LETTERS[i]})</span>
                <h3 className="mt-8 text-lg font-semibold tracking-tight lg:mt-12">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>

          <Link href="/about" className="link-line mt-10 inline-flex items-center gap-2 font-medium">
            About R&amp;R
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Index-style list of services, one large row per service. */
export function ServiceList({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;

  return (
    <ul className="border-t border-forest-950">
      {services.map((service) => (
        <li key={service.slug} className="border-b border-bone-300">
          <Link
            href={`/services/${service.slug}`}
            className="group grid gap-8 py-10 lg:grid-cols-12 lg:gap-10 lg:py-14"
          >
            <span className="mono-label text-forest-600 lg:col-span-1 lg:pt-3">{service.number}</span>
            <div className="flex flex-col lg:col-span-5">
              <Heading className="font-display text-[clamp(3rem,6.5vw,6rem)] leading-[0.86] transition-colors duration-500 group-hover:text-forest-600">
                {service.name}
              </Heading>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{service.short}</p>
              <ul className="mt-8 max-w-md border-t border-bone-300">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-4 border-b border-bone-300 py-3 text-[0.9375rem]">
                    <span aria-hidden="true" className="text-forest-600">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="mt-10 inline-flex items-center gap-3 font-medium lg:mt-auto lg:pt-10">
                Explore {service.name.toLowerCase()}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5"
                />
              </span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-bone-200 lg:col-span-6">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.04]"
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Process({ index }: { index?: string }) {
  return (
    <section aria-labelledby="process-heading" className="border-y border-bone-300 bg-bone-50 py-24 lg:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionLabel index={index}>Process</SectionLabel>
            <h2
              id="process-heading"
              className="mt-6 font-display text-[clamp(2.75rem,4.8vw,4.5rem)] leading-[0.9] text-forest-950"
            >
              From “needs fixing” to a plan of action.
            </h2>
          </div>
        </div>
        <ol className="border-t border-forest-950 lg:col-span-7 lg:col-start-6">
          {steps.map((step, i) => (
            <li key={step.title} className="grid gap-3 border-b border-bone-300 py-8 sm:grid-cols-[8rem_1fr] lg:py-11">
              <span className="mono-label pt-1.5 text-forest-600">Step 0{i + 1}</span>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 max-w-lg text-lg leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Principles() {
  return (
    <section aria-labelledby="principles-heading" className="border-t border-bone-300 py-24 lg:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionLabel>How we work</SectionLabel>
          <h2
            id="principles-heading"
            className="mt-6 font-display text-[clamp(2.75rem,4.8vw,4.5rem)] leading-[0.9] text-forest-950"
          >
            Straightforward, from the first call.
          </h2>
        </div>
        <ul className="border-t border-forest-950 lg:col-span-7 lg:col-start-6">
          {valueProps.map((item, i) => (
            <li key={item.title} className="grid gap-3 border-b border-bone-300 py-8 sm:grid-cols-[8rem_1fr] lg:py-11">
              <span className="mono-label pt-1.5 text-forest-600">({LETTERS[i]})</span>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 max-w-lg text-lg leading-relaxed text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq({ index }: { index?: string }) {
  return (
    <section aria-labelledby="faq-heading" className="py-24 lg:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionLabel index={index}>Questions</SectionLabel>
          <h2
            id="faq-heading"
            className="mt-6 font-display text-[clamp(2.75rem,4.8vw,4.5rem)] leading-[0.9] text-forest-950"
          >
            Before we get started.
          </h2>
          <p className="mt-6 text-lg text-muted">Something else on your mind?</p>
          <a href={`tel:${site.tel}`} className="link-line mt-3 inline-flex items-center gap-2 font-medium">
            Ask us directly
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
        <div className="border-t border-forest-950 lg:col-span-7 lg:col-start-6">
          {faqs.map((faq, i) => (
            <details key={faq.question} name="faq" className="faq-item group border-b border-bone-300">
              <summary className="grid list-none grid-cols-[2.5rem_1fr_auto] items-baseline gap-2 py-6 text-left lg:py-7">
                <span className="mono-label text-muted">0{i + 1}</span>
                <span className="text-lg font-medium transition-colors group-hover:text-forest-600 lg:text-xl">
                  {faq.question}
                </span>
                <span aria-hidden="true" className="mono-label w-4 text-center text-base text-forest-600">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">–</span>
                </span>
              </summary>
              <p className="max-w-2xl pr-8 pb-8 pl-12 text-lg leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Closing call-to-action with an editorial image and a direct phone-first path. */
export function CtaBand({ index }: { index?: string }) {
  return (
    <section aria-labelledby="cta-heading" className="border-t border-bone-300 bg-bone-100 py-5 sm:py-8 lg:py-12">
      <div className="container-page">
        <div
          data-surface="dark"
          className="grid overflow-hidden bg-forest-950 text-bone-50 lg:min-h-[42rem] lg:grid-cols-12"
        >
          <figure className="relative aspect-[5/4] overflow-hidden bg-forest-900 lg:order-2 lg:col-span-5 lg:aspect-auto">
            <Image
              src={ctaImage}
              alt="New England home with a charcoal roof and a warmly lit entry at dusk"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-[center_46%] transition-transform duration-[1.6s] ease-out-expo hover:scale-[1.025]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-forest-950/55 via-transparent to-forest-950/5"
            />
            <div className="absolute top-5 left-5 border border-bone-50/25 bg-forest-950/70 px-4 py-3 backdrop-blur-md sm:top-7 sm:left-7">
              <p className="mono-label text-bone-50/75">Home, cared for.</p>
            </div>
            <figcaption className="mono-label absolute right-5 bottom-5 left-5 flex justify-between gap-4 text-bone-50/65 sm:right-7 sm:bottom-7 sm:left-7">
              <span>Fig. 07</span>
              <span>Illustrative photography</span>
            </figcaption>
          </figure>

          <div className="flex flex-col p-6 sm:p-10 lg:col-span-7 lg:p-14 xl:p-16">
            <SectionLabel index={index} tone="dark">
              Start here
            </SectionLabel>
            <h2
              id="cta-heading"
              className="mt-8 max-w-[10ch] font-display text-[clamp(3.25rem,6.5vw,6.75rem)] leading-[0.86]"
            >
              Let’s take care of your home.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-bone-50/65">
              A roofing concern. A repair on your list. Start with a direct conversation about what your home needs.
            </p>

            <div className="mt-14 border-t border-bone-50/15 pt-8 lg:mt-auto">
              <p className="mono-label text-bone-50/50">Talk directly with the owner</p>
              <a
                href={`tel:${site.tel}`}
                className="group mt-3 inline-flex items-start gap-3 font-display text-[clamp(2.65rem,5vw,5rem)] leading-none text-forest-200 tabular-nums transition-colors duration-500 hover:text-bone-50"
              >
                {site.phone}
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-[0.08em] size-[0.42em] transition-transform duration-500 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className={buttonStyles({ variant: "light", size: "lg", className: "justify-between sm:min-w-52" })}
                >
                  Send an enquiry
                  <ArrowRight aria-hidden="true" className="group-hover/button:translate-x-1" />
                </Link>
                <p className="mono-label text-bone-50/45">No obligation · Just a conversation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Editorial planning image for the owner-led about story. */
export function OwnerPanel() {
  return (
    <figure>
      <div className="relative aspect-[4/5] overflow-hidden bg-bone-200">
        <Image
          src={planningImage}
          alt="A craftsperson and homeowner reviewing a project plan together (illustrative photography)"
          fill
          placeholder="blur"
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover motion-safe:animate-settle"
        />
        <div className="absolute top-4 left-4 border border-forest-950/15 bg-bone-100/95 px-4 py-3 backdrop-blur-sm sm:top-6 sm:left-6">
          <SectionLabel>Owner-led planning</SectionLabel>
        </div>
      </div>
      <TitleBlock
        className="border-t-0"
        rows={[
          { label: "Owner", value: site.owner },
          { label: "Approach", value: "A clear plan before work begins" },
          { label: "Direct line", value: <a href={`tel:${site.tel}`}>{site.phone}</a> },
        ]}
      />
      <figcaption className="mono-label mt-4 text-muted">Fig. 01. Illustrative planning scene</figcaption>
    </figure>
  );
}

/** Typographic brand panel, used where a photograph would normally go. */
export function BrandPanel() {
  return (
    <div
      data-surface="dark"
      className="flex aspect-[4/5] w-full flex-col justify-between bg-forest-900 p-6 text-bone-50 sm:p-8"
    >
      <SectionLabel tone="dark">Owner-run</SectionLabel>
      <div>
        <p aria-hidden="true" className="font-display text-[clamp(7rem,18vw,13rem)] leading-[0.8] text-forest-200">
          R&amp;R
        </p>
        <TitleBlock
          tone="dark"
          className="mt-8"
          rows={[
            { label: "Business", value: site.name },
            { label: "Services", value: "Roofing, home repairs" },
            { label: "Call", value: <a href={`tel:${site.tel}`}>{site.phone}</a> },
          ]}
        />
      </div>
    </div>
  );
}
