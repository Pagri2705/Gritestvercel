export function About() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary to-brand-soft shadow-card">
            <div className="absolute inset-0 grid place-items-center text-sm text-ink-muted">
              Image Placeholder
            </div>
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-brand">Section Label</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              About Headline Placeholder
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              About Text Placeholder. Ein einleitender Absatz, der Person oder Unternehmen vorstellt.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Weiterer Paragraph Placeholder mit zusätzlichem Hintergrund.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <div className="text-2xl font-semibold tracking-tight text-ink">00+</div>
                <div className="mt-1 text-xs text-ink-muted">Stat Label</div>
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight text-ink">00+</div>
                <div className="mt-1 text-xs text-ink-muted">Stat Label</div>
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight text-ink">00+</div>
                <div className="mt-1 text-xs text-ink-muted">Stat Label</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
