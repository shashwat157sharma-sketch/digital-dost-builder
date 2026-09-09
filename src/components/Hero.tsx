import { ArrowRight, MessageCircle, TrendingUp } from "lucide-react";
import { CONTACT, LOGO_URL } from "./brand";
import { Reveal } from "./Reveal";

/** Hero: brand gradient wash + faint circuit motif echoing the logo. */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-28">
      {/* Abstract brand background — no photography */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-24 h-[26rem] w-[26rem] rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute -right-24 top-24 h-[22rem] w-[22rem] rounded-full bg-navy/10 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.05]" aria-hidden>
          <defs>
            <pattern id="circuit" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M0 36h28M44 36h28M36 0v28M36 44v28" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="36" cy="36" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" className="text-navy" />
        </svg>
      </div>

      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center">
            <img
              src={LOGO_URL}
              alt="Apna Digital Sathi logo"
              className="h-24 w-auto sm:h-28"
              width={180}
              height={112}
            />
            <p className="mt-4 font-display text-2xl font-bold text-navy sm:text-3xl">Apna Digital Sathi</p>
            <p className="mt-2 text-sm font-semibold text-primary sm:text-base">&nbsp;&nbsp;</p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="mt-10 text-balance font-display text-4xl font-bold leading-[1.1] text-navy sm:text-5xl lg:text-6xl">
            Your shop already has customers. <span className="text-gradient-brand">Let the internet meet them.</span>
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            We handle social media, branding, ads and Google visibility for cafes, salons, clinics, gyms
            and local stores — so you can stay busy running the counter, not the content calendar.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_16px_34px_-18px_rgba(124,58,237,0.95)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Get Started <ArrowRight size={16} />
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 bg-card px-7 py-3.5 text-sm font-semibold text-navy transition-colors duration-200 hover:border-primary/50 hover:text-primary"
            >
              <MessageCircle size={16} /> Contact Us
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-muted-foreground transition-colors duration-200 hover:border-primary/40 hover:text-primary"
            >
              <TrendingUp size={16} /> Grow Your Business
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
