import { useMemo, useState } from "react";

const WAGE = 30;
const MINUTES_PER_DAY = 40;
const HOURS_PER_WEEK = (MINUTES_PER_DAY * 5) / 60;

function fmt(n: number) {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

export function RoiCalculator() {
  const [employees, setEmployees] = useState(10);

  const day = useMemo(() => employees * WAGE * (MINUTES_PER_DAY / 60), [employees]);
  const year = useMemo(() => employees * WAGE * HOURS_PER_WEEK * 52, [employees]);

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-[1.9rem] md:text-[2.8rem] font-semibold leading-[1.1] tracking-[-0.02em] text-ink mb-4">
            Was kostet verschwendete Zeit wirklich?
          </h2>
          <p className="text-base text-ink-muted">
            Bewegen Sie den Slider — der Rest ist bereits einkalkuliert.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface-elevated shadow-card overflow-hidden">

          {/* Ergebnis */}
          <div className="bg-brand px-8 md:px-10 py-8 text-white">
            <div className="grid grid-cols-2 divide-x divide-white/20 text-center">
              <div className="pr-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">Pro Tag</p>
                <p className="text-3xl font-bold tracking-tight tabular-nums">{fmt(day)}</p>
              </div>
              <div className="pl-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">Pro Jahr</p>
                <p className="text-3xl font-bold tracking-tight tabular-nums">{fmt(year)}</p>
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="p-8 md:p-10">
            <div className="flex items-baseline justify-between mb-5">
              <span className="text-base font-semibold text-ink">Anzahl Mitarbeiter</span>
              <span className="text-3xl font-bold text-ink tabular-nums">{employees}</span>
            </div>
            <input
              type="range"
              min={1} max={200} step={1} value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-border accent-[var(--brand)]"
            />
            <div className="flex justify-between mt-2 text-xs text-ink-muted">
              <span>1</span>
              <span>200</span>
            </div>
          </div>

          {/* Rechenweg */}
          <div className="border-t border-border px-8 md:px-10 py-5 bg-surface grid grid-cols-3 divide-x divide-border text-center">
            <div className="px-4">
              <div className="text-xl font-bold text-ink tabular-nums">{employees}</div>
              <div className="text-xs text-ink-muted mt-1">Mitarbeiter</div>
            </div>
            <div className="px-4">
              <div className="text-xl font-bold text-ink">40 Min.</div>
              <div className="text-xs text-ink-muted mt-1">Ersparnis pro Tag</div>
            </div>
            <div className="px-4">
              <div className="text-xl font-bold text-ink">30 €</div>
              <div className="text-xs text-ink-muted mt-1">Stundensatz inkl. NK</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
