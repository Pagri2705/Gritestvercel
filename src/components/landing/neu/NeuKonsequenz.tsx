import type { CSSProperties } from "react";
import { useReveals } from "./NeuShared";

const cards = [
  { c: "#b23a2c", d: "0s", title: "Das Budget ist weg", text: "Tausende Euro in Tools, Workshops und Berater — ohne ein einziges messbares Ergebnis." },
  { c: "#a06a1e", d: ".07s", title: "Mitarbeiter verlieren den Glauben", text: "Nach dem ersten Fehlversuch entsteht ein Bild: „KI ist nichts für uns.“ Dieser Gedanke sitzt." },
  { c: "#5f3f9e", d: ".14s", title: "Widerstand entsteht", text: "Teams mit schlechten Erfahrungen blockieren künftige Initiativen aktiv." },
  { c: "#2456a8", d: ".21s", title: "Vorteile gehen verloren", text: "Zeitersparnis und Wettbewerbsvorteil bleiben auf dem Tisch, während die Konkurrenz profitiert." },
  { c: "#1f6146", d: ".28s", title: "Alles wird schwerer", text: "Jeder neue Versuch kämpft gegen das Gedächtnis des letzten Scheiterns." },
];

export function NeuKonsequenz() {
  const ref = useReveals<HTMLElement>();

  return (
    <section ref={ref} className="neu sec cost cost-orig">
      <div className="container">
        <div className="sec-head sec-head--center rv">
          <p className="eyebrow-orig">Die Konsequenz</p>
          <h2>Ein Fehlversuch reicht, um das Potenzial <em>jahrelang</em> zu hemmen.</h2>
          <p>Verlorenes Geld können Sie wieder verdienen — der zweite Einführungsversuch wird jedoch schwer.</p>
        </div>
        <div className="cost__stack">
          {cards.map((card, i) => (
            <div key={i} className="cost__card rv" style={{ "--c": card.c, "--d": card.d } as CSSProperties}>
              <span className="cost__no">{i + 1}</span>
              <div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="cost__closer rv">
          Deshalb macht man es <em>einmal</em>.<br />Und richtig.
        </p>
      </div>
    </section>
  );
}
