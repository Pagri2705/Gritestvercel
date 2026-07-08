import { useEffect, useState } from "react";

type Msg = { from: "them" | "me"; text: string; time?: string };
type Convo = { name: string; role: string; date: string; messages: Msg[] };

const conversations: Convo[] = [
  {
    name: "Sophia",
    role: "Haustechnik Betrieb",
    date: "Di. 13. Mai, 18:07",
    messages: [
      { from: "them", text: "Hey Patrick, wir haben jetzt die ersten 3 Wochen durch und ich bin begeistert. 2 Kollegen kommen etwas langsamer voran und selbst die beiden sind fasziniert.", time: "Fr. 9. Mai, 17:42" },
      { from: "me", text: "Hi Sophia, das freut mich riesig! Wie läuft es denn bei der Angebotserstellung?", time: "Fr. 9. Mai, 17:48" },
      { from: "them", text: "Richtig gut. Was früher eine halbe Stunde gedauert hat, ist jetzt meistens in 4–6 Minuten fertig.", time: "Fr. 9. Mai, 17:55" },
      { from: "me", text: "Mega. Und die Protokolle, die ihr im Workshop gebaut habt?", time: "Mo. 12. Mai, 08:51" },
      { from: "them", text: "Nutzen wir täglich. Die Monteure schreiben nur noch Stichpunkte, den Rest macht die KI.", time: "Mo. 12. Mai, 09:04" },
      { from: "me", text: "Genau so soll es sein. Meldet euch, wenn ihr den nächsten Bereich angehen wollt.", time: "Mo. 12. Mai, 09:10" },
      { from: "them", text: "Machen wir auf jeden Fall. Danke nochmal für alles!", time: "Di. 13. Mai, 18:07" },
    ],
  },
  {
    name: "Andreas",
    role: "Sanitär & Heizung",
    date: "Mo. 5. Mai, 09:42",
    messages: [
      { from: "them", text: "Moin Patrick, kurzes Update: wir nutzen das jetzt auch für die Kundenmails und Protokolle.", time: "Mi. 30. Apr., 07:48" },
      { from: "me", text: "Stark, Andreas! Hat sich das Team gut eingefunden?", time: "Mi. 30. Apr., 07:55" },
      { from: "them", text: "Schneller als gedacht. Keiner hat mehr Lust den ganzen Kram manuell zu machen.", time: "Mi. 30. Apr., 08:02" },
      { from: "me", text: "Das hört man gern. Wo merkt ihr den größten Unterschied?", time: "Do. 1. Mai, 10:22" },
      { from: "them", text: "Bei den Angeboten. Wir sind deutlich schneller raus und wirken viel professioneller.", time: "Do. 1. Mai, 10:31" },
      { from: "me", text: "Top. Beim nächsten Mal zeige ich euch die Automatisierung für eingehende Anfragen.", time: "Do. 1. Mai, 10:39" },
      { from: "them", text: "Sehr gerne, das klingt genau nach dem, was wir brauchen.", time: "Fr. 2. Mai, 13:36" },
    ],
  },
  {
    name: "Camila",
    role: "Pflegedienst",
    date: "Do. 24. Apr., 16:20",
    messages: [
      { from: "me", text: "Hi Camila, wie läuft es? Gibt es Neuigkeiten?", time: "Mi. 23. Apr., 14:05" },
      { from: "them", text: "Hallo Patrick! Ja, die Doku läuft mittlerweile fast von allein. Riesige Erleichterung im Alltag.", time: "Mi. 23. Apr., 14:12" },
      { from: "me", text: "Das freut mich! Wo spart ihr am meisten Zeit?", time: "Mi. 23. Apr., 14:18" },
      { from: "them", text: "Bei den Übergabeprotokollen. Das spart uns jeden Tag locker eine Stunde.", time: "Do. 24. Apr., 09:17" },
      { from: "me", text: "Das ist super, ist dein ganzes Team schon damit am arbeiten?", time: "Do. 24. Apr., 09:25" },
      { from: "them", text: "Fast alle. Die letzten zwei ziehen gerade nach, das wird auch noch.", time: "Do. 24. Apr., 09:33" },
    ],
  },
];

const css = `
@keyframes ct-pop { 0% { opacity: 0; transform: translateY(8px) scale(0.96); } 100% { opacity: 1; transform: none; } }
@keyframes ct-dot { 0%, 60%, 100% { transform: translateY(0); opacity: .4; } 30% { transform: translateY(-4px); opacity: 1; } }
.ct-msg { animation: ct-pop .32s cubic-bezier(.22,1,.36,1) both; }
.ct-dot { width: 7px; height: 7px; border-radius: 50%; background: #8e8e93; display: inline-block; animation: ct-dot 1.2s infinite; }
.ct-dot:nth-child(2) { animation-delay: .18s; }
.ct-dot:nth-child(3) { animation-delay: .36s; }
`;

export function ChatTestimonials() {
  const [idx, setIdx] = useState(0);
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const [composing, setComposing] = useState<string | null>(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  useEffect(() => {
    setShown(0);
    setTyping(false);
    setComposing(null);
    const timers: ReturnType<typeof setTimeout>[] = [];
    const msgs = conversations[idx].messages;
    let t = 1200;
    msgs.forEach((m, i) => {
      if (m.from === "them") {
        // Tipp-Indikator, dann Nachricht (etwas länger, damit es realistisch dauert)
        timers.push(setTimeout(() => setTyping(true), t));
        t += 2600;
        timers.push(setTimeout(() => { setTyping(false); setShown(i + 1); }, t));
        t += 1500;
      } else {
        // Eigene Nachricht: Zeichen für Zeichen ins Eingabefeld tippen
        const text = m.text;
        const perChar = 52;
        timers.push(setTimeout(() => setComposing(""), t));
        for (let k = 1; k <= text.length; k++) {
          timers.push(setTimeout(() => setComposing(text.slice(0, k)), t + k * perChar));
        }
        t += text.length * perChar + 850;
        // Absenden: Eingabefeld leeren, Blase erscheint
        timers.push(setTimeout(() => { setComposing(null); setShown(i + 1); }, t));
        t += 1500;
      }
    });
    t += 4500;
    timers.push(setTimeout(() => setIdx((p) => (p + 1) % conversations.length), t));
    return () => timers.forEach(clearTimeout);
  }, [idx]);

  const c = conversations[idx];
  const visible = c.messages.slice(0, shown);
  const lastIsMe = c.messages[shown - 1]?.from === "me" && !typing && composing === null;

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-[1.9rem] md:text-[2.8rem] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
              So klingt es, wenn es funktioniert.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
              Echte Rückmeldungen aus laufenden Projekten: Haustechnik, Sanitär &amp; Heizung, Pflege.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
          {/* Name über dem Handy */}
          <div style={{ textAlign: "center" }}>
            <div className="text-lg font-semibold text-ink">{c.name}</div>
            <div className="text-sm text-ink-muted">{c.role}</div>
          </div>

          {/* iPhone */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: 320,
                background: "#000",
                borderRadius: 46,
                padding: 11,
                boxShadow: "0 24px 60px rgba(0,0,0,0.28), 0 4px 12px rgba(0,0,0,0.18)",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: 36,
                  overflow: "hidden",
                  position: "relative",
                  height: 600,
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "-apple-system, 'SF Pro Text', 'Segoe UI', sans-serif",
                }}
              >
                {/* Status bar */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 24px 4px", fontSize: 14, fontWeight: 600, color: "#000" }}>
                  <span style={{ letterSpacing: "-0.02em" }}>11:36</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    {/* signal */}
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="#000">
                      <rect x="0" y="8" width="3" height="3" rx="0.8"/>
                      <rect x="4" y="5" width="3" height="6" rx="0.8"/>
                      <rect x="8" y="2" width="3" height="9" rx="0.8"/>
                      <rect x="12" y="0" width="3" height="11" rx="0.8"/>
                    </svg>
                    {/* wifi – Heroicons wifi-solid fill, cropped to content */}
                    <svg width="15" height="12" viewBox="1 2 22 19" fill="#000" style={{ marginTop: 2 }}>
                      <path fillRule="evenodd" d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.061zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.204a6 6 0 018.486 0 .75.75 0 010 1.06l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.303 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 112.121 0 1.5 1.5 0 01-2.121 0z" clipRule="evenodd"/>
                    </svg>
                    {/* battery */}
                    <span style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
                      <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
                        <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke="#000" strokeOpacity="0.35"/>
                        <rect x="2" y="2" width="16" height="9" rx="2" fill="#000"/>
                        <rect x="25" y="4" width="1.5" height="5" rx="0.8" fill="#000" fillOpacity="0.4"/>
                      </svg>
                      <span style={{ position: "absolute", left: 0, top: 0, width: 25, height: 13, display: "grid", placeItems: "center", fontSize: 10, fontWeight: 700, color: "#fff", lineHeight: 1 }}>81</span>
                    </span>
                  </div>
                </div>

                {/* Header */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "4px 0 12px", borderBottom: "0.5px solid #e5e5ea", position: "relative" }}>
                  {/* Zurück-Pille mit Badge */}
                  <div style={{ position: "absolute", left: 12, top: 14, display: "flex", alignItems: "center", gap: 10, background: "#fff", borderRadius: 999, padding: "8px 14px 8px 10px", boxShadow: "0 5px 18px rgba(0,0,0,0.12)" }}>
                    <svg width="13" height="20" viewBox="0 0 12 20" fill="none" stroke="#111" strokeWidth="2.35" strokeLinecap="round" strokeLinejoin="round"><polyline points="10 2 2 10 10 18" /></svg>
                    <span style={{ background: "#202124", color: "#fff", fontSize: 13, fontWeight: 700, borderRadius: 999, padding: "3px 10px", lineHeight: 1.25, letterSpacing: "-0.02em" }}>24</span>
                  </div>
                  {/* FaceTime-Kamera oben rechts */}
                  <div style={{ position: "absolute", right: 12, top: 10, width: 46, height: 46, borderRadius: "50%", background: "#fff", boxShadow: "0 5px 18px rgba(0,0,0,0.12)", display: "grid", placeItems: "center" }}>
                    <svg width="28" height="19" viewBox="0 0 28 18" fill="none" stroke="#111" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1.5" y="2.5" width="17" height="13" rx="4" />
                      <path d="M18.5 7.2 L25.4 3.4 C26.2 3 26.5 3.4 26.5 4.2 L26.5 13.8 C26.5 14.6 26.2 15 25.4 14.6 L18.5 10.8 Z" />
                    </svg>
                  </div>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(160deg,#9aa0e0,#6f76c8)", display: "grid", placeItems: "center", color: "#fff", fontSize: 21, fontWeight: 500 }}>
                    {c.name[0]}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 3, marginTop: 5, fontSize: 15, fontWeight: 600, color: "#000", letterSpacing: "-0.01em" }}>
                    {c.name}
                    <svg width="9" height="9" viewBox="0 0 8 8" fill="none" stroke="#8e8e93" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 1.5 6 4 2 6.5" /></svg>
                  </div>
                </div>

                {/* Messages */}
                <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 3, padding: "12px 12px 6px" }}>
                  {visible.map((m, i) => {
                    const me = m.from === "me";
                    const day = m.time?.split(", ")[0];
                    const clock = m.time?.split(", ")[1];
                    const prevDay = i > 0 ? c.messages[i - 1].time?.split(", ")[0] : undefined;
                    const newDay = i === 0 || day !== prevDay;
                    return (
                      <div key={i}>
                        {m.time && (
                          <div className="ct-msg" style={{ textAlign: "center", fontSize: 10.5, color: "#8e8e93", margin: i === 0 ? "2px 0 7px" : newDay ? "14px 0 7px" : "9px 0 6px" }}>
                            {i === 0 && (<><span style={{ fontWeight: 600 }}>iMessage</span><br /></>)}
                            {newDay ? (<><span style={{ fontWeight: 600 }}>{day}</span> {clock}</>) : clock}
                          </div>
                        )}
                        <div className="ct-msg" style={{ display: "flex", justifyContent: me ? "flex-end" : "flex-start" }}>
                          <div
                            style={{
                              maxWidth: "76%",
                              padding: "8px 13px",
                              fontSize: 13.5,
                              lineHeight: 1.35,
                              borderRadius: 18,
                              ...(me
                                ? { background: "#007AFF", color: "#fff", borderBottomRightRadius: 4 }
                                : { background: "#E9E9EB", color: "#000", borderBottomLeftRadius: 4 }),
                            }}
                          >
                            {m.text}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {typing && (
                    <div className="ct-msg" style={{ display: "flex", justifyContent: "flex-start" }}>
                      <div style={{ background: "#E9E9EB", borderRadius: 18, borderBottomLeftRadius: 4, padding: "11px 14px", display: "flex", gap: 4, alignItems: "center" }}>
                        <span className="ct-dot" /><span className="ct-dot" /><span className="ct-dot" />
                      </div>
                    </div>
                  )}

                  {lastIsMe && (
                    <div style={{ textAlign: "right", fontSize: 10, fontWeight: 600, color: "#8e8e93", paddingRight: 4, marginTop: 1 }}>Gelesen</div>
                  )}
                </div>

                {/* Input bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "8px 12px 12px" }}>
                  {/* Plus */}
                  <div style={{ width: 33, height: 33, borderRadius: "50%", background: "#E9E9EB", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7c7c80" strokeWidth="2.2" strokeLinecap="round"><line x1="12" y1="6" x2="12" y2="18" /><line x1="6" y1="12" x2="18" y2="12" /></svg>
                  </div>
                  {/* Eingabefeld */}
                  <div style={{ flex: 1, minHeight: 33, maxHeight: 150, overflowY: "auto", borderRadius: 18, border: "1px solid #d1d1d6", display: "flex", alignItems: "flex-end", gap: 6, padding: "6px 6px 6px 13px", fontSize: 13.5 }}>
                    <div style={{ flex: 1, minWidth: 0, lineHeight: 1.4, paddingTop: 1, paddingBottom: 2 }}>
                      {composing !== null ? (
                        <span style={{ color: "#000", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                          {composing}
                          <span style={{ display: "inline-block", width: 1.5, height: 15, background: "#007aff", marginLeft: 1, verticalAlign: "-3px", animation: "ct-dot 1s steps(1) infinite" }} />
                        </span>
                      ) : (
                        <>
                          <span style={{ display: "inline-block", width: 1.5, height: 16, background: "#007aff", marginRight: 1, verticalAlign: "-3px", animation: "ct-dot 1s steps(1) infinite" }} />
                          <span style={{ color: "#aeaeb2" }}>Message</span>
                        </>
                      )}
                    </div>
                    {composing !== null ? (
                      <div style={{ width: 27, height: 27, borderRadius: "50%", background: "#0a7cff", display: "grid", placeItems: "center", flexShrink: 0 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
                      </div>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c7c80" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginRight: 5 }}><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indikator: aktueller Name + dass 2 weitere kommen */}
          <div style={{ display: "flex", gap: 8 }}>
            {conversations.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Gespräch ${i + 1}`}
                style={{
                  width: i === idx ? 22 : 8,
                  height: 8,
                  borderRadius: 999,
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  background: i === idx ? "oklch(0.432 0.195 258)" : "#d1d1d6",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
