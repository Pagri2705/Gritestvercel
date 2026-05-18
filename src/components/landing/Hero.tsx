import { ArrowRight, Sparkles, BarChart3, MessageSquare, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Eyebrow Placeholder
            </div>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
              Headline Placeholder for a premium B2B value proposition
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted md:text-xl">
              Subheadline Placeholder — eine ruhige, klare Beschreibung des Angebots in ein bis zwei Zeilen.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted">
              Supporting Text Placeholder. Ergänzender Kontext, der den Nutzen weiter erläutert ohne überladen zu wirken.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button className="inline-flex h-12 items-center gap-2 rounded-lg bg-ink px-6 text-sm font-medium text-primary-foreground shadow-card hover:bg-ink/90">
                Primary CTA <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex h-12 items-center rounded-lg border border-border bg-background px-6 text-sm font-medium text-ink hover:bg-secondary">
                Secondary CTA
              </button>
            </div>
          </div>

          {/* Right: Bento Grid */}
          <div className="grid grid-cols-6 grid-rows-6 gap-3 lg:h-[560px]">
            <div className="col-span-4 row-span-3 rounded-2xl border border-border bg-surface-elevated p-6 shadow-card">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <BarChart3 className="h-4 w-4" />
              </div>
              <div className="text-sm font-medium text-ink">Card Title Placeholder</div>
              <div className="mt-1 text-xs text-ink-muted">Short supporting text.</div>
              <div className="mt-5 space-y-2">
                <div className="h-2 w-3/4 rounded bg-secondary" />
                <div className="h-2 w-1/2 rounded bg-secondary" />
                <div className="h-2 w-2/3 rounded bg-secondary" />
              </div>
              <div className="mt-6 flex h-24 items-end gap-2">
                {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-brand/80" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="col-span-2 row-span-3 rounded-2xl border border-border bg-ink p-6 text-primary-foreground shadow-card">
              <Sparkles className="h-5 w-5 text-brand-soft" />
              <div className="mt-4 text-2xl font-semibold tracking-tight">00%</div>
              <div className="mt-1 text-xs text-primary-foreground/70">Metric Placeholder</div>
              <div className="mt-6 h-px w-full bg-primary-foreground/10" />
              <div className="mt-4 text-xs text-primary-foreground/70">Caption Placeholder</div>
            </div>
            <div className="col-span-2 row-span-3 rounded-2xl border border-border bg-surface-elevated p-5 shadow-card">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <MessageSquare className="h-4 w-4" />
              </div>
              <div className="text-sm font-medium text-ink">Card Title</div>
              <div className="mt-2 text-xs text-ink-muted">Placeholder text content for this card.</div>
            </div>
            <div className="col-span-2 row-span-3 rounded-2xl border border-border bg-brand-soft p-5 shadow-card">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-background text-brand">
                <Zap className="h-4 w-4" />
              </div>
              <div className="text-sm font-medium text-ink">Card Title</div>
              <div className="mt-2 text-xs text-ink-muted">Placeholder text content for this card.</div>
            </div>
            <div className="col-span-2 row-span-3 rounded-2xl border border-border bg-surface-elevated p-5 shadow-card">
              <div className="text-xs text-ink-muted">Label Placeholder</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight text-ink">0.0x</div>
              <div className="mt-4 grid grid-cols-4 gap-1">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-1.5 rounded-full bg-secondary" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
