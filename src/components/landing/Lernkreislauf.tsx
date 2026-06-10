import type { CSSProperties, ReactNode } from "react";

export function Lernkreislauf() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          style={{
            maxWidth: "100%",
            overflowX: "auto",
          }}
        >
          <div
            style={{
              position: "relative",
              width: 1160,
              height: 780,
              background: "#8d97b0",
              borderRadius: 4,
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            {/* Grain overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* SVG Lines */}
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

            {/* Card: Verstehen (top) */}
            <Card
              style={{ left: "50%", top: 64, transform: "translateX(-50%)" }}
              title="Verstehen"
              step="1."
            >
              <Pill>
                <span>KI verstehen</span>
                <span style={{ display: "flex", alignItems: "center", gap: 7, flexShrink: 0 }}>
                  <img src="https://cdn.simpleicons.org/claude" alt="Claude" width={17} height={17} />
                  <img src="https://cdn.simpleicons.org/openai" alt="ChatGPT" width={17} height={17} />
                  <img src="https://cdn.simpleicons.org/githubcopilot" alt="Copilot" width={17} height={17} />
                  <img src="https://cdn.simpleicons.org/canva" alt="Canva" width={17} height={17} />
                </span>
              </Pill>
              <Pill>Grundlagen moderner KI-Systeme</Pill>
              <Pill>Sprachmodelle &amp; Funktionsweise</Pill>
            </Card>

            {/* Card: Anwenden (right) */}
            <Card
              style={{ right: 84, top: "50%", transform: "translateY(-50%)" }}
              title="Anwenden"
              step="2."
            >
              <Pill>Prompting lernen</Pill>
              <Pill>Anweisungen präzise formulieren</Pill>
              <Pill>Reproduzierbar gute Ergebnisse</Pill>
            </Card>

            {/* Card: Übertragen (bottom) */}
            <Card
              style={{ left: "50%", bottom: 56, transform: "translateX(-50%)" }}
              title="Übertragen"
              step="3."
              accent
            >
              <Pill>Mit echten Aufgaben arbeiten</Pill>
              <Pill>Typische Aufgaben aus dem Arbeitsalltag</Pill>
              <Pill>Gelerntes direkt anwenden</Pill>
            </Card>

            {/* Card: Integrieren (left) */}
            <Card
              style={{ left: 84, top: "50%", transform: "translateY(-50%)" }}
              title="Integrieren"
              step="4."
            >
              <Pill>Prozesse entwickeln</Pill>
              <Pill>Einsatzmöglichkeiten identifizieren</Pill>
              <Pill>Dauerhaft im Unternehmen verankern</Pill>
            </Card>

            {/* Loop label */}
            <div
              style={{
                position: "absolute",
                left: 96,
                top: 148,
                maxWidth: 230,
                zIndex: 2,
                color: "rgba(245,246,249,0.9)",
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: "-0.01em",
                lineHeight: 1.45,
                textShadow: "0 1px 3px rgba(30,38,60,.25)",
              }}
            >
              🔄 Zurück zu Verstehen — neue Anwendungsfälle entstehen, das Team wird kontinuierlich besser.
            </div>
          </div>
        </div>
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
        position: "absolute",
        width: 300,
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
