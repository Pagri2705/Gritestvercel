import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-ink px-8 py-20 text-center text-primary-foreground shadow-elevated md:px-16 md:py-28">
        <div className="absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand/30 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <div className="text-xs font-medium uppercase tracking-widest text-brand-soft/90">Section Label</div>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Final CTA Headline Placeholder
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/70">
            Final CTA Subheadline Placeholder, eine ruhige Abschlussformulierung.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button className="inline-flex h-12 items-center gap-2 rounded-lg bg-background px-6 text-sm font-medium text-ink hover:bg-background/90">
              Primary CTA <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex h-12 items-center rounded-lg border border-primary-foreground/20 px-6 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10">
              Secondary CTA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
