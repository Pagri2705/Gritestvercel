import type { CSSProperties } from "react";
import { useReveals } from "./NeuShared";

export function NeuPraxisBento() {
  const ref = useReveals<HTMLElement>();

  return (
    <section ref={ref} className="neu sec bento-orig" id="praxis">
      <div className="container">
        <div className="sec-head rv">
          <p className="eyebrow-orig">Die Praxis</p>
          <h2>So wird KI im Unternehmen <em>täglich</em> genutzt.</h2>
          <p>Keine theoretischen Konzepte — reale Anwendungen, die Zeit sparen.</p>
        </div>
        <div className="bento">
          <div className="bcard bcard--navy b-7 rv">
            <h3>Verwaltung &amp; Organisation</h3>
            <ul>
              <li>Word-Dokumente strukturieren</li>
              <li>Excel-Inhalte schneller auswerten</li>
              <li>Meetings zusammenfassen — Teams, Zoom</li>
              <li>Informationen schneller aufbereiten</li>
            </ul>
            <div className="bcard__foot">Der Klassiker: hier spart fast jedes Team zuerst.</div>
          </div>
          <div className="bcard b-5 rv" style={{ "--d": ".08s" } as CSSProperties}>
            <h3>Vertrieb &amp; Angebote</h3>
            <ul>
              <li>Kundenantworten formulieren — Outlook, Gmail</li>
              <li>Follow-ups schreiben</li>
              <li>Angebote vorbereiten</li>
            </ul>
            <div className="bcard__foot">Angebote in Minuten statt einer halben Stunde.</div>
          </div>
          <div className="bcard b-4 rv">
            <h3>Recruiting</h3>
            <ul>
              <li>Social Recruiting — LinkedIn, Instagram, TikTok</li>
              <li>Stellenanzeigen schneller erstellen</li>
              <li>Bewerberkommunikation vereinfachen</li>
            </ul>
          </div>
          <div className="bcard b-4 rv" style={{ "--d": ".08s" } as CSSProperties}>
            <h3>Recherche &amp; Wissen</h3>
            <ul>
              <li>Meetings automatisch zusammenfassen</li>
              <li>PDFs und Dokumente einfacher verstehen</li>
              <li>Recherche deutlich beschleunigen</li>
            </ul>
          </div>
          <div className="bcard b-4 rv" style={{ "--d": ".16s" } as CSSProperties}>
            <h3>Einarbeitung</h3>
            <ul>
              <li>Neue Mitarbeiter schneller einarbeiten</li>
              <li>Wiederkehrende Fragen dokumentieren</li>
              <li>Wissen langfristig sichern</li>
            </ul>
          </div>
          <div className="bcard rv" style={{ gridColumn: "1 / -1" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <h3>Marketing &amp; Sichtbarkeit</h3>
                <p style={{ margin: "8px 0 0", color: "var(--ink-60)", fontSize: ".92rem", maxWidth: "52ch" }}>
                  Social-Media-Inhalte, Newsletter, Kampagnenideen und Anzeigentexte — KI-gestützt, aber in Ihrer Sprache.
                </p>
              </div>
              <a className="link-quiet" href="#kontakt">Use Case für Ihr Team finden →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
