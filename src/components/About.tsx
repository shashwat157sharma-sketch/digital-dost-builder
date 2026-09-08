import { Section } from "./Section";
import { Reveal } from "./Reveal";

/* PLACEHOLDER STATS — swap these numbers as the business grows. */
const STATS = [
  { value: "50+", label: "Businesses helped" },
  { value: "Local-first", label: "Kanpur & nearby markets" },
  { value: "100%", label: "Personalised strategy" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About us"
      title="A digital team that speaks your customer's language"
      subtitle="Apna Digital Sathi started with one simple observation: the shop with the best chai on the street was invisible online, while a chain outlet two kilometres away had a queue."
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            We are a small, hands-on digital marketing studio built for local business owners — the kind who
            know every regular by name but have never had time to figure out reels, reviews or ads.
          </p>
          <p>
            <strong className="text-navy">Har Dukan Ka Digital Dost</strong> is not a slogan for us, it is the
            working method. We visit, we listen, we photograph your actual counter, and we build a presence that
            sounds like you — not like a template. No jargon, no lock-ins, no reports you cannot read.
          </p>
          <p>
            Our belief is straightforward: a neighbourhood salon deserves the same quality of branding, content
            and visibility that a national brand pays a large agency for.
          </p>
        </Reveal>

        <Reveal delay={100} className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {STATS.map((s) => (
            <div key={s.label} className="card-surface p-6">
              <p className="font-display text-2xl font-bold text-gradient-brand">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
