import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "KI Einführung & Umsetzung",
    price: "3.199 â‚¬",
    period: "einmalig",
    desc: "Der komplette Workshop für Ihr Team â€” von der Analyse bis zur ersten eigenen Anwendung.",
    bullets: ["Individuelle Unternehmensanalyse", "Praxisnaher Live Workshop", "Reale Anwendungen direkt im Workshop", "Nachbetreuung & Fragen-Session"],
    featured: false,
    cta: "Jetzt anfragen",
  },
  {
    name: "Laufende KI Begleitung",
    price: "499 â‚¬",
    period: "/ Monat",
    desc: "Kontinuierliche Begleitung für Teams, die KI dauerhaft sinnvoll in den Alltag integrieren wollen.",
    bullets: ["Monatliche Live-Sessions", "Neue Tools & Updates erklärt", "Direkter Draht für Fragen", "Individuelle Use Cases entwickeln", "Interne Wissensdokumentation"],
    featured: true,
    cta: "Jetzt starten",
  },
  {
    name: "KI Content & Sichtbarkeit",
    price: "699 â‚¬",
    period: "/ Monat",
    desc: "Für Unternehmen, die mit KI-gestütztem Content ihre Sichtbarkeit aufbauen möchten.",
    bullets: ["LinkedIn & Social Media Content", "Newsletter & Texte", "Kampagnenideen & Vorlagen", "Monatliche Content-Strategie"],
    featured: false,
    cta: "Jetzt anfragen",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
            Workshops die sich für Unternehmen auszahlen
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                t.featured
                  ? "border-surface-dark bg-surface-dark text-white shadow-elevated lg:-my-4 lg:py-12"
                  : "border-border bg-surface-elevated shadow-card"
              }`}
            >
              {t.featured && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-brand">
                  Beliebt
                </div>
              )}
              <div className={`text-sm font-semibold ${t.featured ? "text-white/80" : "text-ink-muted"}`}>
                {t.name}
              </div>
              <div className="mt-5 flex items-baseline gap-1">
                <div className={`text-4xl font-extrabold tracking-tight ${t.featured ? "text-white" : "text-ink"}`}>
                  {t.price}
                </div>
                <div className={`text-sm ${t.featured ? "text-white/60" : "text-ink-muted"}`}>{t.period}</div>
              </div>
              <p className={`mt-3 text-sm leading-relaxed ${t.featured ? "text-white/70" : "text-ink-muted"}`}>
                {t.desc}
              </p>
              <ul className={`mt-8 flex-1 space-y-3 border-t pt-8 ${t.featured ? "border-white/20" : "border-border"}`}>
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${t.featured ? "text-white/70" : "text-brand"}`} />
                    <span className={t.featured ? "text-white/90" : "text-ink"}>{b}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-colors ${
                  t.featured
                    ? "bg-white text-brand hover:bg-white/95"
                    : "bg-brand text-white hover:bg-brand/90"
                }`}
              >
                {t.cta} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
