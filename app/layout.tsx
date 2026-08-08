import type { Metadata } from "next";
import { Bodoni_Moda, Jost, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

/* High-contrast Didone display serif — the wordmark and every headline. */
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

/* Geometric sans for body copy and wide-tracked uppercase labels. */
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

/* IBM Plex Mono for the process code panel. */
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anantaha.com"),
  title: "Anantaha — Infinite by purpose.",
  description:
    "We partner with ambitious organizations to solve business challenges of any size, in any industry, through technology.",
  openGraph: {
    title: "Anantaha — Infinite by purpose.",
    description:
      "Infinite possibilities by purpose. End-to-end technology solutions designed to accelerate growth, strengthen operations, and future-proof your business.",
    type: "website",
    images: [{ url: "/anantaha-logo.png", width: 1017, height: 161 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${jost.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
