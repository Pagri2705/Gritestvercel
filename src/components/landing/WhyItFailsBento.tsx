import { useEffect, useRef, useState } from "react";
import {
  Workflow,
  UsersRound,
  GraduationCap,
  Clock,
  Package,
  ShieldX,
  FlaskConical,
} from "lucide-react";

/**
 * Variante B·2/3 (Bento) mit blauer Akzentlinie aus V2:
 * dunkle Kacheln, Sektionshintergrund normal (#f7f8fa).
 * Wird zum Vergleich UNTER der Original-WhyItFails-Sektion gerendert.
 */

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

type Tile = (typeof primary)[number];

function BentoTile({
  tile,
  visible,
  small,
  accent = "left",
}: {
  tile: Tile;
  visible: boolean;
  small?: boolean;
  accent?: "left" | "center" | "right";
}) {
  const accentPos: React.CSSProperties =
    accent === "center"
      ? { left: "50%", transform: "translateX(-50%)" }
      : accent === "right"
        ? { right: "1.75rem" }
        : { left: "1.75rem" };
  const Icon = tile.icon;
  return (
    <div
      className="relative h-full overflow-hidden rounded-2xl border"
      style={{
        background: "#0E1927",
        borderColor: "rgba(255,255,255,0.1)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
        padding: small ? "1.4rem 1.5rem" : "2rem 1.75rem",
        paddingTop: small ? "1.9rem" : "2.4rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(14px)",
        transition:
          "opacity 0.6s cubic-bezier(0.32,0.72,0,1), transform 0.6s cubic-bezier(0.32,0.72,0,1)",
      }}
    >
      {/* Blaue Akzentlinie (aus Variante V2), Position folgt der Kachel-Spalte */}
      <span
        className="absolute top-0 block"
        style={{ width: "2.5rem", height: 2, background: "#8fb3ff", ...accentPos }}
      />
      <div
        className="mb-5 grid place-items-center rounded-full border"
        style={{
          width: small ? 40 : 44,
          height: small ? 40 : 44,
          borderColor: "rgba(255,255,255,0.14)",
        }}
      >
        <Icon
          className={small ? "h-4 w-4" : "h-5 w-5"}
          style={{ color: "#8fb3ff" }}
          strokeWidth={1.4}
        />
      </div>
      <p
        className={`font-bold leading-snug text-white ${small ? "text-[0.92rem]" : "text-[1rem]"}`}
      >
        {tile.title}
      </p>
      <p
        className={`mt-1.5 leading-relaxed text-white/60 ${small ? "text-[0.8rem]" : "text-[0.85rem]"}`}
      >
        {tile.desc}
      </p>
    </div>
  );
}

export function WhyItFailsBento() {
  const [count, setCount] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const total = primary.length + secondary.length;
          for (let i = 0; i < total; i++) {
            setTimeout(() => setCount(i + 1), 150 + i * 180);
          }
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (gridRef.current) obs.observe(gridRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: "#f7f8fa" }} className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.8rem]">
          Das sind die häufigsten Gründe.
        </h2>
        <p className="mx-auto mb-14 max-w-[620px] text-center text-[0.9rem] leading-relaxed text-ink/60 md:text-base">
          Immer wieder dieselben Fehler und genau die lassen sich vermeiden.
        </p>

        <div ref={gridRef} className="grid gap-4 lg:grid-cols-12">
          {primary.map((tile, i) => (
            <div key={tile.title} className="lg:col-span-6">
              <BentoTile tile={tile} visible={count > i} accent={i % 2 === 0 ? "left" : "right"} />
            </div>
          ))}

          <div className="my-4 flex items-center gap-4 lg:col-span-12">
            <div className="h-px flex-1" style={{ background: "rgba(0,0,0,0.1)" }} />
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink/35">
              Außerdem häufig
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(0,0,0,0.1)" }} />
          </div>

          {secondary.map((tile, i) => (
            <div key={tile.title} className="lg:col-span-4">
              <BentoTile
                tile={tile}
                visible={count > primary.length + i}
                small
                accent={i === 0 ? "left" : i === 1 ? "center" : "right"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
