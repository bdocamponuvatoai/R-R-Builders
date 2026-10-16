import { Fragment, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Small monospaced section marker, e.g. "(02) The approach". */
export function SectionLabel({
  index,
  children,
  tone = "light",
  className,
}: {
  index?: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p className={cn("mono-label flex gap-3", tone === "dark" ? "text-bone-50/60" : "text-muted", className)}>
      {index && <span className={tone === "dark" ? "text-forest-200" : "text-forest-600"}>({index})</span>}
      <span>{children}</span>
    </p>
  );
}

/** Headline that slides up from behind a mask on load. */
export function RevealLine({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={cn("block overflow-hidden pb-[0.06em]", className)}>
      <span className="block motion-safe:animate-reveal" style={{ animationDelay: `${delay}ms` }}>
        {children}
      </span>
    </span>
  );
}

/** Top-of-page header for inner pages. */
export function PageHero({
  label,
  title,
  intro,
  children,
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-bone-300">
      <div className="container-page pt-14 pb-14 sm:pt-20 lg:pt-28 lg:pb-20">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="mt-8 max-w-[15ch] font-display text-[clamp(3rem,8.5vw,8.25rem)] leading-[0.88] text-forest-950">
          <RevealLine>{title}</RevealLine>
        </h1>
        {(intro || children) && (
          <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-12">
            <div className="motion-safe:animate-fade motion-safe:[animation-delay:200ms] lg:col-span-6 lg:col-start-7">
              {intro && <p className="text-lg leading-relaxed text-muted lg:text-xl">{intro}</p>}
              {children}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * The bordered information grid from the corner of an architectural drawing.
 * Used as the site's signature detail for key facts.
 */
export function TitleBlock({
  rows,
  tone = "light",
  className,
}: {
  rows: { label: string; value: ReactNode }[];
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";

  return (
    <dl
      className={cn(
        "grid grid-cols-[minmax(6.5rem,auto)_1fr] border text-[0.9375rem]",
        dark ? "border-bone-50/30 *:border-bone-50/15" : "border-forest-950 *:border-forest-950/15",
        className,
      )}
    >
      {rows.map((row, i) => {
        const divider = i < rows.length - 1 ? "border-b" : "";
        return (
          <Fragment key={row.label}>
            <dt
              className={cn(
                "mono-label flex items-center border-r px-4 py-3",
                dark ? "text-bone-50/55" : "text-muted",
                divider,
              )}
            >
              {row.label}
            </dt>
            <dd className={cn("min-w-0 px-4 py-3 font-medium wrap-break-word", divider)}>{row.value}</dd>
          </Fragment>
        );
      })}
    </dl>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
