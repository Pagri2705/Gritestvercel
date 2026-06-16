export function EigeneBildSektion() {
  return (
    <section
      style={{
        background: "#f5f0e8",
        color: "#1a1a1a",
        fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "72px 48px",
        }}
      >
        {/* Eyebrow centered over whole section */}
        <p
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "oklch(0.432 0.195 258)",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          Was sich verändert hat
        </p>

        {/* Hero: text left, image right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
            marginBottom: 72,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2
              style={{
                fontSize: 42,
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#111",
              }}
            >
              Was sich bei unseren Kunden verändert hat
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#3d3830" }}>
              Selbstverständlich fragt sich jeder Unternehmer, was wird das meinem Unternehmen bringen und wie sieht
              diese Veränderung aus.
              <br />
              Das hier sind die am stärksten spürbaren Faktoren.
            </p>
          </div>

          <div
            style={{
              width: "100%",
              aspectRatio: "3 / 2",
              borderRadius: 4,
              overflow: "hidden",
              background: "#ddd8ce",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 600,
              color: "#9a9590",
              letterSpacing: ".04em",
            }}
          >
            <img src="/ewa/veraenderung.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>

        {/* Feature grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px 60px",
          }}
        >
          {[
            { title: "Weniger Zögern, mehr Machen", text: "Aufgaben, bei denen früher erst lange überlegt wurde, werden heute direkt mit KI angegangen, ohne Hemmschwelle und ohne Rückfrage beim Chef." },
            { title: "Zeit für das Wesentliche", text: "Routinearbeit wie Texte, Zusammenfassungen und Vorlagen läuft in Minuten statt Stunden. Die gewonnene Zeit fließt zurück ins Kerngeschäft." },
            { title: "Wissen bleibt im Team", text: "Statt dass nur einer „der KI-Typ“ ist, arbeiten alle mit. Das Wissen verteilt sich und bleibt auch, wenn jemand das Unternehmen verlässt." },
            { title: "Sicherheit im Umgang mit Daten", text: "Mitarbeiter wissen heute genau, welche Informationen in ein KI-Tool dürfen und welche nicht. Der Umgang ist bewusst statt riskant." },
            { title: "Eigenständig statt abhängig", text: "Neue Tools werden selbst getestet und eingeführt, ohne dass jedes Mal externe Beratung nötig ist. Das Team kommt allein weiter." },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: "#111",
                  lineHeight: 1.2,
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "#3d3830" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
