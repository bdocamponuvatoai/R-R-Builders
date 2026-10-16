"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { buttonStyles } from "@/lib/ui";
import { cn } from "@/lib/utils";

const serviceOptions = [
  { value: "roofing", label: "Roofing", phrase: "roofing" },
  { value: "home-repairs", label: "Home repairs", phrase: "home repairs" },
  { value: "both", label: "Both", phrase: "roofing and home repairs" },
] as const;

const DETAILS_MAX = 3000;
const SUBJECT = `Project enquiry — ${site.name}`;

const fieldStyles =
  "w-full rounded-[3px] border border-bone-300 bg-bone-100/70 px-4 text-base text-forest-950 outline-none transition-colors placeholder:text-muted/60 hover:border-bone-400 focus:border-forest-950 focus:bg-white user-invalid:border-danger";

function buildDraft(data: FormData): string {
  const get = (key: string) => String(data.get(key) ?? "").trim();
  const service = serviceOptions.find((option) => option.value === get("service"));

  return [
    `Hello ${site.name},`,
    "",
    `I would like to discuss a ${service?.phrase ?? "home"} project.`,
    "",
    `Name: ${get("name")}`,
    `Email: ${get("email")}`,
    `Phone: ${get("phone") || "Not provided"}`,
    `Town / ZIP: ${get("location")}`,
    "",
    "Project details:",
    get("details"),
    "",
    "Please let me know the next steps.",
  ].join("\n");
}

function Field({ label, optional, children }: { label: string; optional?: boolean; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2.5">
      <span className="mono-label text-forest-950">
        {label}
        {optional && <span className="ml-2 text-muted">Optional</span>}
      </span>
      {children}
    </label>
  );
}

export function EnquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const resultHeadingRef = useRef<HTMLHeadingElement>(null);
  const [draft, setDraft] = useState<string | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const [detailsLength, setDetailsLength] = useState(0);

  // Preselect the service when arriving from a service page, e.g. /contact?service=roofing.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("service");
    const field = formRef.current?.elements.namedItem("service");
    if (requested && field instanceof RadioNodeList && serviceOptions.some((o) => o.value === requested)) {
      field.value = requested;
    }
  }, []);

  useEffect(() => {
    if (draft !== null) resultHeadingRef.current?.focus();
  }, [draft]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDraft(buildDraft(new FormData(event.currentTarget)));
    setCopyState("idle");
  }

  function editDetails() {
    setDraft(null);
    requestAnimationFrame(() => {
      const first = formRef.current?.elements.namedItem("name");
      if (first instanceof HTMLInputElement) first.focus();
    });
  }

  async function copyDraft() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <div className="border border-forest-950 bg-bone-50">
      <div className="flex items-center justify-between border-b border-forest-950/15 px-6 py-3 sm:px-8">
        <span className="mono-label text-muted">Project enquiry</span>
        <span className="mono-label text-forest-600">{draft === null ? "Step 1 / 2" : "Step 2 / 2"}</span>
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        <form ref={formRef} onSubmit={handleSubmit} hidden={draft !== null} className="space-y-7">
          <noscript>
            <p className="border border-bone-300 p-4 text-sm">
              This form needs JavaScript. Please call {site.phone} or email {site.email} directly.
            </p>
          </noscript>

          <div>
            <h2 className="font-display text-[2.5rem] leading-[0.95] text-forest-950">Tell us what you have in mind.</h2>
            <p className="mt-3 text-muted">
              We’ll turn your details into an email you can review and send from your own inbox.
            </p>
          </div>

          <fieldset>
            <legend className="mono-label text-forest-950">What can we help with?</legend>
            <div className="mt-2.5 grid grid-cols-3 rounded-[3px] border border-bone-300">
              {serviceOptions.map((option) => (
                <label key={option.value} className="relative not-last:border-r not-last:border-bone-300">
                  <input type="radio" name="service" value={option.value} required className="peer sr-only" />
                  <span className="flex h-12 items-center justify-center px-2 text-center text-[0.9375rem] font-medium transition-colors peer-checked:bg-forest-900 peer-checked:text-bone-50 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-forest-600 hover:bg-bone-200 peer-checked:hover:bg-forest-900">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Your name">
              <input name="name" autoComplete="name" required maxLength={100} placeholder="Full name" className={cn(fieldStyles, "h-12")} />
            </Field>
            <Field label="Email address">
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={200}
                placeholder="you@example.com"
                className={cn(fieldStyles, "h-12")}
              />
            </Field>
            <Field label="Phone" optional>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={40}
                placeholder="Best number to reach you"
                className={cn(fieldStyles, "h-12")}
              />
            </Field>
            <Field label="Town or ZIP code">
              <input
                name="location"
                autoComplete="address-level2"
                required
                maxLength={120}
                placeholder="Where is the property?"
                className={cn(fieldStyles, "h-12")}
              />
            </Field>
          </div>

          <Field label="A few details">
            <textarea
              name="details"
              required
              minLength={10}
              maxLength={DETAILS_MAX}
              rows={5}
              onChange={(event) => setDetailsLength(event.currentTarget.value.length)}
              placeholder="What’s the issue, what work do you have in mind, and when would you like it done?"
              className={cn(fieldStyles, "resize-y py-3 leading-relaxed")}
            />
            <span className="mono-label self-end text-muted tabular-nums" aria-hidden="true">
              {detailsLength} / {DETAILS_MAX}
            </span>
          </Field>

          <div className="flex flex-col gap-5 border-t border-bone-300 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-muted sm:max-w-[16rem]">
              Nothing is sent or saved by this form. You review the message and send it yourself.
            </p>
            <button type="submit" className={buttonStyles({ size: "lg", className: "w-full sm:w-auto" })}>
              Prepare my email
              <ArrowRight aria-hidden="true" className="group-hover/button:translate-x-1" />
            </button>
          </div>
        </form>

        {draft !== null && (
          <div className="space-y-7">
            <div>
              <h2
                ref={resultHeadingRef}
                tabIndex={-1}
                className="font-display text-[2.5rem] leading-[0.95] text-forest-950 outline-none"
              >
                Your email is ready.
              </h2>
              <p className="mt-3 text-muted">
                It hasn’t been sent yet. Open it in your email app, attach photos if helpful, then send it to us.
              </p>
            </div>

            <pre className="max-h-80 overflow-auto border border-bone-300 bg-bone-100 p-5 font-mono text-[0.8125rem] leading-relaxed break-words whitespace-pre-wrap text-forest-900">
              {draft}
            </pre>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(draft)}`}
                className={buttonStyles({ size: "lg" })}
              >
                Open in email app
                <ArrowRight aria-hidden="true" className="group-hover/button:translate-x-1" />
              </a>
              <button type="button" onClick={copyDraft} className={buttonStyles({ variant: "secondary", size: "lg" })}>
                {copyState === "copied" ? "Copied to clipboard" : "Copy message"}
              </button>
            </div>

            <div className="flex flex-col gap-4 border-t border-bone-300 pt-6 text-sm sm:flex-row sm:items-start sm:justify-between">
              <p role="status" className="text-muted sm:max-w-xs">
                {copyState === "failed"
                  ? `Couldn’t copy automatically. Select the message above, then email ${site.email}.`
                  : `If your email app doesn’t open, copy the message and email ${site.email}.`}
              </p>
              <button type="button" onClick={editDetails} className="link-line shrink-0 self-start font-medium">
                Edit details
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
