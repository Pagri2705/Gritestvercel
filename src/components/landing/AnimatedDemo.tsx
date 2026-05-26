import { useEffect, useState } from "react";
import { Mic, Sparkles, Calendar, Mail, FolderOpen } from "lucide-react";

const FULL_TEXT = "Jeden Tag um 8:00 Uhr sollen alle E-Mails von Kunden automatisch erkannt, in den Ordner \"Kunden\" verschoben werden und mir eine kurze Zusammenfassung der wichtigsten Nachrichten zugeschickt werden.";

const steps = [
  { icon: Calendar,   label: "Jeden Tag um 8:00 Uhr" },
  { icon: FolderOpen, label: "Kunden-E-Mails erkennen & verschieben" },
  { icon: Mail,       label: "Zusammenfassung per E-Mail senden" },
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
    <section style={{ background: "#f7f8fa" }} className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* Left: Text */}
          <div>
            <h2 className="text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
              Jedes KI Tool.<br />
              <span className="text-brand">Ein strukturierter Ansatz.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
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
                right: 32,
                width: "55%",
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
      </div>
    </section>
  );
}
