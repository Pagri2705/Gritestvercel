import { useEffect, useRef, useState } from "react";
import { Workflow, UsersRound, GraduationCap, Clock, Package, ShieldX, FlaskConical } from "lucide-react";

const primary = [
  {
    icon: Workflow,
    title: "KI einführen ohne klaren Plan",
    desc: "Ohne Strategie verpufft das Thema schnell wieder — schlichtweg weil keine konkreten Anwendungsfälle gefunden werden.",
  },
  {
    icon: UsersRound,
    title: "Mitarbeiter nicht einbinden",
    desc: "Widerstand und Desinteresse bremsen jede Initiative.",
  },
  {
    icon: GraduationCap,
    title: "Nur technikaffine Kollegen schulen",
    desc: "Mitarbeiter die etwas länger brauchen werden liegen gelassen — das Wissen kommt nicht bei allen an.",
  },
  {
    icon: Clock,
    title: "Einmalige Demo statt Begleitung",
    desc: "Nach dem Workshop fehlt die Umsetzung im Alltag und bei kleinen Problemen wird schnell aufgegeben.",
  },
];

const secondary = [
  {
    icon: Package,
    title: "Falsche Tool-Auswahl",
    desc: "Man kauft das erstbeste KI-Tool ohne zu prüfen ob es zum Team passt.",
  },
  {
    icon: ShieldX,
    title: "Datenschutz ignoriert",
    desc: "Mitarbeiter nutzen KI unkontrolliert mit sensiblen Firmendaten.",
  },
  {
    icon: FlaskConical,
    title: "Kein Pilotprojekt",
    desc: "Direkt unternehmensweiter Rollout statt kleinem Test zuerst.",
  },
];

export function WhyItFails() {
  const [primaryCount, setPrimaryCount] = useState(0);
  const [secondaryCount, setSecondaryCount] = useState(0);
  const primaryRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          primary.forEach((_, i) => {
            setTimeout(() => setPrimaryCount(i + 1), 200 + i * 400);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (primaryRef.current) obs.observe(primaryRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          secondary.forEach((_, i) => {
            setTimeout(() => setSecondaryCount(i + 1), 150 + i * 350);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (secondaryRef.current) obs.observe(secondaryRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: "#f7f8fa" }} className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-[1.9rem] md:text-[2.8rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink text-center mb-4">
          Das sind die häufigsten Gründe.
        </h2>

        <p className="text-center text-[0.9rem] md:text-base text-ink/60 max-w-[620px] mx-auto mb-14 leading-relaxed">
          Immer wieder dieselben Fehler und genau die lassen sich vermeiden.
        </p>

        <div className="max-w-[720px] mx-auto @container">

          {/* Primary 2×2 */}
          <div ref={primaryRef} className="grid grid-cols-1 @lg:grid-cols-2 gap-8 @lg:gap-x-16 @lg:gap-y-12">
            {primary.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="flex items-start gap-5"
                style={{
                  opacity: primaryCount > i ? 1 : 0,
                  transform: primaryCount > i ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                }}
              >
                <div
                  className="shrink-0 grid place-items-center rounded-full"
                  style={{ width: 56, height: 56, background: "rgba(99,102,241,0.1)" }}
                >
                  <Icon className="h-5 w-5" style={{ color: "#6366f1" }} strokeWidth={1.5} />
                </div>
                <div className="pt-1">
                  <p className="text-[0.95rem] font-bold text-ink leading-snug mb-1">{title}</p>
                  <p className="text-[0.82rem] text-ink/55 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-10"
            style={{
              opacity: primaryCount >= primary.length ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.1)" }} />
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink/35">Außerdem häufig</span>
            <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.1)" }} />
          </div>

          {/* Secondary 3-col */}
          <div ref={secondaryRef} className="grid grid-cols-1 @lg:grid-cols-3 gap-10 @lg:gap-x-10 @lg:gap-y-10">
            {secondary.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-3"
                style={{
                  opacity: secondaryCount > i ? 1 : 0,
                  transform: secondaryCount > i ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                }}
              >
                <div
                  className="shrink-0 grid place-items-center rounded-full"
                  style={{ width: 48, height: 48, background: "rgba(99,102,241,0.07)" }}
                >
                  <Icon className="h-4 w-4" style={{ color: "#6366f1", opacity: 0.7 }} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[0.88rem] font-bold text-ink/80 leading-snug mb-1">{title}</p>
                  <p className="text-[0.78rem] text-ink/45 leading-relaxed" style={{ textWrap: "balance" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
