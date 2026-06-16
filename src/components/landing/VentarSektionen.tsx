import { useEffect, useRef } from "react";

const css = `
.vs-root{--cream:#FBF6ED;--paper:#F5EFE4;--ink:#211B14;--ink-soft:#4F4A42;--ink-faint:#857E72;--orange:#F84C00;--orange-deep:#D94300;--olive:#2E3A2B;--line:#211B14;--line-soft:#D8D0C0;--grain:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='linear' slope='0.07'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E")}
.vs-root{font-family:'Inter',sans-serif;color:var(--ink);background:var(--cream);line-height:1.65;-webkit-font-smoothing:antialiased;container-type:inline-size}
.vs-root a{color:inherit;text-decoration:none}
.vs-root .vs-wrap{max-width:1140px;margin:0 auto;padding:0 24px}
.vs-root .vs-section{padding:60px 0}
.vs-root h2,.vs-root .serif{font-family:'Source Serif 4',Georgia,serif;font-weight:500;letter-spacing:-.015em;line-height:1.15}
.vs-root h2{font-size:clamp(26px,3.6vw,38px)}
.vs-root .eyebrow{display:flex;align-items:center;gap:12px;font-size:13.5px;font-weight:600;letter-spacing:.06em;text-transform:uppercase}
.vs-root .eyebrow::before{content:"";width:13px;height:13px;background:var(--orange);border-radius:3px;flex:none}
.vs-root .btn{display:inline-flex;align-items:center;gap:9px;font-weight:700;font-size:15.5px;padding:13px 26px;border-radius:999px;cursor:pointer;border:none;transition:background .15s,transform .15s}
.vs-root .btn-orange{background:var(--orange);color:#fff}
.vs-root .btn-orange:hover{background:var(--orange-deep);transform:translateY(-1px)}
.vs-root .grainy{position:relative;overflow:hidden}
.vs-root .grainy::after{content:"";position:absolute;inset:0;pointer-events:none;background-image:var(--grain);opacity:.55}
.vs-root .grainy>*{position:relative;z-index:2}
.vs-root .band{border-radius:12px;padding:clamp(30px,5vw,62px);color:#F4F1E6}
.vs-root .band-olive{background:var(--olive)}
.vs-root .band .imgcard{border-radius:10px;min-height:320px;background:radial-gradient(100% 80% at 20% 20%,#C6D6C2 0%,transparent 60%),linear-gradient(150deg,#E3D9BD 0%,#D9A86E 100%);display:grid;place-items:center}
.vs-root .band .ph-note{background:rgba(33,27,20,.78);color:#F4F1E6;font-size:13px;font-weight:600;padding:9px 16px;border-radius:999px}
.vs-root .band .eyebrow{color:#F4F1E6}
.vs-root .band h2{color:#F8F5EA;max-width:760px}
.vs-root .band p{color:#C2C9B6;max-width:620px;font-size:17px}
.vs-root .split{border:1px solid var(--line);border-radius:12px;overflow:hidden;display:grid;grid-template-columns:1fr 1fr}
.vs-root .split-text{padding:clamp(28px,4.5vw,52px);display:flex;flex-direction:column;justify-content:center;gap:16px}
.vs-root .split-text h3{font-family:'Source Serif 4',serif;font-weight:500;font-size:clamp(24px,2.8vw,32px);letter-spacing:-.015em}
.vs-root .split-text p{color:var(--ink-soft);font-size:16px}
.vs-root .split-visual{background:radial-gradient(110% 90% at 85% 15%,#BFD3C4 0%,transparent 55%),linear-gradient(150deg,#E9DCC0 0%,#DDAF74 100%);position:relative;min-height:340px;display:grid;place-items:center;padding:34px;border-left:1px solid var(--line)}
.vs-root .split-visual .panel{background:#FFFDF8;border:1px solid rgba(33,27,20,.25);border-radius:10px;box-shadow:0 22px 50px rgba(33,27,20,.2);padding:22px;width:min(360px,100%);font-size:13.5px}
.vs-root .panel .ph{font-weight:700;font-size:13px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center}
.vs-root .panel .badge{font-size:11px;font-weight:700;color:#1E7A3C;background:#E5F3E9;padding:3px 9px;border-radius:999px}
.vs-root .panel .prow{display:flex;justify-content:space-between;padding:9px 0;border-top:1px solid var(--line-soft);color:var(--ink-soft)}
.vs-root .panel .prow b{color:var(--ink)}
.vs-root .split-num{display:grid;place-items:center;text-align:center;padding:40px}
.vs-root .split-num b{font-family:'Source Serif 4',serif;font-weight:500;font-size:clamp(80px,10vw,150px);line-height:1;color:#2C2317}
.vs-root .split-num span{font-size:15px;font-weight:600;color:#4A3B27;margin-top:10px;display:block;max-width:280px}
.vs-root .split-dark{border:none;background:var(--olive);color:#F4F1E6}
.vs-root .split-dark .split-text h3{color:#F8F5EA}
.vs-root .split-dark .split-text p{color:#C2C9B6}
.vs-root .split-dark .split-visual{border-left:1px solid rgba(244,241,230,.25)}
.vs-root .split-check{list-style:none;display:grid;gap:11px;margin-top:4px}
.vs-root .split-check li{display:flex;gap:11px;font-size:15.5px;color:#C2C9B6}
.vs-root .split-check .t{color:#FF8A4D;font-weight:800;flex:none}
@container (max-width:760px){.vs-root .split{grid-template-columns:1fr}.vs-root .split-visual{border-left:none!important;border-top:1px solid var(--line)}}
.vs-root .statement{text-align:center;padding:34px 0}
.vs-root .statement h2{font-family:'Inter',sans-serif;font-weight:800;font-size:clamp(30px,4.8vw,52px);letter-spacing:-.03em;line-height:1.1}
.vs-root .statement h2 .o{color:var(--orange)}
.vs-root .statement p{margin:22px auto 0;max-width:620px;font-size:17.5px;color:var(--ink-soft)}
.vs-root .statement-band{border-radius:12px;text-align:center;padding:clamp(48px,7vw,90px) clamp(24px,5vw,60px)}
.vs-root .statement-band h2{font-family:'Source Serif 4',serif;font-weight:500;color:#F8F5EA;font-size:clamp(30px,4.8vw,54px);max-width:880px;margin:0 auto}
.vs-root .statement-band h2 .o{color:#FF8A4D}
.vs-root .statement-band p{margin:22px auto 0;max-width:560px;font-size:17px;color:#C2C9B6}
.vs-root .d3-grid{display:grid;grid-template-columns:.95fr 1.05fr;gap:clamp(28px,4.5vw,56px);align-items:center}
.vs-root .d3-grid .eyebrow{color:#F4F1E6}
.vs-root .d3-grid h2{color:#F8F5EA;margin-top:16px}
.vs-root .d3-grid p{color:#C2C9B6;margin-top:14px;font-size:16.5px}
@container (max-width:760px){.vs-root .d3-grid{grid-template-columns:1fr}}
.vs-root .chat{background:#26301F;border:1px solid rgba(244,241,230,.18);border-radius:16px;box-shadow:0 34px 80px rgba(20,16,10,.35);overflow:hidden;color:#EFEAE0}
.vs-root .chat-bar{display:flex;align-items:center;gap:12px;padding:15px 20px;border-bottom:1px solid rgba(244,241,230,.14);background:#1F2819}
.vs-root .chat-ava{width:34px;height:34px;border-radius:50%;background:var(--orange);color:#fff;display:grid;place-items:center;font-weight:800;font-size:13px;flex:none}
.vs-root .chat-id b{display:block;font-size:14px;letter-spacing:-.01em;color:#F4F1E6}
.vs-root .chat-id span{display:block;font-size:12px;color:#8E9683;line-height:1.3}
.vs-root .chat-id .typing{color:var(--orange);font-weight:600}
.vs-root .chat-live{margin-left:auto;font-size:11px;font-weight:700;letter-spacing:.08em;color:var(--orange);text-transform:uppercase;display:flex;align-items:center;gap:6px}
.vs-root .chat-live::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--orange);animation:vs-pulse 1.4s infinite}
@keyframes vs-pulse{0%,100%{opacity:1}50%{opacity:.25}}
.vs-root .chat-body{padding:24px 22px;min-height:330px;display:flex;flex-direction:column;gap:14px}
.vs-root .m{display:flex;gap:10px;max-width:94%}
.vs-root .m-u{align-self:flex-end;flex-direction:row-reverse}
.vs-root .m .bubble{padding:12px 15px;border-radius:13px;font-size:14px;line-height:1.55}
.vs-root .m-u .bubble{background:#FBF6ED;color:var(--ink);border-bottom-right-radius:4px}
.vs-root .m-u .cursor{display:inline-block;width:8px;height:15px;background:var(--ink);vertical-align:-2px;margin-left:2px;animation:vs-blink .8s steps(1) infinite}
@keyframes vs-blink{50%{opacity:0}}
.vs-root .m-a .bubble{background:#313D27;border:1px solid rgba(244,241,230,.14);color:#E4E0D2;border-bottom-left-radius:4px}
.vs-root .m .ava{width:28px;height:28px;border-radius:50%;flex:none;display:grid;place-items:center;font-size:11px;font-weight:800;margin-top:2px}
.vs-root .m-u .ava{background:#3C4830;color:#D9D4C4}
.vs-root .m-a .ava{background:var(--orange);color:#fff}
.vs-root .dots{display:inline-flex;gap:5px;padding:4px 0}
.vs-root .dots i{width:6px;height:6px;border-radius:50%;background:#A9B19C;animation:vs-bounce 1.1s infinite;font-style:normal}
.vs-root .dots i:nth-child(2){animation-delay:.15s}
.vs-root .dots i:nth-child(3){animation-delay:.3s}
@keyframes vs-bounce{0%,80%,100%{transform:translateY(0);opacity:.4}40%{transform:translateY(-5px);opacity:1}}
.vs-root .result-card{margin-top:10px;background:#2B3622;border:1px solid rgba(244,241,230,.14);border-radius:10px;padding:13px 15px}
.vs-root .result-card .rh{font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#A9B19C;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;gap:10px}
.vs-root .result-card .rh .done{color:#7CC98F;text-transform:none;letter-spacing:0;font-size:11.5px;font-weight:700}
.vs-root .result-line{display:flex;gap:9px;align-items:flex-start;opacity:0;transform:translateY(5px);transition:opacity .35s,transform .35s;padding:4px 0;font-size:13.5px;color:#E4E0D2}
.vs-root .result-line.show{opacity:1;transform:none}
.vs-root .result-line .tick{color:var(--orange);font-weight:800;flex:none}
.vs-root .chat-foot{border-top:1px solid rgba(244,241,230,.14);padding:13px 18px;display:flex;align-items:center;gap:12px;background:#1F2819}
.vs-root .chat-input{flex:1;font-size:13.5px;color:#8E9683}
.vs-root .chat-send{width:36px;height:36px;border-radius:50%;background:var(--orange);color:#fff;display:grid;place-items:center;font-weight:800;flex:none}
`;

export function VentarSektionen() {
  const chatRef = useRef<HTMLDivElement>(null);
  const stopRef = useRef(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  useEffect(() => {
    const el = chatRef.current;
    if (!el) return;
    stopRef.current = false;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    const scenarios = [
      {
        prompt: "Mach aus den Stichpunkten der Frühschicht ein sauberes Übergabeprotokoll nach unserer Vorlage.",
        think: "Ich strukturiere die Notizen …",
        rtitle: "Übergabeprotokoll · Frühschicht",
        results: ["Nach Vorlage gegliedert und ausformuliert", "Auffälligkeiten farblich hervorgehoben", "Zur Prüfung bereit — 35 Sekunden"],
      },
      {
        prompt: "Fass die KW-Zahlen aus der Tabelle zusammen und erstell den Wochenbericht für die Geschäftsführung.",
        think: "Ich lese die Tabelle ein …",
        rtitle: "Wochenbericht · KW 24",
        results: ["Kennzahlen ausgelesen und geprüft", "Abweichungen zur Vorwoche markiert", "Bericht formatiert — fertig nach 58 Sekunden"],
      },
    ];

    async function typeInto(el: HTMLElement, text: string, speed: number) {
      for (let i = 0; i < text.length; i++) {
        if (stopRef.current) return;
        el.textContent = text.slice(0, i + 1);
        await wait(speed);
      }
    }

    async function runChat(s: typeof scenarios[0]) {
      const body = el!.querySelector(".chat-body") as HTMLElement;
      const status = el!.querySelector(".status") as HTMLElement;
      body.innerHTML = "";

      const u = document.createElement("div");
      u.className = "m m-u";
      u.innerHTML = '<span class="ava">Sie</span><span class="bubble"><span class="txt"></span><span class="cursor"></span></span>';
      body.appendChild(u);
      await wait(450);
      await typeInto(u.querySelector(".txt") as HTMLElement, s.prompt, reduce ? 0 : 24);
      u.querySelector(".cursor")?.remove();
      await wait(420);

      status.innerHTML = '<span class="typing">tippt …</span>';
      const a = document.createElement("div");
      a.className = "m m-a";
      a.innerHTML = '<span class="ava">KI</span><span class="bubble"><span class="think"></span> <span class="dots"><i></i><i></i><i></i></span></span>';
      body.appendChild(a);
      await typeInto(a.querySelector(".think") as HTMLElement, s.think, reduce ? 0 : 15);
      await wait(reduce ? 280 : 1300);
      if (stopRef.current) return;
      a.querySelector(".dots")?.remove();
      status.textContent = "online";

      const card = document.createElement("div");
      card.className = "result-card";
      card.innerHTML = `<div class="rh"><span>${s.rtitle}</span><span class="done">✓ Erledigt</span></div>`;
      a.querySelector(".bubble")!.appendChild(card);
      for (const r of s.results) {
        if (stopRef.current) return;
        const line = document.createElement("div");
        line.className = "result-line";
        line.innerHTML = `<span class="tick">✓</span><span>${r}</span>`;
        card.appendChild(line);
        await wait(55);
        line.classList.add("show");
        await wait(reduce ? 140 : 600);
      }
      await wait(reduce ? 1400 : 3200);
    }

    let i = 0;
    (async () => {
      while (!stopRef.current) {
        await runChat(scenarios[i % scenarios.length]);
        i++;
      }
    })();

    return () => { stopRef.current = true; };
  }, []);

  return (
    <div className="vs-root">

      {/* BLOCK A1: Olivband + Bild-Karte */}
      <div className="vs-section">
        <div className="vs-wrap">
          <div className="band band-olive grainy">
            <div className="imgcard"><span className="ph-note">Platzhalter — dein Workshop-Foto</span></div>
            <span className="eyebrow" style={{ marginTop: 36 }}>Training vor Ort oder remote</span>
            <h2 style={{ marginTop: 16 }}>Bringen Sie Ihre schwierigste Aufgabe mit. Sie gehen mit der Lösung raus.</h2>
            <p style={{ marginTop: 14 }}>Kein Folien-Seminar: Wir arbeiten an den echten E-Mails, Angeboten und Berichten Ihres Betriebs. Was im Training entsteht, nutzt Ihr Team ab dem nächsten Morgen.</p>
          </div>
        </div>
      </div>

      {/* BLOCK B1: Split — Text + UI-Panel */}
      <div className="vs-section">
        <div className="vs-wrap">
          <div className="split">
            <div className="split-text">
              <span className="eyebrow">Dokumenten-Verarbeitung</span>
              <h3>Definieren Sie genau, was automatisch läuft</h3>
              <p>Eingehende PDFs, Formulare und Belege werden ausgelesen, geprüft und in Ihre Systeme übertragen. Sie legen die Regeln fest — die KI hält sich daran.</p>
              <div><a className="btn" style={{ border: "1.5px solid var(--ink)" }} href="#">Mehr erfahren →</a></div>
            </div>
            <div className="split-visual grainy">
              <div className="panel">
                <div className="ph">Posteingang · Belege <span className="badge">Automatisch</span></div>
                <div className="prow"><span>Rechnung_Mueller_0626.pdf</span><b>→ DATEV</b></div>
                <div className="prow"><span>Lieferschein_KW24.pdf</span><b>→ Lager</b></div>
                <div className="prow"><span>Anfrage_Praxis_Weber.pdf</span><b>→ CRM</b></div>
                <div className="prow"><span>Stundenzettel_Juni.pdf</span><b>→ Lohn</b></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK B2: Split — Text + Riesenzahl */}
      <div className="vs-section">
        <div className="vs-wrap">
          <div className="split">
            <div className="split-text">
              <span className="eyebrow">Im eigenen Betrieb gemessen</span>
              <h3>Ein Workflow. Sechs Stunden. Jede Woche.</h3>
              <p>Bevor Ventar KI das erste Kundenprojekt verkauft hat, lief das System im eigenen Pflegedienst. Die Zahl rechts ist keine Schätzung — sie kommt aus unserem eigenen Dienstplan.</p>
            </div>
            <div className="split-visual split-num grainy">
              <div>
                <b>6 h</b>
                <span>pro Mitarbeiter und Woche zurück — Woche für Woche</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK B3: Split dunkel — Olivgrund + Checkliste */}
      <div className="vs-section">
        <div className="vs-wrap">
          <div className="split split-dark grainy">
            <div className="split-text">
              <span className="eyebrow" style={{ color: "#F4F1E6" }}>So läuft das Training</span>
              <h3>Kein Seminar. Eine Werkstatt.</h3>
              <p>Wir arbeiten an Ihren echten Aufgaben — und am Ende des Tages kann Ihr Team das hier:</p>
              <ul className="split-check">
                <li><span className="t">✓</span>Prompts schreiben, die beim ersten Versuch sitzen</li>
                <li><span className="t">✓</span>Eigene Aufgaben in wiederverwendbare Vorlagen gießen</li>
                <li><span className="t">✓</span>Erkennen, welche Daten KI sehen darf — und welche nie</li>
              </ul>
            </div>
            <div className="split-visual grainy">
              <div className="panel">
                <div className="ph">Trainings-Tag · Ablauf <span className="badge">Live</span></div>
                <div className="prow"><span>09:00 — Grundlagen am echten Fall</span><b>✓</b></div>
                <div className="prow"><span>11:00 — Eigene Aufgaben lösen</span><b>✓</b></div>
                <div className="prow"><span>14:00 — Vorlagen fürs Team bauen</span><b>●</b></div>
                <div className="prow"><span>16:00 — DSGVO-Leitplanken</span><b>○</b></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK C1: Statement — Grotesk, fett, zentriert */}
      <div className="vs-section">
        <div className="vs-wrap">
          <div className="statement">
            <h2>Jedes Team hat schon KI.<br /><span className="o">Was fehlt, ist das Können.</span></h2>
            <p>Ihre Mitarbeiter probieren längst herum — jeder für sich, ohne Leitplanken. Die Frage ist nicht ob, sondern wie gut.</p>
          </div>
        </div>
      </div>

      {/* BLOCK C3: Statement Serif auf Olivband */}
      <div className="vs-section">
        <div className="vs-wrap">
          <div className="statement-band band-olive grainy">
            <h2>KI ersetzt keine Mitarbeiter.<br /><span className="o">Sie ersetzt die Arbeit, die keiner vermisst.</span></h2>
            <p>Abtippen, sortieren, formatieren, nachfassen — das übernimmt das System. Ihre Leute machen das, wofür Sie sie eingestellt haben.</p>
          </div>
        </div>
      </div>

      {/* BLOCK D3: Chat im Split */}
      <div className="vs-section">
        <div className="vs-wrap">
          <div className="band band-olive grainy">
            <div className="d3-grid">
              <div>
                <span className="eyebrow">Live-Demo</span>
                <h2>Das hier tippt kein Entwickler. Das tippt Ihre Verwaltung.</h2>
                <p>Nach dem Training schreiben Ihre Mitarbeiter solche Anweisungen selbst — in normalem Deutsch, ohne eine Zeile Code. Die KI erledigt den Rest.</p>
              </div>
              <div className="chat" ref={chatRef}>
                <div className="chat-bar">
                  <span className="chat-ava">KI</span>
                  <span className="chat-id"><b>Doku-Assistent</b><span className="status">bereit</span></span>
                  <span className="chat-live">Live-Demo</span>
                </div>
                <div className="chat-body" />
                <div className="chat-foot">
                  <span className="chat-input">Aufgabe eingeben …</span>
                  <span className="chat-send">↑</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
