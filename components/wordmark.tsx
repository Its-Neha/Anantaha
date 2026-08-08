import Image from "next/image";
import Link from "next/link";

/**
 * The Anantaha wordmark — Didone caps threaded by the gold infinity
 * ribbon. Sized by height; the intrinsic 1017×161 ratio does the rest.
 */
const HEIGHT = { nav: "h-6 sm:h-7", footer: "h-8 sm:h-9" } as const;

export function Wordmark({
  size = "nav",
  className = "",
}: {
  size?: "nav" | "footer";
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center transition-opacity duration-500 hover:opacity-75 ${className}`}
    >
      <Image
        src="/anantaha-logo.png"
        alt="Anantaha"
        width={1017}
        height={161}
        priority={size === "nav"}
        sizes="240px"
        className={`w-auto select-none ${HEIGHT[size]}`}
      />
    </Link>
  );
}
