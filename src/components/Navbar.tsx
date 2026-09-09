import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LOGO_URL, NAV_LINKS } from "./brand";

/** Fixed navbar: shadow only appears after scroll; slide-in menu on mobile. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 shadow-[0_6px_24px_-20px_rgba(20,20,45,0.6)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 py-3 lg:px-8"
      >
        <div aria-hidden />
        <a href="#home" className="flex items-center justify-center" aria-label="Apna Digital Sathi home">
          <span className="font-display text-xl font-bold text-navy sm:text-2xl">Apna Digital Sathi</span>
        </a>

        <div className="hidden items-center justify-end gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_-14px_rgba(124,58,237,0.9)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="justify-self-end rounded-md border border-border bg-card p-2 text-navy lg:hidden"
        >
          <Menu size={20} />
        </button>
      </nav>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-navy/40 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-xs flex-col bg-card p-6 shadow-xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="font-display text-lg font-bold text-navy">Apna Digital Sathi</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="rounded-md border border-border p-2 text-navy"
            >
              <X size={18} />
            </button>
          </div>
          <div className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 py-3 font-medium text-navy transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-full bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
