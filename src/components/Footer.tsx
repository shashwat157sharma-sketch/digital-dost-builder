import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, LOGO_URL, NAV_LINKS } from "./brand";

const SERVICES = [
  "Social Media Management",
  "Branding & Identity",
  "Website & Landing Pages",
  "Paid Ads & Promotions",
  "Local SEO",
];

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Apna Digital Sathi logo" className="h-10 w-auto" loading="lazy" />
          </div>
          <p className="mt-4 font-display text-lg font-semibold">Apna Digital Sathi</p>
          <p className="mt-1 text-sm text-primary-foreground/70">Har Dukan Ka Digital Dost</p>
          <div className="mt-5 flex gap-3">
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-white/15 p-2.5 transition-colors hover:border-white/50">
              <Instagram size={16} aria-hidden />
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/15 p-2.5 transition-colors hover:border-white/50">
              <Linkedin size={16} aria-hidden />
            </a>
            <a href={CONTACT.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="rounded-full border border-white/15 p-2.5 transition-colors hover:border-white/50">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.244 2H21.5l-7.09 8.104L22.5 22h-6.59l-5.16-6.74L4.84 22H1.58l7.58-8.664L1.5 2h6.75l4.66 6.16L18.244 2Zm-1.16 18h1.8L7.02 3.9H5.09L17.084 20Z" />
              </svg>
            </a>
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Quick links</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
            {SERVICES.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2"><Phone size={15} aria-hidden /> <a href={`tel:+91${CONTACT.phone}`} className="hover:text-primary-foreground">{CONTACT.phoneDisplay}</a></li>
            <li className="flex items-start gap-2"><Mail size={15} className="mt-0.5 shrink-0" aria-hidden /> <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-primary-foreground">{CONTACT.email}</a></li>
            <li className="flex items-center gap-2"><MapPin size={15} aria-hidden /> {CONTACT.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Apna Digital Sathi. All rights reserved.</p>
          <p>Designed by Apna Digital Sathi</p>
        </div>
      </div>
    </footer>
  );
}
