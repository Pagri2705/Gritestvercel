export function Problem() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <div className="text-xs font-medium uppercase tracking-widest text-brand">Section Label</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Problem Headline Placeholder über zwei Zeilen
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Problem Text Placeholder. Eine ausführlichere Beschreibung der Herausforderung, die mehrere Sätze umfasst und Raum lässt für klare Struktur.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Zusätzlicher Paragraph Placeholder für mehr Kontext.
          </p>
        </div>
        <div className="relative rounded-3xl border border-border bg-ink p-10 text-primary-foreground shadow-elevated md:p-12">
          <div className="text-xs font-medium uppercase tracking-widest text-brand-soft/90">Highlight Label</div>
          <div className="mt-6 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Highlight Statement Placeholder, das die Kernaussage in ein bis zwei Sätzen verdichtet.
          </div>
          <div className="mt-10 h-px w-full bg-primary-foreground/10" />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-semibold tracking-tight">00%</div>
              <div className="mt-1 text-xs text-primary-foreground/70">Stat Label Placeholder</div>
            </div>
            <div>
              <div className="text-3xl font-semibold tracking-tight">00x</div>
              <div className="mt-1 text-xs text-primary-foreground/70">Stat Label Placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
