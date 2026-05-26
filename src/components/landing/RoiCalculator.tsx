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
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14">
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
            Wie viel Zeit kosten wiederkehrende Aufgaben im Unternehmen?
          </h2>
        </div>

        <div className="grid gap-8 rounded-2xl border border-border bg-surface-elevated p-8 shadow-card md:p-12 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-7">
            <Field label="Anzahl Mitarbeiter" value={employees} min={1} max={500} step={1} onChange={setEmployees} suffix="" />
            <Field label="Durchschnittlicher Stundenlohn" value={wage} min={10} max={300} step={5} onChange={setWage} suffix=" â‚¬" />
            <Field label="Zeitersparnis pro Woche (Std. / Mitarbeiter)" value={hoursSaved} min={0} max={40} step={1} onChange={setHoursSaved} suffix=" h" />
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-brand p-8 text-white md:p-10">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/60">Ergebnis</div>
            <div className="mt-8 space-y-6">
              <Result label="Ersparnis pro Woche" value={fmt(week)} />
              <div className="h-px bg-white/10" />
              <Result label="Ersparnis pro Monat" value={fmt(month)} />
              <div className="h-px bg-white/10" />
              <Result label="Ersparnis pro Jahr" value={fmt(year)} highlight />
            </div>
            <p className="mt-8 text-xs text-white/50">
              Orientierungsrechnung. Individuelle Ergebnisse variieren je nach Unternehmen und Einsatzbereich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, min, max, step, onChange, suffix }: {
  label: string; value: number; min: number; max: number; step: number; onChange: (n: number) => void; suffix: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-ink">{label}</label>
        <div className="text-sm font-bold text-ink tabular-nums">{value}{suffix}</div>
      </div>
      <div className="mt-3 flex items-center gap-4">
        <input
          type="range"
          min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-[var(--brand)]"
        />
        <input
          type="number"
          value={value} min={min} max={max}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          className="h-10 w-24 rounded-lg border border-border bg-surface px-3 text-sm text-ink tabular-nums focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>
    </div>
  );
}

function Result({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <div className="text-sm text-white/70">{label}</div>
      <div className={`tabular-nums font-bold tracking-tight ${highlight ? "text-4xl text-white" : "text-2xl text-white/90"}`}>
        {value}
      </div>
    </div>
  );
}
