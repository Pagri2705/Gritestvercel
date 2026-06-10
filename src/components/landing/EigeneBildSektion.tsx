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
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#6b6560",
              }}
            >
              Lorem ipsum dolor
            </p>
            <h2
              style={{
                fontSize: 42,
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#111",
              }}
            >
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#3d3830" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>

          <div
            style={{
              width: "100%",
              aspectRatio: "4 / 3",
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
            {/* FOTO: <img src="dein-foto.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
            — DEIN FOTO —
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
            { title: "Lorem ipsum dolor", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore." },
            { title: "Sed do eiusmod", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
            { title: "Ut enim ad minim", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint." },
            { title: "Quis nostrud exercitation", text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
            { title: "Duis aute irure", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore dolore." },
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
