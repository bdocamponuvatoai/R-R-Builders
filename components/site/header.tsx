"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { TitleBlock } from "@/components/site/primitives";
import { nav, site } from "@/content/site";
import { buttonStyles } from "@/lib/ui";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDialogElement>(null);

  const openMenu = () => menuRef.current?.showModal();
  const closeMenu = () => menuRef.current?.close();

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-bone-300 bg-bone-100/90 backdrop-blur-md">
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-8">
          <Link href="/" aria-label={`${site.name}, home`} className="text-forest-950">
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-9">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className="relative py-2 text-[0.9375rem] text-muted transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-forest-950 after:transition-transform after:duration-500 after:ease-out-expo hover:text-forest-950 hover:after:scale-x-100 aria-[current=page]:text-forest-950 aria-[current=page]:after:scale-x-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-7">
            <a href={`tel:${site.tel}`} className="hidden flex-col items-end leading-tight xl:flex">
              <span className="mono-label text-muted">Direct line</span>
              <span className="font-medium tabular-nums">{site.phone}</span>
            </a>
            <Link href="/contact" className={buttonStyles({ className: "hidden lg:inline-flex" })}>
              Start a project
              <ArrowUpRight aria-hidden="true" className="group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
            </Link>
            <button
              type="button"
              onClick={openMenu}
              aria-haspopup="dialog"
              className="-mr-2 flex h-11 items-center gap-3 px-2 md:hidden"
            >
              <span className="mono-label">Menu</span>
              <span aria-hidden="true" className="flex w-5 flex-col gap-[5px]">
                <span className="h-[1.5px] bg-current" />
                <span className="h-[1.5px] bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <dialog
        ref={menuRef}
        aria-label="Menu"
        className="sheet"
        onClick={(event) => {
          // The inner panel fills the dialog, so a click on the dialog itself is a backdrop click.
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="flex h-full flex-col px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-8">
          <div className="flex h-[4.5rem] shrink-0 items-center justify-between border-b border-bone-300">
            <Logo />
            <button type="button" onClick={closeMenu} className="-mr-2 flex h-11 items-center gap-3 px-2">
              <span className="mono-label">Close</span>
              <span aria-hidden="true" className="relative size-5">
                <span className="absolute inset-x-0 top-1/2 h-[1.5px] rotate-45 bg-current" />
                <span className="absolute inset-x-0 top-1/2 h-[1.5px] -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-6">
            <ul>
              {nav.map((item, index) => (
                <li key={item.href} className="border-b border-bone-300">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className="flex items-baseline gap-5 py-4 aria-[current=page]:text-forest-600"
                  >
                    <span className="mono-label w-6 text-muted">0{index + 1}</span>
                    <span className="font-display text-5xl leading-none">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto space-y-4 pt-8">
            <TitleBlock
              rows={[
                { label: "Call", value: <a href={`tel:${site.tel}`}>{site.phone}</a> },
                { label: "Email", value: <a href={`mailto:${site.email}`}>{site.email}</a> },
              ]}
            />
            <a href={`tel:${site.tel}`} className={buttonStyles({ size: "lg", className: "w-full" })}>
              Call {site.phone}
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
