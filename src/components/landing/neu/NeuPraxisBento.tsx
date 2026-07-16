import type { CSSProperties } from "react";
import { Check } from "lucide-react";
import { useReveals } from "./NeuShared";

/* Tool-Icons — identisch zur Original-UseCases-Sektion (icons8) */
const I = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} style={{ width: 15, height: 15 }} />
);
const Word = () => <I src="https://img.icons8.com/color/16/microsoft-word-2019.png" alt="Word" />;
const Excel = () => <I src="https://img.icons8.com/color/16/microsoft-excel-2019.png" alt="Excel" />;
const Teams = () => <I src="https://img.icons8.com/color/16/microsoft-teams.png" alt="Teams" />;
const Zoom = () => <I src="https://img.icons8.com/color/16/zoom.png" alt="Zoom" />;
const Outlook = () => <I src="https://img.icons8.com/color/16/microsoft-outlook-2019.png" alt="Outlook" />;
const Gmail = () => <I src="https://img.icons8.com/color/16/gmail.png" alt="Gmail" />;
const LinkedIn = () => <I src="https://img.icons8.com/color/16/linkedin.png" alt="LinkedIn" />;
const Instagram = () => <I src="https://img.icons8.com/color/16/instagram-new.png" alt="Instagram" />;
const TikTok = () => <I src="https://img.icons8.com/color/16/tiktok.png" alt="TikTok" />;
const Facebook = () => <I src="https://img.icons8.com/color/16/facebook-new.png" alt="Facebook" />;
const Pdf = () => <I src="https://img.icons8.com/color/16/pdf.png" alt="PDF" />;
const GoogleAds = () => <I src="https://img.icons8.com/color/16/google-ads.png" alt="Google Ads" />;
const Mailchimp = () => (
  <svg viewBox="0 0 20 20" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" rx="4" fill="#FFE01B" />
    <path d="M3 6.5h14v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-8z" fill="#fff" stroke="#1a1a1a" strokeWidth="1.2" />
    <path d="M3 6.5l7 5 7-5" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

function Li({ icons, children }: { icons?: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="has-icons">
      {icons ? (
        <span className="tool-ico">{icons}</span>
      ) : (
        <Check size={13} strokeWidth={2.5} className="bli-check" aria-hidden="true" />
      )}
      {children}
    </li>
  );
}

export function NeuPraxisBento() {
  const ref = useReveals<HTMLElement>();

  return (
    <section ref={ref} className="neu sec bento-orig" id="praxis">
      <div className="container">
        {/* Überschrift entfernt: beim Vergleich/Ersatz wird die Überschrift der Original-Sektion genutzt */}
        <div className="bento">
          <div className="bcard bcard--navy b-7 rv">
            <h3>Verwaltung &amp; Organisation</h3>
            <ul>
              <Li icons={<Word />}>Word-Dokumente strukturieren</Li>
              <Li icons={<Excel />}>Excel-Inhalte schneller auswerten</Li>
              <Li icons={<><Teams /><Zoom /></>}>Meetings zusammenfassen</Li>
              <Li>Informationen schneller aufbereiten</Li>
            </ul>
            <div className="bcard__foot">Der Klassiker: hier spart fast jedes Team zuerst.</div>
          </div>
          <div className="bcard b-5 rv" style={{ "--d": ".08s" } as CSSProperties}>
            <h3>Vertrieb &amp; Angebote</h3>
            <ul>
              <Li icons={<><Outlook /><Gmail /></>}>Kundenantworten formulieren</Li>
              <Li icons={<><Outlook /><Gmail /></>}>Follow-ups schreiben</Li>
              <Li>Angebote vorbereiten</Li>
              <Li>Wiederkehrende Kommunikation vereinfachen</Li>
            </ul>
            <div className="bcard__foot">Angebote in Minuten statt einer halben Stunde.</div>
          </div>
          <div className="bcard b-4 rv">
            <h3>Recruiting</h3>
            <ul>
              <Li icons={<><TikTok /><Instagram /><Facebook /><LinkedIn /></>}>Social Recruiting</Li>
              <Li>Stellenanzeigen schneller erstellen</Li>
              <Li>Bewerberkommunikation vereinfachen</Li>
              <Li>Sichtbarkeit für offene Stellen aufbauen</Li>
            </ul>
          </div>
          <div className="bcard b-4 rv" style={{ "--d": ".08s" } as CSSProperties}>
            <h3>Recherche &amp; Wissen</h3>
            <ul>
              <Li icons={<><Teams /><Zoom /></>}>Meetings automatisch zusammenfassen</Li>
              <Li icons={<Pdf />}>PDFs und Dokumente einfacher verstehen</Li>
              <Li>Informationen schneller finden</Li>
              <Li>Recherche deutlich beschleunigen</Li>
            </ul>
          </div>
          <div className="bcard b-4 rv" style={{ "--d": ".16s" } as CSSProperties}>
            <h3>Einarbeitung</h3>
            <ul>
              <Li>Neue Mitarbeiter schneller einarbeiten</Li>
              <Li>Wiederkehrende Fragen dokumentieren</Li>
              <Li>Prozesse verständlicher festhalten</Li>
              <Li>Wissen langfristig sichern</Li>
            </ul>
          </div>
          <div className="bcard rv" style={{ gridColumn: "1 / -1" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "flex-start", justifyContent: "space-between" }}>
              <div>
                <h3>Marketing &amp; Sichtbarkeit</h3>
                <ul style={{ marginTop: 12 }}>
                  <Li icons={<><LinkedIn /><Facebook /><TikTok /><Instagram /></>}>Social Media Inhalte erstellen</Li>
                  <Li icons={<Mailchimp />}>Newsletter schneller schreiben</Li>
                  <Li icons={<GoogleAds />}>Kampagnenideen entwickeln</Li>
                  <Li>Texte für Anzeigen formulieren</Li>
                </ul>
              </div>
              <a className="link-quiet" href="#kontakt">Use Case für Ihr Team finden →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
