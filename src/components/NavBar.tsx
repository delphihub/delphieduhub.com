"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";
import { navLinks, programs } from "@/lib/site";
import { cn } from "@/lib/cn";

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-[72px] w-full max-w-[1512px] items-center justify-between px-5 sm:px-8 lg:px-[100px]">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 text-base font-medium transition-colors",
                    isActive(link.href)
                      ? "text-brand"
                      : "text-ink-secondary hover:text-brand",
                  )}
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="rounded-2xl border border-neutral-200 bg-white p-2 shadow-xl shadow-black/5">
                    {link.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-xl px-4 py-3 hover:bg-primary-100"
                      >
                        <span className="block text-sm font-semibold text-ink">
                          {c.name}
                        </span>
                        <span className="block text-xs text-ink-secondary">
                          {c.blurb}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-base font-medium transition-colors",
                    isActive(link.href)
                      ? "text-brand"
                      : "text-ink-secondary hover:text-brand",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            Book a Free Call
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-brand lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-neutral-200 bg-white lg:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-3 text-base font-medium text-ink"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        servicesOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="flex flex-col gap-1 pb-2 pl-3">
                      {programs.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="py-2 text-sm text-ink-secondary"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-medium text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
            <li className="pt-2">
              <Button
                href="/contact"
                variant="primary"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Book a Free Call
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
