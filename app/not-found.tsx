import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/site/primitives";
import { site } from "@/content/site";
import { buttonStyles } from "@/lib/ui";

export default function NotFound() {
  return (
    <PageHero
      label="Error 404"
      title="Let’s get you back home."
      intro="The page you were looking for has moved or no longer exists."
    >
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={buttonStyles({ size: "lg" })}>
          <ArrowLeft aria-hidden="true" className="group-hover/button:-translate-x-1" />
          Back to home
        </Link>
        <a href={`tel:${site.tel}`} className={buttonStyles({ variant: "secondary", size: "lg" })}>
          Call {site.phone}
        </a>
      </div>
    </PageHero>
  );
}
