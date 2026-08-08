import { processSteps } from "@/lib/content";
import { Container } from "@/components/ui";
import { CodePanel } from "@/components/code-panel";

/** The one dark band on the page — deep royal indigo, full bleed. */
export function Process() {
  return (
    <section id="process" className="bg-ink-deep pb-20 pt-20 md:pt-24">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
          {/* Left: the three steps */}
          <div>
            <p className="eyebrow text-gold-soft/90">Process</p>

            <h2 className="display mt-8 text-display-2 leading-[1.18] text-on-dark">
              <span className="block">Three steps.</span>
              <span className="block">Infinite outcomes.</span>
            </h2>

            <ol className="mt-14 space-y-7">
              {processSteps.map((step, i) => (
                <li key={step.numeral} className="flex gap-7">
                  <div className="shrink-0 pt-1">
                    <span className="display block w-9 text-[1.5rem] leading-none text-gold-soft">
                      {step.numeral}
                    </span>
                    {i === processSteps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="mt-3 block h-px w-8 bg-gold-soft"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="display text-[1.375rem] leading-none text-on-dark">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[0.9375rem] leading-[1.8] text-on-dark-soft">
                      {step.body.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: the technology layer, stated plainly */}
          <CodePanel />
        </div>
      </Container>
    </section>
  );
}
