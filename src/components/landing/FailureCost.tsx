import { useEffect, useRef, useState } from "react";

const HALF_CARD = 72;

const steps = [
  {
    color: "#e53e3e",
    title: "Das Budget ist weg",
    content: "Tausende Euro in Tools, Workshops und externe Berater. Ohne ein einziges messbares Ergebnis. Kein ROI. Keine Zahlen. Nur ein abgehaktes Projekt.",
  },
  {
    color: "#b7791f",
    title: "Mitarbeiter verlieren den Glauben",
    content: "Nach dem ersten Fehlversuch entsteht ein Bild: „KI ist nichts für uns.“ Dieser Gedanke sitzt und lässt sich kaum noch korrigieren.",
  },
  {
    color: "#6b46c1",
    title: "Widerstand entsteht",
    content: "Teams die einmal schlechte Erfahrungen gemacht haben, blockieren künftige Initiativen aktiv. Der erste Fehlversuch vergiftet die Unternehmenskultur im Bezug auf künstliche Intelligenz.",
  },
  {
    color: "#2b6cb0",
    title: "Must have Benefits gehen verloren",
    content: "Zeitersparnis, Effizienzgewinn, Wettbewerbsvorteil. All das bleibt auf dem Tisch während die Konkurrenz bereits profitiert.",
  },
  {
    color: "#276749",
    title: "Alles wird schwerer",
    content: "KI wird zum Reizthema. Jeder neue Versuch kämpft gegen das kollektive Gedächtnis des letzten Scheiterns. Der Schaden ist langfristig.",
  },
];

export function FailureCost() {
  const [visible, setVisible] = useState<boolean[]>(Array(steps.length).fill(false));
  const [mobile, setMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new ResizeObserver(([entry]) => setMobile(entry.contentRect.width < 560));
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((_, i) => {
            setTimeout(() => {
              setVisible(prev => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, 150 + i * 350);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">

        <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-brand mb-5 text-center">
          Die Konsequenz
        </p>

        <h2 className="text-[1.9rem] md:text-[2.8rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink text-center mb-4">
          Ein Fehlversuch reicht um das Potenzial zu hemmen.
        </h2>

        <p className="text-center text-[0.9rem] md:text-base text-ink/50 max-w-[680px] mx-auto mb-16 leading-relaxed">
          Verlorenes Geld können Sie wieder verdienen, der zweite Einführungsversuch{" "}
          <span style={{ whiteSpace: "nowrap" }}>wird jedoch schwer.</span>
        </p>

        <div ref={ref}>
          {mobile
            ? steps.map((step, i) => {
                const isLast = i === steps.length - 1;
                return (
                  <div key={i}>
                    <div
                      style={{
                        border: "1px solid #e5e7eb",
                        borderRadius: 12,
                        overflow: "hidden",
                        opacity: visible[i] ? 1 : 0,
                        transform: visible[i] ? "translateY(0)" : "translateY(10px)",
                        transition: "opacity 0.45s ease, transform 0.45s ease",
                      }}
                    >
                      <div className="flex items-center gap-3 px-4 py-2.5" style={{ background: step.color }}>
                        <span style={{ fontSize: "1.4rem", fontWeight: 700, color: "rgba(255,255,255,0.75)", lineHeight: 1, flexShrink: 0 }}>
                          {i + 1}
                        </span>
                        <p className="text-white font-bold text-[0.95rem]">{step.title}</p>
                      </div>
                      <div className="px-5 py-4" style={{ background: "#f9fafb" }}>
                        <p className="text-[0.9rem] text-ink/65 leading-relaxed">{step.content}</p>
                      </div>
                    </div>
                    {!isLast && (
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <div
                          style={{
                            width: 0,
                            height: 28,
                            borderLeft: "2px dashed " + steps[i + 1].color,
                            opacity: visible[i] ? 1 : 0,
                            transition: "opacity 0.3s ease 0.3s",
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })
            : steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            const isLast = i === steps.length - 1;
            const nextStep = steps[i + 1];

            return (
              <div key={i}>
                <div
                  className="flex items-center"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    marginTop: i === 0 ? 0 : -HALF_CARD,
                    opacity: visible[i] ? 1 : 0,
                    transform: visible[i] ? "translateY(0)" : "translateY(10px)",
                    transition: "opacity 0.45s ease, transform 0.45s ease",
                  }}
                >
                  {isLeft ? (
                    <>
                      <span style={{ fontSize: "5.5rem", fontWeight: 700, color: step.color, opacity: 0.4, lineHeight: 1, userSelect: "none", marginRight: 28, marginLeft: -54, flexShrink: 0 }}>
                        {i + 1}
                      </span>
                      <div style={{ width: "54%", minHeight: HALF_CARD * 2, border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                        <div className="px-4 py-2.5 text-center" style={{ background: step.color }}>
                          <p className="text-white font-bold text-[0.9rem]">{step.title}</p>
                        </div>
                        <div className="px-5 py-3" style={{ background: "#f9fafb", flex: 1 }}>
                          <p className="text-[0.875rem] text-ink/65 leading-relaxed">{step.content}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ flex: 1 }} />
                      <div style={{ width: "54%", minHeight: HALF_CARD * 2, border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                        <div className="px-4 py-2.5 text-center" style={{ background: step.color }}>
                          <p className="text-white font-bold text-[0.9rem]">{step.title}</p>
                        </div>
                        <div className="px-5 py-3" style={{ background: "#f9fafb", flex: 1 }}>
                          <p className="text-[0.875rem] text-ink/65 leading-relaxed">{step.content}</p>
                        </div>
                      </div>
                      <span style={{ fontSize: "5.5rem", fontWeight: 700, color: step.color, opacity: 0.4, lineHeight: 1, userSelect: "none", marginLeft: 28, marginRight: -54, flexShrink: 0 }}>
                        {i + 1}
                      </span>
                    </>
                  )}
                </div>

                {!isLast && (
                  <div
                    style={{
                      position: "relative",
                      zIndex: 0,
                      height: 32 + HALF_CARD,
                      marginLeft: isLeft ? "27%" : "54%",
                      width: "19%",
                      borderLeft: isLeft ? ("2px dashed " + nextStep.color) : "none",
                      borderRight: !isLeft ? ("2px dashed " + nextStep.color) : "none",
                      borderBottom: "2px dashed " + nextStep.color,
                      borderRadius: isLeft ? "0 0 0 8px" : "0 0 8px 0",
                      opacity: visible[i] ? 1 : 0,
                      transition: "opacity 0.3s ease 0.3s",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <p className="text-[1.1rem] md:text-[1.3rem] font-semibold text-ink leading-snug">
            Deshalb macht man es einmal.<br />
            <span className="text-brand">Und richtig.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
