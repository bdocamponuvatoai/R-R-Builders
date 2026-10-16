import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer data-surface="dark" className="bg-forest-950 text-bone-100">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <Link href="/" aria-label={`${site.name}, home`} className="inline-block text-bone-50">
            <Logo />
          </Link>
          <p className="mt-6 max-w-sm leading-relaxed text-bone-100/60">
            Roofing and home repairs with a personal approach. Talk directly with the owner.
          </p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-3">
          <h2 className="mono-label text-bone-100/45">Pages</h2>
          <ul className="mt-5 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-forest-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="mono-label text-bone-100/45">Contact</h2>
          <ul className="mt-5 space-y-2.5">
            <li>
              <a href={`tel:${site.tel}`} className="tabular-nums transition-colors hover:text-forest-200">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-forest-200">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bone-50/10">
        <div className="container-page mono-label flex flex-col gap-3 py-6 text-bone-100/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Photography is illustrative, not a project portfolio</p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="transition-colors hover:text-bone-50">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-bone-50">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
