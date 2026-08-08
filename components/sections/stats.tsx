import { stats } from "@/lib/content";
import { Container } from "@/components/ui";

/* 2-up on small screens, 4-up from md — dividers follow the grid. */
const divider = ["", "border-l", "md:border-l", "border-l"];

/** Four figures separated by thin gold rules — never boxes. */
export function Stats() {
  return (
    <section className="relative pb-20 pt-8 md:pb-28 md:pt-14">
      <Container>
        <dl className="grid grid-cols-2 gap-y-14 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`border-gold-soft/35 px-2 md:px-8 ${divider[i]}`}
            >
              <dd className="display text-stat leading-none text-ink">
                {stat.value}
              </dd>
              <dt className="eyebrow mt-5 block text-[0.625rem]">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
