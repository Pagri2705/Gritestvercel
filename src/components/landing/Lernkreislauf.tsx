import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

const GRADIENT =
  "radial-gradient(100% 80% at 20% 20%, #C6D6C2 0%, transparent 60%), linear-gradient(150deg, #E3D9BD 0%, #D9A86E 100%)";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")";

const ICON_ROW = (
  <span style={{ display: "flex", alignItems: "center", gap: 7, flexShrink: 0 }}>
    <img src="https://cdn.simpleicons.org/claude" alt="Claude" width={17} height={17} />
    <img src="https://cdn.oaistatic.com/assets/favicon-o20kmmos.svg" alt="ChatGPT" width={17} height={17} />
    <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="Gemini" width={17} height={17} />
    <img src="https://copilot.microsoft.com/favicon.ico" alt="Copilot" width={17} height={17} />
  </span>
);

const CARDS: { title: string; step: string; accent?: boolean; pills: ReactNode[] }[] = [
  {
    title: "Verstehen",
    step: "1.",
    pills: [
      <><span>KI verstehen</span>{ICON_ROW}</>,
      "Grundlagen moderner KI-Systeme",
      "Sprachmodelle & Funktionsweise",
    ],
  },
  {
    title: "Anwenden",
    step: "2.",
    pills: ["Prompting lernen", "Anweisungen präzise formulieren", "Reproduzierbar gute Ergebnisse"],
  },
  {
    title: "Übertragen",
    step: "3.",
    accent: true,
    pills: ["Mit echten Aufgaben arbeiten", "Typische Aufgaben aus dem Arbeitsalltag", "Gelerntes direkt anwenden"],
  },
  {
    title: "Integrieren",
    step: "4.",
    pills: ["Prozesse entwickeln", "Einsatzmöglichkeiten identifizieren", "Dauerhaft im Unternehmen verankern"],
  },
];

export function Lernkreislauf() {
  const ref = useRef<HTMLDivElement>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new ResizeObserver(([entry]) => {
      setMobile(entry.contentRect.width < 820);
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6" ref={ref}>
        {mobile ? (
          /* ── Mobile: gestapelte Variante ── */
          <div
            style={{
              background: GRADIENT,
              borderRadius: 12,
              overflow: "hidden",
              position: "relative",
              padding: "28px 18px",
            }}
          >
            <div style={{ position: "absolute", inset: 0, backgroundImage: GRAIN, pointerEvents: "none" }} />
            <div
              style={{
                position: "relative",
                zIndex: 2,
                color: "#211B14",
                fontWeight: 600,
                fontSize: 14,
                lineHeight: 1.45,
                marginBottom: 22,
              }}
            >
              <span style={{ display: "block", fontWeight: 700, marginBottom: 4 }}>
                Der Kreislauf beginnt von vorn, nur schneller:
              </span>
              Mit jeder Runde erschließt Ihr Team neue Anwendungsfälle und neue KI-Systeme selbstständig — die
              Abhängigkeit von externer Beratung endet hier.
            </div>
            <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: 14 }}>
              {CARDS.map((c) => (
                <Card key={c.title} title={c.title} step={c.step} accent={c.accent}>
                  {c.pills.map((p, i) => (
                    <Pill key={i}>{p}</Pill>
                  ))}
                </Card>
              ))}
            </div>
          </div>
        ) : (
          /* ── Desktop: Kreuz-Diagramm ── */
          <div style={{ maxWidth: "100%", overflowX: "auto" }}>
            <div
              style={{
                position: "relative",
                width: 1160,
                height: 780,
                background: GRADIENT,
                borderRadius: 4,
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <div style={{ position: "absolute", inset: 0, backgroundImage: GRAIN, pointerEvents: "none", zIndex: 0 }} />

              <svg
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }}
                viewBox="0 0 1160 780"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <marker id="arrowhead" markerWidth="9" markerHeight="9" refX="6.5" refY="4.5" orient="auto">
                    <path d="M1 1 L7.5 4.5 L1 8" stroke="rgba(245,246,249,0.9)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </marker>
                </defs>
                <g stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeDasharray="1.5 7" strokeLinecap="round">
                  <line x1="580" y1="390" x2="580" y2="120" />
                  <line x1="580" y1="390" x2="580" y2="660" />
                  <line x1="580" y1="390" x2="240" y2="390" />
                  <line x1="580" y1="390" x2="920" y2="390" />
                  <line x1="580" y1="390" x2="350" y2="200" />
                  <line x1="580" y1="390" x2="810" y2="200" />
                  <line x1="580" y1="390" x2="350" y2="580" />
                  <line x1="580" y1="390" x2="810" y2="580" />
                </g>
                <g stroke="rgba(245,246,249,0.9)" strokeWidth="2" fill="none" strokeLinecap="round">
                  <path d="M 790 165 Q 880 200 925 268" markerEnd="url(#arrowhead)" />
                  <path d="M 930 510 Q 890 575 805 615" markerEnd="url(#arrowhead)" />
                  <path d="M 370 615 Q 280 578 235 510" markerEnd="url(#arrowhead)" />
                  <path d="M 230 268 Q 272 198 360 162" markerEnd="url(#arrowhead)" />
                </g>
              </svg>

              {/* Center logo */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 96,
                  height: 96,
                  background: "#fff",
                  borderRadius: 22,
                  boxShadow: "0 10px 30px rgba(30,38,60,.18), 0 2px 6px rgba(30,38,60,.10)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 3,
                  padding: 10,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 14,
                    background: "#f0efe9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#9a968c",
                  }}
                >
                  LOGO
                </div>
              </div>

              <Card style={{ left: "50%", top: 64, transform: "translateX(-50%)" }} title="Verstehen" step="1.">
                <Pill>
                  <span>KI verstehen</span>
                  {ICON_ROW}
                </Pill>
                <Pill>Grundlagen moderner KI-Systeme</Pill>
                <Pill>Sprachmodelle &amp; Funktionsweise</Pill>
              </Card>

              <Card style={{ right: 84, top: "50%", transform: "translateY(-50%)" }} title="Anwenden" step="2.">
                <Pill>Prompting lernen</Pill>
                <Pill>Anweisungen präzise formulieren</Pill>
                <Pill>Reproduzierbar gute Ergebnisse</Pill>
              </Card>

              <Card style={{ left: "50%", bottom: 56, transform: "translateX(-50%)" }} title="Übertragen" step="3." accent>
                <Pill>Mit echten Aufgaben arbeiten</Pill>
                <Pill>Typische Aufgaben aus dem Arbeitsalltag</Pill>
                <Pill>Gelerntes direkt anwenden</Pill>
              </Card>

              <Card style={{ left: 84, top: "50%", transform: "translateY(-50%)" }} title="Integrieren" step="4.">
                <Pill>Prozesse entwickeln</Pill>
                <Pill>Einsatzmöglichkeiten identifizieren</Pill>
                <Pill>Dauerhaft im Unternehmen verankern</Pill>
              </Card>

              {/* Loop label */}
              <div
                style={{
                  position: "absolute",
                  left: 32,
                  top: 40,
                  maxWidth: 360,
                  zIndex: 2,
                  color: "#211B14",
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.45,
                }}
              >
                <span style={{ display: "block", whiteSpace: "nowrap" }}>Der Kreislauf beginnt von vorn, nur schneller:</span>
                Mit jeder Runde erschließt Ihr Team neue Anwendungsfälle und neue KI-Systeme selbstständig — die Abhängigkeit von externer Beratung endet hier.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Card({
  children,
  title,
  step,
  accent,
  style,
}: {
  children: ReactNode;
  title: string;
  step: string;
  accent?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        position: style ? "absolute" : "relative",
        width: style ? 300 : "100%",
        background: accent ? "#f7f6fc" : "#fdfcf8",
        borderRadius: 16,
        boxShadow: "0 10px 30px rgba(30,38,60,.18), 0 2px 6px rgba(30,38,60,.10)",
        padding: "22px 18px 18px",
        zIndex: 2,
        ...style,
      }}
    >
      <h3
        style={{
          textAlign: "center",
          fontSize: 16,
          fontWeight: 700,
          color: "#1f2430",
          marginBottom: 16,
          letterSpacing: "-0.01em",
        }}
      >
        <span style={{ color: "#8a94ad", fontWeight: 600, marginRight: 6 }}>{step}</span>
        {title}
      </h3>
      {children}
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        background: "#ffffff",
        border: "1px solid #e9e6de",
        borderRadius: 10,
        padding: "11px 14px",
        marginBottom: 10,
        fontSize: 13,
        color: "#1f2430",
        lineHeight: 1.35,
      }}
    >
      {children}
    </div>
  );
}
