export function WirArbeitenMit() {
  const tools = [
    { name: "Claude / Claude Code", icon: "https://cdn.simpleicons.org/claude", alt: "Claude" },
    { name: "ChatGPT / Codex", icon: "https://cdn.oaistatic.com/assets/favicon-o20kmmos.svg", alt: "ChatGPT" },
    { name: "Gemini", icon: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg", alt: "Gemini" },
    { name: "Copilot", icon: "https://copilot.microsoft.com/favicon.ico", alt: "Copilot" },
    { name: "Lovable", icon: "https://lovable.dev/favicon.ico", alt: "Lovable" },
    { name: "n8n", icon: "https://cdn.simpleicons.org/n8n", alt: "n8n" },
    { name: "Make", icon: "https://cdn.simpleicons.org/make", alt: "Make" },
  ];

  return (
    <section
      style={{
        background: "#fffdf9",
        display: "flex",
        justifyContent: "center",
        padding: "60px 20px",
        fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 470,
          background: "#f7f3ec",
          padding: "36px 32px 40px",
        }}
      >
        <h2
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 400,
            fontSize: 27,
            letterSpacing: "-0.01em",
            color: "#1c1a17",
            marginBottom: 14,
            textAlign: "center",
          }}
        >
          Mit welchen KI-Tools arbeiten<br />wir
        </h2>

        <p
          lang="de"
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "#2e2b26",
            marginBottom: 28,
            maxWidth: 350,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "justify",
            hyphens: "auto",
          }}
        >
          Es gibt hunderte KI-Tools, und täglich kommen neue dazu. Wir setzen bewusst auf die wenigen, die sich als
          Goldstandard etabliert haben: ausgereift, zuverlässig und in der Praxis bewährt. Genau diese zeigen wir
          Ihrem Team.
        </p>

        {/* Gradient panel */}
        <div
          style={{
            borderRadius: 10,
            overflow: "hidden",
            background:
              "radial-gradient(120% 90% at 85% 10%, rgba(120,140,170,.55) 0%, rgba(120,140,170,0) 55%), radial-gradient(120% 100% at 15% 90%, rgba(225,120,60,.45) 0%, rgba(225,120,60,0) 60%), linear-gradient(150deg, #b3a89c 0%, #a39a92 45%, #8f8c92 100%)",
            padding: "72px 26px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Tool card */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              maxWidth: 340,
              background: "#fdfcfa",
              borderRadius: 8,
              boxShadow: "0 18px 45px rgba(40,35,30,.28), 0 3px 10px rgba(40,35,30,.15)",
              padding: "18px 16px 14px",
            }}
          >
            {/* Badge text */}
            <div
              style={{
                textAlign: "center",
                fontSize: 17.5,
                fontWeight: 600,
                color: "#1c1a17",
                marginBottom: 14,
              }}
            >
              Wir arbeiten mit
            </div>

            {/* Tool rows */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 10,
              }}
            >
              {tools.map((tool, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    padding: "16px 8px",
                    fontSize: 12.5,
                    color: "#2e2b26",
                    borderRadius: 8,
                    background: "#f2f0fa",
                    textAlign: "center",
                    gridColumn: i === tools.length - 1 && tools.length % 2 === 1 ? "1 / -1" : undefined,
                  }}
                >
                  <img src={tool.icon} alt={tool.alt} width={28} height={28} style={{ display: "block", flexShrink: 0 }} />
                  <span style={{ lineHeight: 1.3 }}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
