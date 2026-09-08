import { Section } from "./Section";
import { Reveal } from "./Reveal";

const STEPS = [
  { n: "01", title: "Discover", body: "We visit or call, understand your shop, your regulars and what you want more of." },
  { n: "02", title: "Strategy", body: "A one-page plan: platforms, content themes, budget and the result we are aiming for." },
  { n: "03", title: "Execute", body: "Shoots, designs, posting, ads and profile clean-up — handled end to end by us." },
  { n: "04", title: "Grow", body: "We read the numbers each month, keep what works, drop what does not, and scale up." },
];

export function Process() {
  return (
    <Section
      id="process"
      tone="muted"
      eyebrow="How we work"
      title="Four steps, no confusion"
      subtitle="You stay in your shop. We keep you updated at every step and never start spending without your go-ahead."
    >
      <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
        {/* Desktop connector line */}
        <span aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
        {STEPS.map((s, i) => (
          <Reveal as="li" key={s.n} delay={i * 80} className="relative">
            <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand font-display text-sm font-bold text-primary-foreground">
              {s.n}
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-navy">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
