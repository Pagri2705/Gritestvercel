import { Check } from "lucide-react";

const examples = [
  "Angebotsvorlagen",
  "E-Mail Antworten",
  "Meeting Zusammenfassungen",
  "Recherche Vorlagen",
  "Interne Wissenssammlungen",
  "Content Vorlagen",
  "Dokumentationen",
];

const steps = [
  {
    n: "01",
    title: "Analyse & Vorbereitung",
    text: "Gemeinsam schauen wir, welche Aufgaben im Unternehmen unnötig Zeit kosten, welche Prozesse sich vereinfachen lassen, welche KI Tools sinnvoll eingesetzt werden können und welche Teams den größten Nutzen haben.",
    bullets: [],
  },
  {
    n: "02",
    title: "Praxisnaher Live Workshop",
    text: "Die Teilnehmer arbeiten direkt mit ChatGPT, modernen KI Tools, echten Unternehmenssituationen und realen Aufgaben.",
    bullets: [],
  },
  {
    n: "03",
    title: "Eigene Anwendungen direkt entwickeln",
    text: "Teams entwickeln bereits im Workshop erste eigene Anwendungen für das Unternehmen.",
    bullets: examples,
  },
];

const workshopPoints = [
  "Echte Aufgaben aus Ihrem Unternehmen",
  "Verständliche Einführung in moderne KI Tools",
  "Praxisnahe Live Beispiele",
  "Wiederverwendbare Prozesse & Vorlagen",
  "Klarer Einstieg ohne technische Hürden",
  "Direkte Umsetzung im Alltag",
];

export function Process() {
  return (
    <section id="process" className="bg-[rgba(191,219,254,0.2)] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
          So sieht ein moderner KI Workshop wirklich aus
        </h2>
        <div className="mt-6 space-y-1 text-base leading-relaxed text-ink-muted md:text-lg">
          <p>Keine theoretischen Präsentationen.</p>
          <p>Keine komplizierten Fachbegriffe.</p>
          <p>Keine futuristischen AI Buzzwords.</p>
          <p className="mt-4">Sondern: konkrete Anwendungen direkt aus dem Arbeitsalltag Ihres Teams.</p>
        </div>
        <ul className="mt-8 space-y-2">
          {workshopPoints.map((point) => (
            <li key={point} className="flex items-center gap-2 text-base text-ink-muted md:text-lg">
              <Check className="h-4 w-4 shrink-0 text-brand" />
              {point}
            </li>
          ))}
        </ul>

        <h2 className="mt-16 text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
          So läuft der Workshop ab
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="flex flex-col rounded-2xl border border-border bg-surface-elevated p-8 shadow-card">
              <div className="text-6xl font-extrabold tracking-tight text-brand/15">{s.n}</div>
              <div className="mt-5 text-xl font-bold text-ink">{s.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.text}</p>
              {s.bullets.length > 0 && (
                <ul className="mt-6 space-y-2 border-t border-border pt-6">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-ink">
                      <Check className="h-4 w-4 shrink-0 text-brand" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-surface-elevated p-8 shadow-card">
          <p className="text-lg font-bold text-ink">
            Kein theoretisches Wissen. Sondern echte Anwendung â€” die bleibt.
          </p>
        </div>
      </div>
    </section>
  );
}
