import type { ReactNode } from "react";
import { footerColumns } from "@/lib/content";
import { Container } from "@/components/ui";
import { Wordmark } from "@/components/wordmark";

/* Instagram has no usable text glyph, so it gets a line mark drawn to sit
   at the same optical weight as the characters beside it. */
function InstagramMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[1em] w-[1em]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.1" cy="6.9" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socials: {
  label: string;
  href: string;
  glyph?: string;
  icon?: ReactNode;
}[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/anantaha",
    glyph: "in",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/anantahaworld/",
    icon: <InstagramMark />,
  },
  { label: "Email", href: "mailto:anantaha.hq@gmail.com", glyph: "@" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-gold-faint pb-20 pt-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:gap-20">
          {/* Identity */}
          <div>
            <Wordmark size="footer" />
            <p className="mt-5 text-[0.9375rem] text-body/90">
              Infinite by purpose.
            </p>
            <ul className="mt-9 flex items-center gap-7">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    {...(s.href.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="flex h-[1em] items-center text-[1.0625rem] leading-none text-gold transition-colors duration-500 hover:text-ink"
                  >
                    {s.icon ?? <span aria-hidden="true">{s.glyph}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sitemap — columns size to their content so the longest link
              stays on one line, as in the mockup */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:flex sm:justify-between sm:gap-x-10">
            {footerColumns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="eyebrow text-[0.625rem] text-ink/60">
                  {col.title}
                </h2>
                <ul className="mt-6 space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[0.875rem] leading-snug text-body/85 transition-colors duration-400 hover:text-gold"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
