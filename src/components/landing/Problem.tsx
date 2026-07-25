export function Problem() {
  return (
    <section style={{ background: "#f7f8fa" }} className="pt-0 pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-24">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* Left: headline */}
          <div>
            <h2 className="text-[1.9rem] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl text-center md:text-left">
<span style={{ color: "#e53e3e" }}>78%</span> der KI&nbsp;Einführungen scheitern
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg max-w-[520px] text-center md:text-left">
              Es liegt weder an der Technologie noch an mangelndem Wissen.
            </p>
          </div>

          {/* Right: Bild mit Zitat-Overlay, im Doppelrand-Rahmen (Design aus Variante A·2/3) */}
          <div
            className="w-full"
            style={{
              maxWidth: 550,
              background: "rgba(15,41,66,0.05)",
              border: "1px solid rgba(15,41,66,0.08)",
              borderRadius: "1.6rem",
              padding: "0.55rem",
            }}
          >
          <div
            className="relative overflow-hidden w-full"
            style={{
              minHeight: 400,
              borderRadius: "calc(1.6rem - 0.55rem)",
              boxShadow: "inset 0 1px 1px rgba(255,255,255,0.4)",
              backgroundImage: "url('/ba95.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Scrim: gleichmäßig 75% dunkel */}
            <div className="absolute inset-0" style={{ background: "rgba(8,12,20,0.34)" }} />

            <figure className="relative flex flex-col items-center justify-center text-center p-7 md:p-10" style={{ minHeight: 400 }}>
              <p className="text-xl md:text-2xl font-bold leading-snug text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]">
                Viel Aufwand. <span style={{ color: "#e53e3e" }}>Kein Fortschritt.</span>
              </p>
              <p className="mt-4 max-w-[360px] text-sm md:text-base leading-relaxed text-white/85 drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)]">
                Ohne klare Struktur drehen sich Teams im Kreis: Tools werden ausprobiert, wieder verworfen und am Ende bleibt alles beim Alten.
              </p>
            </figure>
          </div>
          </div>

        </div>
      </div>
    </section>
  );
}
