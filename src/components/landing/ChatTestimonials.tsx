import { useEffect, useState } from "react";

type Msg = { from: "them" | "me"; text: string };
type Convo = { name: string; role: string; messages: Msg[] };

const conversations: Convo[] = [
  {
    name: "Sophia",
    role: "Haustechnik Betrieb",
    messages: [
      { from: "them", text: "Wir haben mittlerweile auch ein paar andere Anwendungen getestet, die wir im Workshop selbst noch gar nicht besprochen hatten." },
      { from: "me", text: "Das freut uns sehr! Welche Bereiche habt ihr zusätzlich erschlossen?" },
      { from: "them", text: "Vor allem bei der Angebotserstellung und intern für Protokolle. Das läuft jetzt viel schneller." },
    ],
  },
  {
    name: "Andreas",
    role: "Sanitär & Heizungsbetrieb",
    messages: [
      { from: "them", text: "Wir nutzen das mittlerweile nicht nur für Angebote, sondern auch intern für Zusammenfassungen und E-Mails." },
      { from: "me", text: "Genau das ist das Ziel â€” dass es wirklich in den Alltag übergeht." },
      { from: "them", text: "Ja, das Team hat sich schnell daran gewöhnt. Hätten wir nicht erwartet." },
    ],
  },
  {
    name: "Camila",
    role: "Pflegedienst",
    messages: [
      { from: "them", text: "Vor allem bei Dokumentation und internen Texten hilft uns das mittlerweile echt weiter." },
      { from: "me", text: "Das ist ein sehr häufiger Anwendungsfall in der Pflege â€” schön, dass es sich eingespielt hat." },
      { from: "them", text: "Genau. Spart uns wirklich Zeit, die wir jetzt anders einsetzen können." },
    ],
  },
];

export function ChatTestimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % conversations.length), 4500);
    return () => clearInterval(t);
  }, []);

  const c = conversations[idx];

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:gap-24 lg:items-end">
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
            So sieht praktische KI Nutzung im Unternehmen aus
          </h2>
          <p className="text-base leading-relaxed text-ink-muted md:text-lg">
            Echte Gespräche nach echten Workshops.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            {conversations.map((conv, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-full rounded-2xl border p-6 text-left transition-all ${
                  i === idx
                    ? "border-brand bg-surface-elevated shadow-card"
                    : "border-border bg-surface/60 hover:bg-surface-elevated"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`grid h-10 w-10 place-items-center rounded-full text-sm font-bold ${i === idx ? "bg-brand text-white" : "bg-border text-ink-muted"}`}>
                    {conv.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink">{conv.name}</div>
                    <div className="text-xs text-ink-muted">{conv.role}</div>
                  </div>
                </div>
                {i === idx && (
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted line-clamp-2">
                    â€ž{conv.messages[0].text}"
                  </p>
                )}
              </button>
            ))}
          </div>

          <div className="mx-auto w-full max-w-md rounded-[2rem] border border-border bg-surface-elevated p-3 shadow-elevated">
            <div className="rounded-[1.6rem] bg-surface overflow-hidden">
              <div className="flex items-center gap-3 border-b border-border bg-surface-elevated px-5 py-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand text-sm font-bold text-white">
                  {c.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{c.name}</div>
                  <div className="text-xs text-ink-muted">{c.role}</div>
                </div>
              </div>
              <div key={idx} className="flex min-h-[280px] flex-col justify-end gap-2 p-5 animate-in fade-in duration-500">
                {c.messages.map((m, i) => (
                  <div
                    key={i}
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.from === "them"
                        ? "mr-auto rounded-bl-sm bg-surface-elevated text-ink shadow-soft border border-border"
                        : "ml-auto rounded-br-sm bg-brand text-white"
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
