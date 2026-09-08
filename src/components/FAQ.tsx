import { useState } from "react";
import { Plus } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "How much does it cost for a small shop?",
    a: "We quote per shop rather than selling one fixed plan. A single-outlet café or salon usually starts with a light monthly package covering posting and profile management, and adds shoots or ads only when it makes sense. You approve the amount before anything begins, and ad spend is always separate and visible to you.",
  },
  {
    q: "How soon will I see results?",
    a: "Profile and Google listing improvements often bring 'near me' calls within two to three weeks. Content-led growth — regular customers, saved posts, reels reach — usually shows a clear difference by the second or third month. We would rather tell you this honestly than promise overnight numbers.",
  },
  {
    q: "I do not understand technology. Is that a problem?",
    a: "Not at all — most of our clients do not. You send us photos or a voice note on WhatsApp, we do the rest. Approvals happen over WhatsApp too, and monthly reports are written in plain language with no dashboards to log into.",
  },
  {
    q: "Which platforms do you handle?",
    a: "Instagram and Facebook for content and ads, Google Business Profile for local search and reviews, WhatsApp Business for enquiries, and YouTube Shorts where the content suits it. If your customers are on a platform we have not listed, tell us and we will look at it.",
  },
  {
    q: "Am I locked into a long contract?",
    a: "No. We work month to month after an initial one-month setup period, and you can stop with two weeks' notice. Everything we create — pages, logins, designs, raw footage — stays yours.",
  },
  {
    q: "Do you come to the shop for photos and videos?",
    a: "Yes, for clients in and around Kanpur we shoot on location so the content shows your actual space, staff and products. For outstation clients we run a guided phone shoot and handle the editing at our end.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      tone="muted"
      eyebrow="FAQ"
      title="Questions shop owners ask us first"
      subtitle="Still unsure about something? A WhatsApp message gets a straight answer, not a sales pitch."
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={i * 40}>
              <div className="card-surface overflow-hidden">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-base font-semibold text-navy"
                  >
                    {f.q}
                    <Plus
                      size={18}
                      aria-hidden
                      className={`shrink-0 text-primary transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                </h3>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
