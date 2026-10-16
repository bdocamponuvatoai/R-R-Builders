import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { buttonStyles } from "@/lib/ui";

/** Thumb-reach call-to-action pinned to the bottom of small screens. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-bone-300 bg-bone-100/95 px-4 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a href={`tel:${site.tel}`} className={buttonStyles({ variant: "secondary" })}>
          Call {site.phone}
        </a>
        <Link href="/contact" className={buttonStyles()}>
          Enquire
          <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
