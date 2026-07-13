import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { useReveals } from "./NeuShared";

/* Rechenbasis — konsistent mit Stats und FAQ:
   40 Min./Tag x 30 EUR/h = 20 EUR pro Mitarbeiter und Tag, 260 Arbeitstage/Jahr */
const fmtEur = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const fmtNum = new Intl.NumberFormat("de-DE");

export function NeuRoiRechner() {
  const ref = useReveals<HTMLElement>();
  const [employees, setEmployees] = useState(10);

  const perDay = useMemo(() => employees * 30 * (40 / 60), [employees]);
  const fill = `${((employees - 1) / 199) * 100}%`;

  return (
    <section ref={ref} className="neu sec roi-orig">
      <div className="container">
        <div className="sec-head sec-head--center rv">
          <p className="roi-eyebrow">Die Rechnung</p>
          <h2>Was kostet verschwendete Zeit wirklich?</h2>
          <p>Bewegen Sie den Regler — der Rest ist bereits einkalkuliert.</p>
        </div>
        <div className="roi__wrap shell rv">
          <div className="shell__core">
            <div className="roi__result">
              <div>
                <span className="lbl">Pro Tag</span>
                <output htmlFor="roiRange">{fmtEur.format(perDay)}</output>
              </div>
              <div>
                <span className="lbl">Pro Jahr</span>
                <output htmlFor="roiRange">{fmtEur.format(perDay * 260)}</output>
              </div>
            </div>
            <div className="roi__panel">
              <div className="roi__row">
                <label htmlFor="roiRange">Anzahl Mitarbeiter</label>
                <output htmlFor="roiRange">{fmtNum.format(employees)}</output>
              </div>
              <input
                type="range"
                className="roi__range"
                id="roiRange"
                min={1}
                max={200}
                step={1}
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                aria-describedby="roiBasis"
                style={{ "--fill": fill } as CSSProperties}
              />
              <div className="roi__scale"><span>1</span><span>200</span></div>
            </div>
            <div className="roi__basis" id="roiBasis">
              <div><strong>40&nbsp;Min.</strong><span>Ersparnis pro Tag</span></div>
              <div><strong>30&nbsp;€</strong><span>Stundensatz inkl. NK</span></div>
              <div><strong>260</strong><span>Arbeitstage im Jahr</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
