import { Check } from "lucide-react";

const tiers = [
  { name: "Tier Name", price: "0€", desc: "Tier Description Placeholder", bullets: ["Bullet Placeholder", "Bullet Placeholder", "Bullet Placeholder", "Bullet Placeholder"], featured: false },
  { name: "Tier Name", price: "0€", desc: "Tier Description Placeholder", bullets: ["Bullet Placeholder", "Bullet Placeholder", "Bullet Placeholder", "Bullet Placeholder", "Bullet Placeholder"], featured: true },
  { name: "Tier Name", price: "0€", desc: "Tier Description Placeholder", bullets: ["Bullet Placeholder", "Bullet Placeholder", "Bullet Placeholder", "Bullet Placeholder"], featured: false },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-medium uppercase tracking-widest text-brand">Section Label</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Pricing Headline Placeholder
          </h2>
          <p className="mt-4 text-lg text-ink-muted">Subheadline Placeholder.</p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {tiers.map((t, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                t.featured
                  ? "border-ink bg-ink text-primary-foreground shadow-elevated lg:-my-4 lg:py-12"
                  : "border-border bg-background shadow-card"
              }`}
            >
              {t.featured && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand px-3 py-1 text-xs font-medium text-brand-foreground">
                  Badge Placeholder
                </div>
              )}
              <div className={`text-sm font-medium ${t.featured ? "text-primary-foreground/80" : "text-ink"}`}>{t.name}</div>
              <div className="mt-6 flex items-baseline gap-1">
                <div className={`text-5xl font-semibold tracking-tight ${t.featured ? "text-primary-foreground" : "text-ink"}`}>{t.price}</div>
                <div className={`text-sm ${t.featured ? "text-primary-foreground/60" : "text-ink-muted"}`}>/ Placeholder</div>
              </div>
              <p className={`mt-3 text-sm ${t.featured ? "text-primary-foreground/70" : "text-ink-muted"}`}>{t.desc}</p>

              <ul className={`mt-8 space-y-3 border-t pt-8 ${t.featured ? "border-primary-foreground/10" : "border-border"}`}>
                {t.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${t.featured ? "text-brand-soft" : "text-brand"}`} />
                    <span className={t.featured ? "text-primary-foreground/90" : "text-ink"}>{b}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-medium transition-colors ${
                  t.featured
                    ? "bg-background text-ink hover:bg-background/90"
                    : "bg-ink text-primary-foreground hover:bg-ink/90"
                }`}
              >
                CTA Placeholder
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
