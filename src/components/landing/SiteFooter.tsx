export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-surface-dark px-6 pt-16 text-on-dark md:px-10 md:pt-[72px]">
      <div className="flex flex-wrap items-end justify-between gap-8 border-b border-white/10 pb-12 md:pb-14">
        <h3 className="max-w-[640px] font-display text-[1.75rem] font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">
          Bereit für KI, die im Team <span style={{ color: "#8fb3ff" }}>wirklich genutzt wird?</span>
        </h3>
        <a
          href="#kontakt"
          className="inline-flex h-12 items-center bg-white px-6 text-[0.95rem] font-semibold text-surface-dark transition-colors hover:bg-[#fdf8f2]"
        >
          Kostenloses Erstgespräch →
        </a>
      </div>

      <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 text-[1.05rem] font-bold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-[7px] bg-brand text-[0.85rem] text-white">V</span>
            Ventar
          </div>
          <p className="mt-3.5 max-w-[240px] text-sm leading-[1.55] text-on-dark-muted">
            KI-Einführung für den Mittelstand. Verständlich, praxisnah, begleitet.
          </p>
        </div>
        <nav className="flex flex-col gap-2.5 text-sm text-on-dark-muted">
          <span className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-white">Seite</span>
          <a href="#process" className="transition-colors hover:text-white">Ablauf</a>
          <a href="#outcomes" className="transition-colors hover:text-white">Ergebnisse</a>
          <a href="#pricing" className="transition-colors hover:text-white">Preise</a>
          <a href="#faq" className="transition-colors hover:text-white">FAQ</a>
        </nav>
        <nav className="flex flex-col gap-2.5 text-sm text-on-dark-muted">
          <span className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-white">Rechtliches</span>
          <a href="#" className="transition-colors hover:text-white">Impressum</a>
          <a href="#" className="transition-colors hover:text-white">Datenschutz</a>
        </nav>
      </div>

      <div className="pb-7 text-xs text-on-dark-muted">
        © {new Date().getFullYear()} Ventar. Alle Rechte vorbehalten.
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none whitespace-nowrap text-center font-display font-extrabold"
        style={{
          fontSize: "clamp(90px, 19vw, 280px)",
          lineHeight: 0.78,
          letterSpacing: "-0.05em",
          marginBottom: "-0.09em",
          background: "linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0) 85%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Ventar
      </div>
    </footer>
  );
}
