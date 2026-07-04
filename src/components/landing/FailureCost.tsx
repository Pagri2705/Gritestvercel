import { useEffect, useRef, useState } from "react";

const steps = [
  {
    color: "#e53e3e",
    title: "Das Budget ist weg",
    content: "Tausende Euro in Tools, Workshops und externe Berater — ohne ein einziges messbares Ergebnis. Kein ROI. Keine Zahlen. Nur ein abgehaktes Projekt.",
  },
  {
    color: "#b7791f",
    title: "Mitarbeiter verlieren den Glauben",
    content: "Nach dem ersten Fehlversuch entsteht ein Bild: \"KI ist nichts für uns.\" Dieser Gedanke sitzt — und lässt sich kaum noch korrigieren.",
  },
  {
    color: "#6b46c1",
    title: "Widerstand, der sich kaum zurücksetzen lässt",
    content: "Teams die einmal schlechte Erfahrungen gemacht haben, blockieren künftige Initiativen aktiv. Der erste Fehlversuch vergiftet die Unternehmenskultur.",
  },
  {
    color: "#2b6cb0",
    title: "Alle Benefits durch KI — verloren",
    content: "Zeitersparnis, Effizienzgewinn, Wettbewerbsvorteil. All das bleibt auf dem Tisch während die Konkurrenz bereits profitiert.",
  },
  {
    color: "#276749",
    title: "Alles wird schwerer statt leichter",
    content: "KI wird zum Reizthema. Jeder neue Versuch kämpft gegen das kollektive Gedächtnis des letzten Scheiterns. Der Schaden ist langfristig.",
  },
];

export function FailureCost() {
  const [visible, setVisible] = useState<boolean[]>(Array(steps.length).fill(false));
  const ref = useRef<HTMLDivElement>(null);

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
      <div className="mx-auto max-w-3xl px-6">

        <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-brand mb-5 text-center">
          Die Konsequenz
        </p>

        <h2 className="text-[1.9rem] md:text-[2.8rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink text-center mb-4">
          Ein Fehlversuch reicht —<br />und das System ist kaputt.
        </h2>

        <p className="text-center text-[0.9rem] md:text-base text-ink/50 max-w-[520px] mx-auto mb-16 leading-relaxed">
          Es geht nicht nur um das verlorene Geld. Es geht darum, was danach kommt.
        </p>

        {/* Alternating timeline */}
        {/* Mobile: simple stacked list */}
        <div ref={ref} className="sm:hidden flex flex-col gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl"
              style={{
                border: "1px solid #e5e7eb",
                opacity: visible[i] ? 1 : 0,
                transform: visible[i] ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.45s ease, transform 0.45s ease",
              }}
            >
              <div className="px-4 py-2.5 flex items-center gap-3" style={{ background: step.color }}>
                <span className="font-bold text-white/30 text-lg leading-none">{i + 1}</span>
                <p className="text-white font-bold text-[0.88rem]">{step.title}</p>
              </div>
              <div className="px-4 py-3" style={{ background: "#f9fafb" }}>
                <p className="text-[0.78rem] text-ink/65 leading-relaxed">{step.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: alternating timeline */}
        <div className="hidden sm:block relative">
          <div
            className="absolute top-0 bottom-0"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              width: 2,
              backgroundImage: "repeating-linear-gradient(to bottom, #d1d5db 0px, #d1d5db 6px, transparent 6px, transparent 12px)",
            }}
          />
          <div className="flex flex-col" style={{ gap: 48 }}>
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="relative flex items-center"
                  style={{
                    opacity: visible[i] ? 1 : 0,
                    transform: visible[i] ? "translateY(0)" : "translateY(12px)",
                    transition: "opacity 0.45s ease, transform 0.45s ease",
                  }}
                >
                  <div className="flex-1 flex justify-end pr-6">
                    {isLeft ? (
                      <div className="w-full max-w-[260px] overflow-hidden rounded-xl" style={{ border: "1px solid #e5e7eb" }}>
                        <div className="px-4 py-2.5" style={{ background: step.color }}>
                          <p className="text-white font-bold text-[0.88rem]">{step.title}</p>
                        </div>
                        <div className="px-4 py-3" style={{ background: "#f9fafb" }}>
                          <p className="text-[0.78rem] text-ink/65 leading-relaxed">{step.content}</p>
                        </div>
                      </div>
                    ) : (
                      <span className="font-bold select-none" style={{ fontSize: "5.5rem", color: step.color, opacity: 0.1, lineHeight: 1 }}>{i + 1}</span>
                    )}
                  </div>
                  <div className="relative z-10 shrink-0 rounded-full" style={{ width: 14, height: 14, background: step.color, boxShadow: "0 0 0 3px white" }} />
                  <div className="flex-1 flex justify-start pl-6">
                    {!isLeft ? (
                      <div className="w-full max-w-[260px] overflow-hidden rounded-xl" style={{ border: "1px solid #e5e7eb" }}>
                        <div className="px-4 py-2.5" style={{ background: step.color }}>
                          <p className="text-white font-bold text-[0.88rem]">{step.title}</p>
                        </div>
                        <div className="px-4 py-3" style={{ background: "#f9fafb" }}>
                          <p className="text-[0.78rem] text-ink/65 leading-relaxed">{step.content}</p>
                        </div>
                      </div>
                    ) : (
                      <span className="font-bold select-none" style={{ fontSize: "5.5rem", color: step.color, opacity: 0.1, lineHeight: 1 }}>{i + 1}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing */}
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
