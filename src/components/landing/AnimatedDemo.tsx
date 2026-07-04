import { useEffect, useState } from "react";
import { Mic, Sparkles, Calendar, Mail, FolderOpen, Paperclip, ReceiptText, CheckCircle2 } from "lucide-react";

const FULL_TEXT = "Jeden Tag um 8:00 Uhr sollen alle E-Mails von Kunden automatisch erkannt, in den Ordner \"Kunden\" verschoben werden und mir eine kurze Zusammenfassung der wichtigsten Nachrichten zugeschickt werden.";

const steps = [
  { icon: Calendar,   label: "Jeden Tag um 8:00 Uhr" },
  { icon: FolderOpen, label: "Kunden-E-Mails erkennen & verschieben" },
  { icon: Mail,       label: "Zusammenfassung per E-Mail senden" },
];

const invoiceRows = [
  { file: "rechnung_baumarkt.jpg", supplier: "Bauzentrum Weber", category: "Material", target: "Buchhaltung", kind: "invoice" },
  { file: "tankbeleg_kw24.png", supplier: "Tankstelle Nord", category: "Fahrtkosten", target: "Steuerordner", kind: "fuel" },
  { file: "lieferant_mueller.pdf", supplier: "Müller Großhandel", category: "Wareneinkauf", target: "DATEV Export", kind: "supplier" },
];

function runTyping(onTick: (text: string) => void, onDone: () => void) {
  let i = 0;
  const id = setInterval(() => {
    i++;
    onTick(FULL_TEXT.slice(0, i));
    if (i >= FULL_TEXT.length) {
      clearInterval(id);
      onDone();
    }
  }, 28);
  return id;
}

function InvoiceThumb({ kind }: { kind: string }) {
  const isFuel = kind === "fuel";
  const isSupplier = kind === "supplier";

  return (
    <div
      aria-hidden="true"
      style={{
        width: 34,
        height: 44,
        borderRadius: 4,
        background: isFuel ? "#fbfbf8" : "#fffdf8",
        border: "1px solid rgba(15,41,66,.16)",
        boxShadow: "0 3px 8px rgba(15,41,66,.12)",
        padding: 4,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <div
        style={{
          height: 8,
          borderRadius: 2,
          background: isFuel ? "#1f7a4d" : isSupplier ? "#0F2942" : "#d4a055",
          color: "white",
          fontSize: 4.8,
          lineHeight: "8px",
          textAlign: "center",
          fontWeight: 800,
          letterSpacing: ".04em",
        }}
      >
        {isFuel ? "TANK" : isSupplier ? "MÜLLER" : "RECHNUNG"}
      </div>
      <div style={{ height: 3, width: "74%", background: "rgba(15,41,66,.22)", borderRadius: 99 }} />
      <div style={{ height: 3, width: "92%", background: "rgba(15,41,66,.14)", borderRadius: 99 }} />
      <div style={{ height: 3, width: "66%", background: "rgba(15,41,66,.14)", borderRadius: 99 }} />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", alignItems: "end" }}>
        <div style={{ display: "grid", gap: 2 }}>
          <span style={{ width: 8, height: 2, background: "rgba(15,41,66,.2)", borderRadius: 99 }} />
          <span style={{ width: 12, height: 2, background: "rgba(15,41,66,.16)", borderRadius: 99 }} />
        </div>
        <b style={{ fontSize: 5.5, lineHeight: 1, color: "#0F2942" }}>
          {isFuel ? "74,20" : isSupplier ? "KW24" : "248,90"}
        </b>
      </div>
    </div>
  );
}

export function AnimatedDemo() {
  const [displayed, setDisplayed] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [stepVisible, setStepVisible] = useState([false, false, false]);

  function startCycle() {
    setDisplayed("");
    setShowResult(false);
    setStepVisible([false, false, false]);

    runTyping(setDisplayed, () => {
      setTimeout(() => setShowResult(true), 1200);
      setTimeout(() => setStepVisible([true, false, false]), 1600);
      setTimeout(() => setStepVisible([true, true, false]), 2100);
      setTimeout(() => setStepVisible([true, true, true]), 2600);
      setTimeout(() => startCycle(), 2600 + 6000);
    });
  }

  useEffect(() => {
    startCycle();
  }, []);

  return (
    <section style={{ background: "#ffffff", containerType: "inline-size" }} className="py-16 md:py-24">
      <style>{`
        .invoice-demo { position: relative; overflow: hidden; }
        .invoice-file { opacity: 0; animation: invoice-file-in 7.8s ease-in-out infinite; }
        .invoice-file:nth-child(2) { animation-delay: .35s; }
        .invoice-file:nth-child(3) { animation-delay: .7s; }
        .invoice-scan { position: relative; overflow: hidden; }
        .invoice-scan::after {
          content: "";
          position: absolute;
          left: -15%;
          right: -15%;
          top: 0;
          height: 42px;
          background: linear-gradient(180deg, rgba(99,102,241,0), rgba(99,102,241,.22), rgba(99,102,241,0));
          animation: invoice-scan-line 7.8s ease-in-out infinite;
          pointer-events: none;
        }
        .invoice-result-row { opacity: 0; transform: translateY(8px); animation: invoice-row-in 7.8s ease-in-out infinite; }
        .invoice-result-row:nth-child(1) { animation-delay: 2.7s; }
        .invoice-result-row:nth-child(2) { animation-delay: 3.1s; }
        .invoice-result-row:nth-child(3) { animation-delay: 3.5s; }
        .invoice-status { animation: invoice-status 7.8s ease-in-out infinite; }
        .invoice-cta { animation: invoice-cta 7.8s ease-in-out infinite; }
        @keyframes invoice-file-in {
          0%, 5% { opacity: 0; transform: translateY(12px) scale(.98); }
          14%, 68% { opacity: 1; transform: translateY(0) scale(1); }
          82%, 100% { opacity: 0; transform: translateY(-8px) scale(.99); }
        }
        @keyframes invoice-scan-line {
          0%, 22% { transform: translateY(-56px); opacity: 0; }
          28% { opacity: 1; }
          52% { transform: translateY(360px); opacity: 1; }
          62%, 100% { transform: translateY(420px); opacity: 0; }
        }
        @keyframes invoice-row-in {
          0%, 8% { opacity: 0; transform: translateY(8px); }
          16%, 58% { opacity: 1; transform: translateY(0); }
          70%, 100% { opacity: 0; transform: translateY(-5px); }
        }
        @keyframes invoice-status {
          0%, 35% { opacity: .25; transform: scale(.96); }
          43%, 72% { opacity: 1; transform: scale(1); }
          88%, 100% { opacity: .25; transform: scale(.96); }
        }
        @keyframes invoice-cta {
          0%, 45% { opacity: .45; }
          55%, 74% { opacity: 1; box-shadow: 0 10px 24px rgba(99,102,241,.28); }
          88%, 100% { opacity: .45; box-shadow: none; }
        }
        @container (max-width: 760px) {
          .invoice-demo { grid-template-columns: 1fr !important; padding: 20px !important; }
          .invoice-visual { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* Left: Text */}
          <div>
            <h2 className="text-[1.9rem] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl text-center md:text-left">
              Jedes KI Tool.<br />
              <span className="text-brand">Ein strukturierter Ansatz.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg text-center md:text-left">
              Ob ChatGPT, Claude oder Gemini — im Workshop lernen Ihre Mitarbeiter, moderne KI Tools direkt für ihre eigenen Aufgaben einzusetzen.
            </p>
          </div>

          {/* Right: Animated container */}
          <div className="relative overflow-hidden" style={{ height: 520, borderRadius: "12px", background: "linear-gradient(160deg, #8aa8a4 0%, #c4aa80 45%, #d4a055 100%)" }}>

            {/* Card 1: Instruction — slides slightly up+left and fades when result shows */}
            <div
              className="absolute p-6 shadow-lg"
              style={{
                top: "50%",
                left: "50%",
                width: "80%",
                borderRadius: "12px",
                transform: showResult
                  ? "translate(calc(-50% - 24px), calc(-50% - 120px))"
                  : "translate(-50%, -50%)",
                background: showResult ? "rgba(255,255,255,0.87)" : "rgba(255,255,255,0.92)",
                backdropFilter: "blur(8px)",
                transition: "transform 0.6s ease, background 0.6s ease",
              }}
            >
              <p className="text-sm font-bold mb-3" style={{ color: "#0F2942" }}>
                Anweisungen:
              </p>
              <div
                className="p-4 min-h-[110px] text-sm leading-relaxed"
                style={{
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.1)",
                  color: "#0F2942",
                }}
              >
                {displayed}
                <span className="inline-block w-0.5 h-4 bg-brand ml-0.5 align-middle animate-pulse" />
              </div>
              {!showResult && (
                <div className="mt-4 flex items-center justify-end gap-3">
                  <Mic className="h-5 w-5 text-ink-muted" />
                  <button className="inline-flex items-center gap-2 bg-brand px-4 py-2 text-sm font-semibold text-white">
                    <Sparkles className="h-4 w-4" />
                    Agent erstellen
                  </button>
                </div>
              )}
            </div>

            {/* Card 2: Steps — fades in from nothing */}
            <div
              className="absolute p-5 shadow-lg"
              style={{
                bottom: 32,
                right: 16,
                width: "68%",
                borderRadius: "12px",
                opacity: showResult ? 1 : 0,
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(8px)",
                transition: "opacity 0.6s ease",
              }}
            >
              <div className="flex flex-col gap-2">
                {steps.map(({ icon: Icon, label }, i) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 border border-black/10 px-3 py-2.5 text-sm text-ink"
                    style={{
                      opacity: stepVisible[i] ? 1 : 0,
                      transform: stepVisible[i] ? "translateY(0)" : "translateY(6px)",
                      transition: "opacity 0.35s ease, transform 0.35s ease",
                    }}
                  >
                    <Icon className="h-4 w-4 shrink-0 text-brand" />
                    {label}
                  </div>
                ))}
              </div>
              <button
                className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-brand px-4 py-2.5 text-sm font-semibold text-white"
                style={{
                  opacity: stepVisible[2] ? 1 : 0,
                  transition: "opacity 0.4s ease 0.2s",
                }}
              >
                <Sparkles className="h-4 w-4" />
                Agent erstellen
              </button>
            </div>

          </div>

        </div>

        <div
          className="invoice-demo"
          style={{
            display: "grid",
            gap: 32,
            gridTemplateColumns: "0.85fr 1.15fr",
            marginTop: 56,
            border: "1px solid rgba(0,0,0,.1)",
            background: "white",
            padding: 32,
            borderRadius: 12,
          }}
        >
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-brand">
              Zweiter Praxisfall
            </p>
            <h3 className="text-[1.65rem] font-bold leading-[1.12] tracking-[-0.02em] text-ink md:text-[2.35rem]">
              Belege anhängen. Rechnungen automatisch vorsortieren.
            </h3>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-muted md:text-base">
              Ihr Team fotografiert Rechnungen oder zieht PDFs in den Chat. Die KI erkennt Lieferant, Betrag und
              Kategorie, sortiert die Belege vor und bereitet die Übergabe an Buchhaltung oder Steuerberatung vor.
            </p>
          </div>

          <div
            className="invoice-visual"
            style={{
              display: "grid",
              gridTemplateColumns: "0.9fr 1.1fr",
              gap: 16,
              borderRadius: 12,
              background: "linear-gradient(160deg, #eef2f0 0%, #f8f1e6 55%, #ead2af 100%)",
              padding: 18,
            }}
          >
            <div className="flex flex-col gap-3">
              <div className="bg-white p-4 shadow-sm" style={{ borderRadius: 10 }}>
                <div className="mb-3 flex items-center gap-2 text-sm font-bold text-ink">
                  <Paperclip className="h-4 w-4 text-brand" />
                  Anhänge
                </div>
                {invoiceRows.map((row, i) => (
                  <div
                    key={row.file}
                    className="invoice-file mb-2 flex items-center gap-3 border border-black/10 bg-[#fdfcf8] px-3 py-2.5 text-sm text-ink"
                    style={{ borderRadius: 8, animationDelay: `${i * 0.35}s` }}
                  >
                    <InvoiceThumb kind={row.kind} />
                    <span className="truncate">{row.file}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-4 text-sm leading-relaxed text-ink shadow-sm" style={{ borderRadius: 10 }}>
                <p className="mb-2 font-bold">Anweisung:</p>
                <p className="text-ink-muted">
                  Sortiere die Belege nach Lieferant, Kostenart und Zielordner. Markiere alles, was geprüft werden muss.
                </p>
              </div>
            </div>

            <div className="invoice-scan bg-white p-4 shadow-sm" style={{ borderRadius: 10 }}>
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm font-bold text-ink">
                  <ReceiptText className="h-4 w-4 text-brand" />
                  Sortierte Rechnungen
                </div>
                <span className="invoice-status rounded-full bg-green-50 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-green-700">
                  geprüft
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {invoiceRows.map((row) => (
                  <div
                    key={row.supplier}
                    className="invoice-result-row border border-black/10 bg-[#fdfcf8] p-3 text-sm"
                    style={{ borderRadius: 8 }}
                  >
                    <div className="mb-2 flex items-center gap-2 font-bold text-ink">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />
                      {row.supplier}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[0.78rem] text-ink-muted">
                      <span>Kostenart: {row.category}</span>
                      <span>Ziel: {row.target}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="invoice-cta mt-3 w-full inline-flex items-center justify-center gap-2 bg-brand px-4 py-2.5 text-sm font-semibold text-white">
                <Sparkles className="h-4 w-4" />
                Übergabe vorbereiten
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
