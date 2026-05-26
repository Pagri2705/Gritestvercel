export function About() {
  return (
    <section className="bg-[rgba(191,219,254,0.2)] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
            Warum wir uns mit KI im Unternehmen beschäftigen
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="overflow-hidden rounded-2xl border border-border shadow-card aspect-[4/3] w-full">
            <img
              src="/hero.png"
              alt="Unser Team bei der Arbeit"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="space-y-5">
            <p className="text-base leading-relaxed text-ink-muted md:text-lg">
              Unsere Familie führt seit 2006 selbst einen Pflegedienst.
            </p>
            <p className="text-base leading-relaxed text-ink-muted">
              Später kam zusätzlich unsere Personalvermittlung dazu â€” wodurch wir täglich mit Kommunikation, Bewerbergewinnung, Verwaltung, Dokumentation und wiederkehrenden Abläufen gearbeitet haben.
            </p>
            <p className="text-base leading-relaxed text-ink-muted">
              Genau dort sind wir zum ersten Mal intensiv mit modernen KI Tools in Berührung gekommen.
            </p>
            <p className="text-base leading-relaxed text-ink-muted">
              Mit der Zeit wurde uns klar, wie viel Potenzial moderne KI Tools tatsächlich im Unternehmensalltag haben â€” wenn sie sinnvoll eingesetzt werden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
