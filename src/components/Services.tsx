import { Instagram, Palette, Globe, Megaphone, Video, MapPin } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    icon: Instagram,
    title: "Social Media Management",
    body: "Planned posts, festive campaigns and replies to every comment and DM — your page stays alive all month.",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    body: "Logo, colours, menu cards, boards and packaging that make your shop instantly recognisable.",
  },
  {
    icon: Globe,
    title: "Website & Landing Pages",
    body: "A fast, mobile-first page with your menu, services and a click-to-call button that actually rings.",
  },
  {
    icon: Megaphone,
    title: "Paid Ads & Promotions",
    body: "Meta and Google ads targeted to the few kilometres around your shop, with spend you approve first.",
  },
  {
    icon: Video,
    title: "Content Creation & Reels",
    body: "On-location shoots of your food, space and staff, edited into reels people stop scrolling for.",
  },
  {
    icon: MapPin,
    title: "Local SEO & Google Profile",
    body: "Show up in 'near me' searches with an optimised Google Business Profile, photos and steady reviews.",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      tone="muted"
      eyebrow="Our services"
      title="Everything your shop needs to be found and remembered"
      subtitle="Pick one service or hand us the whole thing — each one is built to bring footfall, not just followers."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 60} className="card-surface card-lift p-7">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <s.icon size={20} aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-navy">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
