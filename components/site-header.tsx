"use client";

import { useState } from "react";
import { nav } from "@/lib/content";
import { Wordmark } from "@/components/wordmark";

/**
 * Floating cream pill with a gold hairline. Collapses to a wordmark +
 * disclosure below md.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-5 md:pt-7">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-12">
        <div className="rounded-[999px] border border-gold-soft/45 bg-cream-pill/92 backdrop-blur-md">
          <div className="flex items-center justify-between gap-4 py-3 pl-5 pr-2 sm:gap-8 sm:pl-7 sm:pr-3 md:py-5 md:pl-10 md:pr-4">
            <Wordmark size="nav" />

            <nav
              aria-label="Primary"
              className="hidden lg:flex items-center gap-9"
            >
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-ink/70 transition-colors duration-400 hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-6">
              <a
                href="#cta"
                className="hidden sm:inline text-[0.8125rem] font-medium tracking-[0.02em] text-ink transition-colors duration-400 hover:text-gold"
              >
                Sign in
              </a>
              <a
                href="#cta"
                className="whitespace-nowrap rounded-full bg-ink px-5 py-3 text-[0.75rem] font-medium tracking-[0.02em] text-cream transition-colors duration-500 hover:bg-ink-deep sm:px-7 sm:py-3.5 sm:text-[0.8125rem]"
              >
                Let&rsquo;s Talk
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label="Toggle navigation"
                className="flex h-8 w-8 shrink-0 flex-col items-center justify-center gap-[5px] lg:hidden"
              >
                <span
                  className={`h-px w-4 bg-ink transition-transform duration-300 ${
                    open ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-4 bg-ink transition-transform duration-300 ${
                    open ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {open && (
            <nav
              id="mobile-nav"
              aria-label="Primary mobile"
              className="lg:hidden border-t border-gold-soft/30 px-9 py-6"
            >
              <ul className="flex flex-col gap-5">
                {nav.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-ink/70"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
