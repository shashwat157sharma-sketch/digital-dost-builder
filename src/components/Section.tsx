import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Shared section shell: consistent vertical rhythm + one headline per section. */
export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  tone = "default",
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
  tone?: "default" | "muted";
}) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-28 ${tone === "muted" ? "bg-secondary/60" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
          {subtitle ? (
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">{subtitle}</p>
          ) : null}
        </Reveal>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
