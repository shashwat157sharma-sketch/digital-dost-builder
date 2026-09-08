import { Section } from "./Section";
import { Reveal } from "./Reveal";
import cafeImage from "@/assets/case-cafe.jpg";
import salonImage from "@/assets/case-salon.jpg";
import gymImage from "@/assets/case-gym.jpg";
import clinicImage from "@/assets/case-clinic.jpg";
import boutiqueImage from "@/assets/case-boutique.jpg";
import coachingImage from "@/assets/case-coaching.jpg";

/* ===========================================================
   PLACEHOLDER PORTFOLIO GRID
   Replace each tile with a real case study (image + result).
   =========================================================== */
const TILES = [
  { title: "Café brand refresh", image: cafeImage, alt: "Branded cup inside a modern local café" },
  { title: "Salon reels series", image: salonImage, alt: "Phone filming content inside a modern salon" },
  { title: "Gym membership ads", image: gymImage, alt: "Digital campaign concept inside a neighborhood gym" },
  { title: "Clinic Google profile", image: clinicImage, alt: "Mobile local search concept inside a clinic" },
  { title: "Boutique launch campaign", image: boutiqueImage, alt: "Colorful fashion collection inside a local boutique" },
  { title: "Coaching institute page", image: coachingImage, alt: "Digital learning setup inside a coaching classroom" },
];

export function Portfolio() {
  return (
    <Section
      id="work"
      tone="muted"
      eyebrow="Our work"
      title="Case studies are on the way"
      subtitle="We are documenting before-and-after results from current projects. This space will fill up with real numbers soon."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TILES.map((tile, i) => (
          <Reveal as="li" key={tile.title} delay={i * 50}>
            <div className="card-surface group relative aspect-4/3 overflow-hidden">
              <img
                src={tile.image}
                alt={tile.alt}
                loading="lazy"
                width={768}
                height={576}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/75 to-transparent px-6 pb-5 pt-16">
                <span className="inline-flex rounded-full border border-primary-foreground/30 bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
                  Coming soon
                </span>
                <p className="mt-3 font-display text-lg font-semibold text-primary-foreground">{tile.title}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
