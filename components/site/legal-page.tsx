import type { ReactNode } from "react";
import { PageHero } from "@/components/site/primitives";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <PageHero label="R&R Rebuilders · Legal" title={title} />
      <section className="container-page grid py-16 lg:grid-cols-12 lg:py-24">
        <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-6 lg:col-start-7 [&_strong]:font-semibold [&_strong]:text-forest-950">
          {children}
        </div>
      </section>
    </>
  );
}
