import type { CSSProperties } from "react";
import { ArrowOrb, useReveals } from "./NeuShared";

export function NeuFinalCta() {
  const ref = useReveals<HTMLElement>();

  return (
    <section ref={ref} className="neu sec final final-orig">
      <div className="container">
        <h2 className="rv">
          KI verständlich.<br /><em>Praxisnah. Anwendbar.</em>
        </h2>
        <p className="rv" style={{ "--d": ".1s" } as CSSProperties}>
          Moderne KI muss nicht kompliziert sein. Wir zeigen Ihrem Team, wie sie im Arbeitsalltag sinnvoll genutzt wird.
        </p>
        <div className="rv" style={{ "--d": ".2s" } as CSSProperties}>
          <a className="btn btn--cream" href="#kontakt">
            Kostenloses Erstgespräch buchen
            <ArrowOrb />
          </a>
        </div>
      </div>
    </section>
  );
}
