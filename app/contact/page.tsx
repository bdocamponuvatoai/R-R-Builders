import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { PageHero, TitleBlock } from "@/components/site/primitives";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Talk About Your Project",
  description: `Contact ${site.name}. Call ${site.phone} or email ${site.email} about roofing and home repairs.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Good work starts with a conversation."
        intro="Roofing concern or home repair? Tell us what you need, by phone, by email or with the form below."
      />

      <section aria-label="Contact options" className="py-16 lg:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
          <aside className="min-w-0 lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <p className="mono-label text-muted">Direct line</p>
            <a
              href={`tel:${site.tel}`}
              className="group mt-3 inline-flex items-start gap-2 font-display text-[clamp(2.75rem,5vw,4.5rem)] leading-none tabular-nums transition-colors duration-500 hover:text-forest-600"
            >
              {site.phone}
              <ArrowUpRight
                aria-hidden="true"
                className="mt-[0.1em] size-[0.4em] transition-transform duration-500 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
            <p className="mt-3 text-muted">The quickest way to ask about availability.</p>

            <p className="mono-label mt-12 text-muted">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="link-line mt-3 inline-block text-xl font-medium wrap-anywhere sm:text-2xl"
            >
              {site.email}
            </a>

            <TitleBlock
              className="mt-12"
              rows={[
                { label: "Business", value: "Owner-run, direct contact" },
                { label: "Services", value: "Roofing, home repairs" },
                { label: "Service area", value: "Confirmed by town or ZIP" },
                { label: "Urgent", value: "Call to ask about availability" },
              ]}
            />
          </aside>

          <div className="lg:col-span-6 lg:col-start-7">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
