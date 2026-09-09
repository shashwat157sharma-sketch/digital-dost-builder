import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Linkedin } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { CONTACT } from "./brand";

/** Contact form is front-end only — wire `handleSubmit` to a backend or form service later. */
export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const business = String(data.get("business") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    const text = [
      "Hi Apna Digital Sathi,",
      name && `My name is ${name}.`,
      business && `I run ${business}.`,
      phone && `My phone number is ${phone}.`,
      message && `I need help with: ${message}`,
      "I'm interested in your digital marketing services.",
    ]
      .filter(Boolean)
      .join(" ");

    window.open(
      `https://wa.me/918114080695?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  }

  const field =
    "w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-navy placeholder:text-muted-foreground/70 transition-colors focus:border-primary";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Tell us about your shop"
      subtitle="Send a message or ping us on WhatsApp — we usually reply the same day."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="space-y-4">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl bg-gradient-brand px-6 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
          >
            <MessageCircle size={18} aria-hidden /> Chat with us on WhatsApp
          </a>

          <ul className="card-surface divide-y divide-border">
            <li>
              <a href={`tel:+91${CONTACT.phone}`} className="flex items-center gap-3 px-6 py-4 text-sm text-navy hover:text-primary">
                <Phone size={17} className="text-primary" aria-hidden /> {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 px-6 py-4 text-sm break-all text-navy hover:text-primary">
                <Mail size={17} className="shrink-0 text-primary" aria-hidden /> {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-3 px-6 py-4 text-sm text-muted-foreground">
              <MapPin size={17} className="text-primary" aria-hidden /> {CONTACT.location}
            </li>
          </ul>

          <div className="flex gap-3">
            {[
              { href: CONTACT.instagram, Icon: Instagram, label: "Instagram" },
              { href: CONTACT.linkedin, Icon: Linkedin, label: "LinkedIn" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-navy transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Icon size={18} aria-hidden />
              </a>
            ))}
            <a
              href={CONTACT.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-navy transition-colors hover:border-primary/50 hover:text-primary"
            >
              <XIcon />
            </a>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <form onSubmit={handleSubmit} className="card-surface grid gap-4 p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">Your name</label>
                <input id="name" name="name" required autoComplete="name" className={field} placeholder="Ravi Sharma" />
              </div>
              <div>
                <label htmlFor="business" className="mb-1.5 block text-sm font-medium text-navy">Business name</label>
                <input id="business" name="business" required className={field} placeholder="Brew Lane Café" />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">Phone</label>
              <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} placeholder="98XXXXXXXX" />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">What do you need help with?</label>
              <textarea id="message" name="message" rows={4} className={field} placeholder="We want more customers from Instagram and Google." />
            </div>
            <button
              type="submit"
              className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              Send message
            </button>
            <p aria-live="polite" className="min-h-5 text-sm text-primary">
              {sent ? "Thanks! We have your details and will get back to you shortly." : ""}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2H21.5l-7.09 8.104L22.5 22h-6.59l-5.16-6.74L4.84 22H1.58l7.58-8.664L1.5 2h6.75l4.66 6.16L18.244 2Zm-1.16 18h1.8L7.02 3.9H5.09L17.084 20Z" />
    </svg>
  );
}
