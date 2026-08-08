import { capabilities } from "@/lib/content";
import { CapabilityIcon } from "@/components/capability-icons";
import { Container, EyebrowCentered } from "@/components/ui";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-t border-gold-soft/25 bg-cream-deep/60 py-24 md:py-32"
    >
      <Container>
        <EyebrowCentered>Capabilities</EyebrowCentered>

        {/* The one centred headline on the page — set a shade smaller
            than the left-anchored display headings. */}
        <h2 className="display mt-10 text-center text-[clamp(1.9rem,3.4vw,2.65rem)] leading-[1.2]">
          <span className="block">Building what matters.</span>
          <span className="block">Eliminating what doesn&rsquo;t.</span>
        </h2>

        <p className="copy mx-auto mt-8 max-w-[32rem] text-center text-[1.0625rem] leading-[1.9]">
          End-to-end technology solutions designed to accelerate growth,
          strengthen operations, and future-proof your business.
        </p>

        <ul className="mt-20 grid gap-y-16 border-gold-soft/30 sm:grid-cols-2 sm:border-r lg:mt-24 lg:grid-cols-4">
          {capabilities.map((cap) => (
            <li
              key={cap.number}
              className="group flex flex-col border-gold-soft/30 px-0 sm:border-l sm:px-8 lg:px-6"
            >
              <div className="transition-transform duration-700 ease-out group-hover:-translate-y-1">
                <CapabilityIcon name={cap.icon} />
              </div>

              <p className="display mt-10 text-[1.0625rem] tracking-[0.06em] text-gold">
                {cap.number}
              </p>

              <h3 className="display mt-4 text-[1.125rem] leading-snug text-ink">
                {cap.title}
              </h3>

              <p className="copy mt-4 max-w-[17rem] text-[0.9375rem] leading-[1.85]">
                {cap.body}
              </p>

              {/* mt-auto keeps every rule on the same baseline regardless
                  of how many lines the copy runs to */}
              <div aria-hidden="true" className="mt-auto pt-8">
                <span className="block h-px w-8 bg-gold transition-all duration-700 ease-out group-hover:w-14" />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
