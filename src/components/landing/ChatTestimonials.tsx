import { useEffect, useState } from "react";

type Msg = { from: "them" | "me"; text: string };
type Convo = { name: string; messages: Msg[] };

const conversations: Convo[] = [
  {
    name: "Contact Name Placeholder",
    messages: [
      { from: "them", text: "Message Placeholder von der anderen Person." },
      { from: "me", text: "Antwort Placeholder." },
      { from: "them", text: "Weiteres Message Placeholder mit etwas mehr Text." },
      { from: "me", text: "Kurzes Reply Placeholder." },
    ],
  },
  {
    name: "Contact Name Placeholder",
    messages: [
      { from: "them", text: "Frage Placeholder über das Angebot." },
      { from: "me", text: "Antwort Placeholder mit mehr Kontext." },
      { from: "them", text: "Follow-up Message Placeholder." },
    ],
  },
  {
    name: "Contact Name Placeholder",
    messages: [
      { from: "them", text: "Feedback Placeholder." },
      { from: "me", text: "Reply Placeholder." },
      { from: "them", text: "Abschluss Message Placeholder über mehrere Worte." },
      { from: "me", text: "Kurzes Closing Placeholder." },
    ],
  },
];

export function ChatTestimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % conversations.length), 4000);
    return () => clearInterval(t);
  }, []);

  const c = conversations[idx];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="text-xs font-medium uppercase tracking-widest text-brand">Section Label</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Testimonial Headline Placeholder
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Testimonial Intro Placeholder über die Kundenstimmen.
          </p>
          <div className="mt-8 flex items-center gap-2">
            {conversations.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-ink" : "w-4 bg-border"}`}
                aria-label={`Conversation ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-md rounded-[2rem] border border-border bg-surface p-3 shadow-elevated">
          <div className="rounded-[1.6rem] bg-background overflow-hidden">
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand to-brand/60" />
              <div>
                <div className="text-sm font-semibold text-ink">{c.name}</div>
                <div className="text-xs text-ink-muted">online</div>
              </div>
            </div>
            <div key={idx} className="flex min-h-[320px] flex-col gap-2 p-5 animate-in fade-in duration-500">
              {c.messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-snug ${
                    m.from === "me"
                      ? "ml-auto rounded-br-md bg-brand text-brand-foreground"
                      : "mr-auto rounded-bl-md bg-secondary text-ink"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
