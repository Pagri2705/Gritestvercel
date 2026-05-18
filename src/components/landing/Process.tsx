import { Compass, Layers, Rocket, Check } from "lucide-react";

const steps = [
  { n: "01", icon: Compass, title: "Step Title Placeholder", text: "Short step description placeholder.", bullets: ["Bullet Placeholder", "Bullet Placeholder", "Bullet Placeholder"] },
  { n: "02", icon: Layers, title: "Step Title Placeholder", text: "Short step description placeholder.", bullets: ["Bullet Placeholder", "Bullet Placeholder", "Bullet Placeholder"] },
  { n: "03", icon: Rocket, title: "Step Title Placeholder", text: "Short step description placeholder.", bullets: ["Bullet Placeholder", "Bullet Placeholder", "Bullet Placeholder"] },
];

export function Process() {
  return (
    <section id="process" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="text-xs font-medium uppercase tracking-widest text-brand">Section Label</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Process Headline Placeholder
          </h2>
          <p className="mt-4 text-lg text-ink-muted">Subheadline Placeholder über den Ablauf.</p>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="group flex flex-col rounded-3xl border border-border bg-background p-8 shadow-card transition-shadow hover:shadow-elevated">
              <div className="flex items-start justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="text-5xl font-semibold tracking-tight text-ink/10">{s.n}</div>
              </div>
              <div className="mt-8 text-xl font-semibold text-ink">{s.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.text}</p>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-ink">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
