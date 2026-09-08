import { Star } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

/* ===========================================================
   PLACEHOLDER TESTIMONIALS
   Replace each entry with a real client quote once approved.
   =========================================================== */
const TESTIMONIALS = [
  {
    quote:
      "Earlier people walked past the shop. After the reels started, customers came in saying they saw our cold coffee online. That never happened before.",
    name: "Ritika Verma",
    role: "Owner, Brew Lane Café",
    rating: 5,
  },
  {
    quote:
      "They fixed our Google listing and photos in one week. Now bookings come from people searching for a salon near them.",
    name: "Sana Khan",
    role: "Salon Owner, Kanpur",
    rating: 5,
  },
  {
    quote:
      "I do not understand Instagram at all. I just send them photos on WhatsApp and everything else is handled.",
    name: "Amit Gupta",
    role: "Owner, Fitline Gym",
    rating: 4,
  },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="What shop owners say"
      subtitle="Placeholder quotes shown below — real client feedback will replace these as projects complete."
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal as="li" key={t.name} delay={i * 70} className="card-surface flex flex-col p-7">
            <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  size={15}
                  aria-hidden
                  className={s < t.rating ? "fill-primary text-primary" : "text-border"}
                />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              “{t.quote}”
            </blockquote>
            <footer className="mt-5 border-t border-border pt-4">
              <p className="font-display text-sm font-semibold text-navy">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </footer>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
