import { TrendingUp, Gauge, Target, Sparkles, Heart, ShieldCheck } from "lucide-react";

const items = [
  { icon: TrendingUp, title: "Outcome Title", text: "Outcome text placeholder." },
  { icon: Gauge, title: "Outcome Title", text: "Outcome text placeholder." },
  { icon: Target, title: "Outcome Title", text: "Outcome text placeholder." },
  { icon: Sparkles, title: "Outcome Title", text: "Outcome text placeholder." },
  { icon: Heart, title: "Outcome Title", text: "Outcome text placeholder." },
  { icon: ShieldCheck, title: "Outcome Title", text: "Outcome text placeholder." },
];

export function Outcomes() {
  return (
    <section id="outcomes" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-xs font-medium uppercase tracking-widest text-brand">Section Label</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Outcome Headline Placeholder
          </h2>
          <div className="mt-8 rounded-3xl border border-border bg-ink p-8 text-primary-foreground shadow-elevated">
            <div className="text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              Highlight Statement Placeholder über das Ergebnis und den Mehrwert.
            </div>
            <div className="mt-6 text-sm text-primary-foreground/70">Caption Placeholder</div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl border border-border bg-background p-6 shadow-soft hover:shadow-card transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <it.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-base font-semibold text-ink">{it.title}</div>
              <div className="mt-1 text-sm text-ink-muted">{it.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
