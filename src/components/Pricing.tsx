import { Check } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

/* ===========================================================
   PLACEHOLDER PRICING TIERS
   Inclusions are indicative; final packages are quoted per shop.
   =========================================================== */
const TIERS = [
  {
    name: "Starter",
    tag: "For a shop going online for the first time",
    features: ["Profile setup & clean-up", "8 posts a month", "Google Business Profile basics", "WhatsApp support"],
    featured: false,
  },
  {
    name: "Growth",
    tag: "For shops that want steady footfall",
    features: ["16 posts + 4 reels a month", "On-location shoot", "Local ads management", "Monthly plain-language report"],
    featured: true,
  },
  {
    name: "Premium",
    tag: "For multi-service or multi-outlet businesses",
    features: ["Full content calendar", "Branding & design support", "Landing page included", "Priority one-on-one strategy calls"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Packages"
      title="Simple packages, quoted for your shop"
      subtitle="Indicative tiers below — final pricing depends on your city, category and how much shooting is involved."
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {TIERS.map((t, i) => (
          <Reveal
            as="li"
            key={t.name}
            delay={i * 70}
            className={`card-surface card-lift flex flex-col p-7 ${
              t.featured ? "border-primary/40 ring-1 ring-primary/25" : ""
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-xl font-bold text-navy">{t.name}</h3>
              {t.featured ? (
                <span className="rounded-full bg-gradient-brand px-3 py-1 text-[11px] font-semibold text-primary-foreground">
                  Most chosen
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{t.tag}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-7 rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors ${
                t.featured
                  ? "bg-gradient-brand text-primary-foreground"
                  : "border border-navy/20 text-navy hover:border-primary/50 hover:text-primary"
              }`}
            >
              Contact for pricing
            </a>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
