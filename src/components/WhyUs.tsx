import { Store, IndianRupee, HeartHandshake, LineChart } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const REASONS = [
  {
    icon: Store,
    title: "We know your market",
    body: "Local festivals, wedding season, exam months, weekend crowds — the calendar we plan around is the one your street actually follows.",
  },
  {
    icon: IndianRupee,
    title: "Packages sized for small shops",
    body: "Pricing built for a single outlet, not a corporate budget. You will always know exactly what you are paying for.",
  },
  {
    icon: HeartHandshake,
    title: "One person, always reachable",
    body: "No ticket numbers. You get a direct WhatsApp line to the person handling your account.",
  },
  {
    icon: LineChart,
    title: "Reporting you can read",
    body: "A plain-language monthly summary: what we posted, what people did, and what we will change next month.",
  },
];

export function WhyUs() {
  return (
    <Section
      id="why-us"
      eyebrow="Why choose us"
      title="Built around how local businesses actually run"
      subtitle="Big agencies optimise for big clients. We optimise for the shop owner who is also the cashier, the manager and the customer care team."
    >
      <ul className="grid gap-6 sm:grid-cols-2">
        {REASONS.map((r, i) => (
          <Reveal as="li" key={r.title} delay={i * 60} className="flex gap-4 rounded-xl p-2">
            <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-brand text-primary-foreground">
              <r.icon size={18} aria-hidden />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-lg font-semibold text-navy">{r.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
