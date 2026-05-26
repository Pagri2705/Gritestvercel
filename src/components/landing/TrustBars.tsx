import { Zap, Building2, GraduationCap, Users } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    label: "Lernen & Umsetzung",
    body: "Teams lernen KI deutlich schneller, wenn sie direkt mit echten Aufgaben statt theoretischen Beispielen arbeiten.",
  },
  {
    icon: Zap,
    label: "Integration",
    body: "KI wird in vielen Unternehmen bereits getestet â€” aber selten sinnvoll in tägliche Abläufe integriert. Genau diese Lücke schließen praxisnahe Workshops.",
  },
  {
    icon: Building2,
    label: "Mittelstand",
    body: "Kleine und mittelständische Unternehmen setzen neue KI-Prozesse oft schneller um als große Konzerne.",
  },
  {
    icon: Users,
    label: "Aktivierung",
    body: "Moderne KI-Tools bringen erst dann echten Mehrwert, wenn Mitarbeiter sie aktiv im Unternehmen nutzen.",
  },
];

export function TrustBars() {
  return (
    <section className="bg-[rgba(191,219,254,0.2)] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
            Warum KI in vielen Unternehmen nicht ankommt
          </h2>
          <p className="mt-3 text-[0.9375rem] text-ink-muted">
            Erkenntnisse aus Gesprächen, Recherchen und der täglichen Arbeit mit KI-Tools.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, label, body }) => (
            <div
              key={label}
              className="flex flex-col justify-between rounded-2xl border border-border bg-surface-elevated p-7 shadow-card lg:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="text-[0.65rem] font-semibold uppercase tracking-widest text-brand">
                  {label}
                </div>
                <Icon className="h-4 w-4 shrink-0 text-ink-muted/50" />
              </div>
              <p className="mt-6 text-[0.9375rem] font-medium leading-[1.65] text-ink">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
