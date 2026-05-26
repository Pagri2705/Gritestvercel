const outcomes = [
  "Moderne KI Tools sicher und verständlich im Unternehmen einsetzen",
  "Datenschutz und verantwortungsvollen KI Einsatz besser einschätzen",
  "Neue Tools und Anwendungen schneller eigenständig verstehen, testen und produktiv im Unternehmen nutzen",
  "Prozesse effizienter strukturieren",
  "Informationen schneller verstehen",
  "Moderne Arbeitsweisen im Unternehmen etablieren",
];

export function Outcomes() {
  return (
    <section id="outcomes" className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:gap-24 lg:items-end">
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
            Was Teams aus dem Workshop mitnehmen
          </h2>
          <p className="text-base leading-relaxed text-ink-muted md:text-lg">
            Ihr Team lernt nicht nur moderne KI Tools zu nutzen â€” sondern entwickelt die Fähigkeit, neue Anwendungen, digitale Werkzeuge und moderne Arbeitsweisen deutlich schneller selbstständig zu verstehen und im Unternehmen einzusetzen.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((text, i) => (
            <div key={i} className="rounded-2xl border border-border bg-surface-elevated p-7 shadow-card">
              <div className="text-3xl font-extrabold text-brand/20 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="mt-4 text-base font-medium leading-snug text-ink">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface-elevated p-8 shadow-card">
          <p className="text-base leading-relaxed text-ink-muted">
            Die Arbeitswelt verändert sich bereits heute. Unternehmen, die moderne KI Tools früh sinnvoll einsetzen lernen, werden sich an neue Arbeitsweisen deutlich schneller anpassen können.
          </p>
        </div>
      </div>
    </section>
  );
}
