"use client";

import { useEffect } from "react";
import { PageHero } from "@/components/site/primitives";
import { site } from "@/content/site";
import { buttonStyles } from "@/lib/ui";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageHero
      label="Something went wrong"
      title="Sorry, this page didn’t load."
      intro={`Please try again. If it keeps happening, call us directly on ${site.phone}.`}
    >
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={reset} className={buttonStyles({ size: "lg" })}>
          Try again
        </button>
        <a href={`tel:${site.tel}`} className={buttonStyles({ variant: "secondary", size: "lg" })}>
          Call {site.phone}
        </a>
      </div>
    </PageHero>
  );
}
