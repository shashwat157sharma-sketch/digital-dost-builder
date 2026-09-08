# Digital Sathi Studio

# Website Build Prompt — Apna Digital Sathi

Paste everything below into your code-generation tool (Claude Code, v0, Lovable, bolt.new, Cursor, etc.) as a single prompt.

---

## Project

Build a complete, modern, premium, fully responsive marketing website for a digital marketing agency called **"Apna Digital Sathi"** (tagline: **"Har Dukan Ka Digital Dost"** — Every Shop's Digital Friend). The company helps small and local businesses (cafes, restaurants, retail shops, salons, gyms, clinics, coaching institutes) build a strong online presence through social media management, branding, and digital marketing.

## Design direction (read carefully — this is the most important part)

The result must look like a **real, professionally designed startup website** — not a generic AI-generated template, not "vibe-coded," not overloaded with effects. Prioritize:

- **Restraint over flash.** Subtle micro-interactions (gentle hover states, soft fade/slide-in on scroll, smooth scrolling) — never bouncing icons, parallax overload, or constant motion.
- **Strong visual hierarchy**: generous white space, consistent vertical rhythm, a clear reading path per section (max 1 headline + 1 subheadline + supporting content per section).
- **Consistent brand system**: derive the palette from the logo — deep indigo/navy (#1a1a3d–#0d0d26 range) paired with a vivid purple (#7c3aed–#9333ea range), on a clean off-white/white background. Use the purple as the single accent color for CTAs and highlights; don't introduce extra unrelated colors.
- **Typography**: one confident display font for headlines (geometric sans, e.g. Poppins/Sora/Clash Display style) + one clean readable sans for body text (e.g. Inter/Manrope). No more than 2 font families total.
- **Cards/sections**: soft shadows, rounded corners (consistent radius scale), consistent padding — not mismatched box styles.
- **No stock clichés**: no generic "handshake" or "rocket ship" stock photography; use icon-led illustration or abstract gradient shapes consistent with the logo's infinity/handshake motif instead.

## Logo & branding

- I have an existing logo (infinity symbol formed by a purple loop and a navy loop, with a handshake at the center, plus circuit-line accents on both sides — representing "digital + partnership"). Treat this as the fixed brand mark:
  - Use it in the navbar (left-aligned), footer, and favicon.
  - Pull the site's color palette directly from it (purple → navy gradient).
  - Do not alter, distort, or reinterpret the logo — build the site's color/typography system around it.

## Site structure

### 1. Navigation bar
Sticky/fixed on scroll, minimal shadow appears only after scrolling. Logo left, nav links center/right (Home, About, Services, Why Us, How We Work, Testimonials, FAQ, Contact), a prominent "Get Started" button on the far right. Collapses to a clean slide-in/hamburger menu on mobile.

### 2. Hero section
- Powerful headline (write original copy — something around the idea that every small shop deserves a strong digital identity; don't just restate the tagline verbatim as the headline).
- Supporting subheadline explaining what Apna Digital Sathi does in one sentence.
- Three CTA buttons: **Get Started**, **Contact Us**, **Grow Your Business** (style them with clear visual priority — one primary/filled, others secondary/outlined).
- Subtle background treatment using the brand gradient or abstract line/circuit motif echoing the logo — not a busy photo collage.

### 3. About Us
Short brand story: who Apna Digital Sathi is, the mission behind "Har Dukan Ka Digital Dost," and the belief that every local business deserves the same digital presence as big brands. Include a small stats row (placeholder numbers, e.g. "50+ Businesses Helped," "Local-first approach," "100% Personalized Strategy") clearly marked as easy to update later.

### 4. Our Services
Grid of service cards (Social Media Management, Branding & Identity, Website & Landing Pages, Paid Ads & Promotions, Content Creation & Reels, Local SEO & Google Business Profile Optimization). Each card: icon, short title, 1–2 line description. Consistent card design, subtle hover lift.

### 5. Why Choose Us
3–4 differentiators (e.g. local-market understanding, affordable packages for small businesses, dedicated one-on-one support, transparent reporting) presented as a clean icon + text grid — not oversized icons or heavy illustration.

### 6. How We Work
A simple 4-step process (Discover → Strategy → Execute → Grow) shown as a horizontal timeline/stepper on desktop, vertical stack on mobile. Short, confident copy per step.

### 7. Testimonials
Carousel or grid of 3–4 placeholder client quotes with name, business type (e.g. "Owner, XYZ Café," "Salon Owner"), and a subtle star rating. Clearly commented as placeholder content to be swapped with real testimonials later.

### 8. Portfolio / Work (placeholder section)
A "Coming Soon" or placeholder grid (3–6 tiles) for future case studies/before-after results, styled consistently so it can be populated later without redesign.

### 9. Pricing (optional placeholder section)
Simple 3-tier placeholder pricing cards (Starter / Growth / Premium) with "Contact for pricing" CTA, clearly marked as placeholder.

### 10. FAQ
Accordion-style FAQ (5–6 questions) addressing common small-business owner concerns: cost, time to see results, whether they need to understand tech themselves, what platforms are covered, contract flexibility, etc. Write original, specific answers — not generic filler.

### 11. Contact Us
- WhatsApp click-to-chat button (number: **8114080695**)
- Phone: **8114080695**
- Email: **apnadigitalsathi@gmail.com**
- Location: **Gurudev, Kanpur Nagar**
- Simple contact form (Name, Business Name, Phone, Message) — front-end only, ready to wire to a backend/form service later.
- Social icons linking to:
  - Instagram: https://www.instagram.com/apna_digital_sathi_official
  - LinkedIn: https://www.linkedin.com/in/apna-digital-sathi-90a20842a
  - X (Twitter): https://x.com/ADS_0fficial

### 12. Footer
Dark (navy) background matching brand. Columns: logo + short tagline, Quick Links, Services, Contact info, Social icons. Bottom bar with copyright and small "Designed by Apna Digital Sathi" note.

## Technical requirements

- Fully responsive: mobile, tablet, desktop — test breakpoints carefully, no horizontal scroll or cramped text on small screens.
- Smooth scrolling between sections; scroll-triggered fade/slide-in animations that are subtle and fast (150–400ms), not delayed or exaggerated.
- Semantic, accessible HTML (proper heading hierarchy, alt text, focus states, sufficient color contrast).
- Clean, componentized, well-commented code structure so sections (Testimonials, Portfolio, Pricing) can be easily updated later.
- Optimize for fast load: lazy-load non-critical images, minimal external dependencies.
- All copy must be original and written specifically for Apna Digital Sathi — no generic Lorem-ipsum-style or copied marketing text.

## Deliverable

Complete, production-ready frontend code (structure, styling, and any needed interactivity), organized cleanly, with placeholder content clearly marked for sections meant to be updated later (Testimonials, Portfolio, Pricing).

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://digital-dost-builder.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cafb4cb9-df82-410c-9da9-5ba007a5e273).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
