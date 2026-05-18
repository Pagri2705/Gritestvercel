import { useMemo, useState } from "react";

function fmt(n: number) {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

export function RoiCalculator() {
  const [employees, setEmployees] = useState(10);
  const [wage, setWage] = useState(50);
  const [hoursSaved, setHoursSaved] = useState(5);

  const { week, month, year } = useMemo(() => {
    const week = employees * wage * hoursSaved;
    return { week, month: week * 4.33, year: week * 52 };
  }, [employees, wage, hoursSaved]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid gap-12 rounded-3xl border border-border bg-surface p-8 shadow-card md:p-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="text-xs font-medium uppercase tracking-widest text-brand">Section Label</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            ROI Headline Placeholder
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            Calculator Intro Placeholder.
          </p>

          <div className="mt-10 space-y-6">
            <Field label="Mitarbeiteranzahl" value={employees} min={1} max={500} step={1} onChange={setEmployees} suffix="" />
            <Field label="Stundenlohn" value={wage} min={10} max={300} step={5} onChange={setWage} suffix="€" />
            <Field label="Zeitersparnis pro Woche (Stunden / Mitarbeiter)" value={hoursSaved} min={0} max={40} step={1} onChange={setHoursSaved} suffix="h" />
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl bg-ink p-8 text-primary-foreground shadow-elevated md:p-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Ergebnis</div>
            <div className="mt-8 space-y-6">
              <Result label="Ersparnis pro Woche" value={fmt(week)} />
              <div className="h-px bg-primary-foreground/10" />
              <Result label="Ersparnis pro Monat" value={fmt(month)} />
              <div className="h-px bg-primary-foreground/10" />
              <Result label="Ersparnis pro Jahr" value={fmt(year)} highlight />
            </div>
          </div>
          <div className="mt-10 text-xs text-primary-foreground/60">
            Disclaimer Placeholder.
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, value, min, max, step, onChange, suffix,
}: { label: string; value: number; min: number; max: number; step: number; onChange: (n: number) => void; suffix: string }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-ink">{label}</label>
        <div className="text-sm font-semibold text-ink tabular-nums">{value}{suffix}</div>
      </div>
      <div className="mt-3 flex items-center gap-4">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-[var(--brand)]"
        />
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          className="h-10 w-24 rounded-md border border-input bg-background px-3 text-sm text-ink tabular-nums focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
    </div>
  );
}

function Result({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <div className="text-sm text-primary-foreground/70">{label}</div>
      <div className={`tabular-nums font-semibold tracking-tight ${highlight ? "text-4xl text-brand-soft" : "text-2xl"}`}>
        {value}
      </div>
    </div>
  );
}
