import type { CSSProperties } from "react";
import { ArrowOrb, useReveals } from "./NeuShared";

export function NeuPreise() {
  const ref = useReveals<HTMLElement>();

  return (
    <section ref={ref} className="neu sec" id="angebote">
      <div className="container">
        <div className="sec-head sec-head--center rv">
          <span className="chapter">Kapitel 07 — <b>Die Angebote</b></span>
          <h2>Drei Wege. <em>Ein</em> Ziel: KI, die genutzt wird.</h2>
        </div>
        <div className="tiers">

          <div className="tier shell rv">
            <div className="shell__core">
              <span className="tier__name">Einführung &amp; Umsetzung</span>
              <div className="tier__price">3.199&nbsp;€ <small>einmalig</small></div>
              <p className="tier__desc">Der komplette Workshop für Ihr Team — von der Analyse bis zur ersten eigenen Anwendung.</p>
              <ul>
                <li>Individuelle Unternehmensanalyse</li>
                <li>Praxisnaher Live-Workshop</li>
                <li>Reale Anwendungen direkt im Workshop</li>
                <li>Nachbetreuung &amp; Fragen-Session</li>
              </ul>
              <a className="btn" href="#kontakt">
                Erstgespräch buchen
                <ArrowOrb />
              </a>
            </div>
          </div>

          <div className="tier tier--hero shell rv" style={{ "--d": ".1s" } as CSSProperties}>
            <div className="shell__core">
              <span className="tier__badge">Am häufigsten gewählt</span>
              <span className="tier__name">Laufende Begleitung</span>
              <div className="tier__price">499&nbsp;€ <small>/ Monat</small></div>
              <p className="tier__desc">Kontinuierliche Begleitung für Teams, die KI dauerhaft sinnvoll in den Alltag integrieren wollen.</p>
              <ul>
                <li>Monatliche Live-Sessions</li>
                <li>Neue Tools &amp; Updates erklärt</li>
                <li>Direkter Draht für Fragen</li>
                <li>Individuelle Use Cases entwickeln</li>
                <li>Interne Wissensdokumentation</li>
              </ul>
              <a className="btn btn--blue" href="#kontakt">
                Erstgespräch buchen
                <ArrowOrb />
              </a>
            </div>
          </div>

          <div className="tier shell rv" style={{ "--d": ".2s" } as CSSProperties}>
            <div className="shell__core">
              <span className="tier__name">Content &amp; Sichtbarkeit</span>
              <div className="tier__price">699&nbsp;€ <small>/ Monat</small></div>
              <p className="tier__desc">Für Unternehmen, die mit KI-gestütztem Content ihre Sichtbarkeit aufbauen möchten.</p>
              <ul>
                <li>LinkedIn &amp; Social-Media-Content</li>
                <li>Newsletter &amp; Texte</li>
                <li>Kampagnenideen &amp; Vorlagen</li>
                <li>Monatliche Content-Strategie</li>
              </ul>
              <a className="btn" href="#kontakt">
                Erstgespräch buchen
                <ArrowOrb />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
