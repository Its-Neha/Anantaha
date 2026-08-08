import Image from "next/image";
import { hero } from "@/lib/content";
import {
  Container,
  EyebrowRule,
  GhostButton,
  PrimaryButton,
} from "@/components/ui";

/** Feathered wrappers keep the cream ground reading as continuous. */
const fadeLeft = "linear-gradient(to right, transparent 0%, #000 30%)";
const fadeBottom =
  "linear-gradient(to bottom, transparent 0%, #000 6%, #000 86%, transparent 100%)";
const fadeBand =
  "linear-gradient(to bottom, transparent 0%, #000 14%, #000 86%, transparent 100%)";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Sculptural visual, right-anchored and bleeding off the edge.
          Only overlaps the copy where there is room for it to. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden w-[56%] max-w-none lg:block"
        style={{ maskImage: fadeBottom, WebkitMaskImage: fadeBottom }}
      >
        <div style={{ maskImage: fadeLeft, WebkitMaskImage: fadeLeft }}>
          <Image
            src="/hero-infinity.png"
            alt=""
            width={952}
            height={896}
            priority
            sizes="56vw"
            className="h-auto w-full select-none"
          />
        </div>
      </div>

      <Container className="relative">
        <div className="max-w-[640px] pt-14 md:pt-24 lg:pt-28 lg:pb-16">
          <div className="rise">
            <EyebrowRule>{hero.eyebrow}</EyebrowRule>
          </div>

          <h1
            className="rise mt-9 text-display leading-[1.02]"
            style={{ animationDelay: "80ms" }}
          >
            <span className="display block italic text-gold">
              {hero.headingAccent}
            </span>
            <span className="display block text-ink">{hero.heading}</span>
          </h1>

          {/* Hard line breaks are an editorial choice for the wide layout;
              below lg the copy simply flows. */}
          <p
            className="rise copy mt-10 max-w-[26rem]"
            style={{ animationDelay: "180ms" }}
          >
            {hero.body.map((line) => (
              <span key={line} className="inline lg:block">
                {line}{" "}
              </span>
            ))}
          </p>

          <div
            className="rise mt-12 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "260ms" }}
          >
            <PrimaryButton href="#cta">Start a conversation</PrimaryButton>
            <GhostButton href="#capabilities">See our work</GhostButton>
          </div>
        </div>
      </Container>

      {/* Below lg the sculpture becomes its own full-bleed band. */}
      <div
        aria-hidden="true"
        className="mt-12 lg:hidden"
        style={{ maskImage: fadeBand, WebkitMaskImage: fadeBand }}
      >
        <Image
          src="/hero-infinity.png"
          alt=""
          width={952}
          height={896}
          priority
          sizes="100vw"
          className="h-auto w-full select-none"
        />
      </div>
    </section>
  );
}
