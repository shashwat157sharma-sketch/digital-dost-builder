import { Section } from "./Section";
import { Reveal } from "./Reveal";

/* ===========================================================
   PLACEHOLDER PORTFOLIO GRID
   Replace each tile with a real case study (image + result).
   =========================================================== */
const TILES = [
  "Café brand refresh",
  "Salon reels series",
  "Gym membership ads",
  "Clinic Google profile",
  "Boutique launch campaign",
  "Coaching institute page",
];

export function Portfolio() {
  return (
    <Section
      id="work"
      tone="muted"
      eyebrow="Our work"
      title="Case studies are on the way"
      subtitle="We are documenting before-and-after results from current projects. This space will fill up with real numbers soon."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TILES.map((t, i) => (
          <Reveal as="li" key={t} delay={i * 50}>
            <div className="card-surface flex aspect-4/3 flex-col justify-end overflow-hidden p-6">
              <span className="w-fit rounded-full border border-primary/25 bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
                Coming soon
              </span>
              <p className="mt-3 font-display text-lg font-semibold text-navy">{t}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
