import type { ReactNode } from "react";

/* ---------------------------------------------------------------
   Shared primitives: container, eyebrows, hairlines, buttons.
   --------------------------------------------------------------- */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1320px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

/** Eyebrow preceded by a short gold rule — the left-anchored variant. */
export function EyebrowRule({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-5">
      <span className="h-px w-11 shrink-0 bg-gold-soft" aria-hidden="true" />
      <span className="eyebrow text-[0.75rem]">{children}</span>
    </div>
  );
}

/** Eyebrow flanked by gold rules — the centered variant. */
export function EyebrowCentered({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-5">
      <span className="h-px w-11 bg-gold-soft/70" aria-hidden="true" />
      <span className="eyebrow text-[0.75rem]">{children}</span>
      <span className="h-px w-11 bg-gold-soft/70" aria-hidden="true" />
    </div>
  );
}

export function ArrowRight() {
  return (
    <svg
      viewBox="0 0 20 12"
      width="20"
      height="12"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-500 ease-out group-hover:translate-x-1"
    >
      <path d="M0 6h18" stroke="currentColor" strokeWidth="1" />
      <path
        d="M13.4 1.4 18 6l-4.6 4.6"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Filled indigo pill. */
export function PrimaryButton({
  children,
  href = "#cta",
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 rounded-full bg-ink px-10 py-4 text-[0.8125rem] font-medium tracking-[0.06em] text-cream shadow-[0_10px_30px_-16px_rgba(46,27,87,0.75)] transition-all duration-500 hover:bg-ink-deep hover:shadow-[0_16px_40px_-18px_rgba(46,27,87,0.85)]"
    >
      {children}
      <ArrowRight />
    </a>
  );
}

/** Gold-outlined pill on cream. */
export function GhostButton({
  children,
  href = "#capabilities",
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-full border border-gold-soft/60 px-10 py-4 text-[0.8125rem] font-medium tracking-[0.06em] text-ink transition-colors duration-500 hover:border-gold hover:bg-gold/[0.06]"
    >
      {children}
    </a>
  );
}
