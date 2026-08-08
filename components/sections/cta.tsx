import Image from "next/image";
import { Container, GhostButton, PrimaryButton } from "@/components/ui";

const fadeLeft = "linear-gradient(to right, transparent 0%, #000 28%)";

export function Cta() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden pb-12 pt-12 md:pb-14 md:pt-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-2 right-0 hidden w-[50%] max-w-none md:block"
        style={{ maskImage: fadeLeft, WebkitMaskImage: fadeLeft }}
      >
        <Image
          src="/cta-infinity.png"
          alt=""
          width={864}
          height={356}
          sizes="58vw"
          className="h-auto w-full select-none"
        />
      </div>

      <Container className="relative">
        <div className="max-w-[38rem]">
          <h2 className="display text-display-2 leading-[1.16]">
            <span className="block">Ready to build</span>
            <span className="block">something endless?</span>
          </h2>

          <p className="copy mt-6 text-[1rem]">
            Let&rsquo;s create the future&mdash;together.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton href="#cta">Start a conversation</PrimaryButton>
            <GhostButton href="#capabilities">See our work</GhostButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
