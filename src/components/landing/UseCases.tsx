import { FileText, TrendingUp, Users, MessageSquare, BookOpen, Megaphone } from "lucide-react";

const cases = [
  {
    icon: FileText,
    title: "Verwaltung & Organisation",
    bullets: ["Word Dokumente strukturieren", "Excel Inhalte schneller auswerten", "Meetings zusammenfassen", "Informationen schneller aufbereiten"],
  },
  {
    icon: TrendingUp,
    title: "Vertrieb & Angebote",
    bullets: ["Angebote vorbereiten", "Kundenantworten formulieren", "Follow-Ups schreiben", "Wiederkehrende Kommunikation vereinfachen"],
  },
  {
    icon: Users,
    title: "Recruiting & Bewerbergewinnung",
    bullets: ["Stellenanzeigen schneller erstellen", "Facebook & LinkedIn Inhalte vorbereiten", "Bewerberkommunikation vereinfachen", "Sichtbarkeit für offene Stellen aufbauen"],
  },
  {
    icon: MessageSquare,
    title: "Meetings, Recherche & Wissenssuche",
    bullets: ["Meetings automatisch zusammenfassen", "Informationen schneller finden", "PDFs und Dokumente einfacher verstehen", "Recherche deutlich beschleunigen"],
  },
  {
    icon: BookOpen,
    title: "Einarbeitung & internes Wissen",
    bullets: ["Neue Mitarbeiter schneller einarbeiten", "Wiederkehrende Fragen dokumentieren", "Prozesse verständlicher festhalten", "Wissen langfristig sichern"],
  },
  {
    icon: Megaphone,
    title: "Marketing & Sichtbarkeit",
    bullets: ["LinkedIn Beiträge erstellen", "Facebook Inhalte vorbereiten", "Newsletter schneller schreiben", "Kampagnenideen entwickeln"],
  },
];

export function UseCases() {
  return (
    <section className="bg-[rgba(191,219,254,0.2)] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:gap-24 lg:items-end">
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
            So wird KI im Unternehmen tatsächlich praktisch genutzt
          </h2>
          <p className="text-base leading-relaxed text-ink-muted md:text-lg">
            Keine theoretischen KI Konzepte. Sondern reale Anwendungen, die Unternehmen täglich Zeit sparen können.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <div key={c.title} className="flex flex-col rounded-2xl border border-border bg-surface-elevated p-7 shadow-card">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-lg font-bold text-ink">{c.title}</div>
              <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
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
