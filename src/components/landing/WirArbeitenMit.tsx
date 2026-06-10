export function WirArbeitenMit() {
  const tools = [
    { name: "Claude / Claude Code", icon: "https://cdn.simpleicons.org/claude", alt: "Claude" },
    { name: "ChatGPT / Codex", icon: "https://cdn.simpleicons.org/openai", alt: "OpenAI" },
    { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini", alt: "Gemini" },
    { name: "Copilot", icon: "https://cdn.simpleicons.org/githubcopilot/000000", alt: "Copilot" },
    { name: "Lovable", icon: "https://cdn.simpleicons.org/lovable", alt: "Lovable" },
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
        {/* Orange dot */}
        <div
          style={{
            width: 12,
            height: 12,
            background: "#ff4f00",
            borderRadius: 2,
            marginBottom: 22,
          }}
        />

        <h2
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 400,
            fontSize: 32,
            letterSpacing: "-0.01em",
            color: "#1c1a17",
            marginBottom: 14,
          }}
        >
          Lorem ipsum dolor
        </h2>

        <p
          style={{
            fontSize: 15.5,
            lineHeight: 1.6,
            color: "#2e2b26",
            marginBottom: 28,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
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
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1.5px solid #ff4f00",
                borderRadius: 7,
                padding: "7px 12px",
                fontSize: 13.5,
                fontWeight: 600,
                color: "#1c1a17",
                marginBottom: 14,
              }}
            >
              <svg
                width={15}
                height={15}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff4f00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Wir arbeiten mit
            </div>

            {/* Tool rows */}
            {tools.map((tool, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                  padding: "9px 8px",
                  fontSize: 13,
                  color: "#2e2b26",
                  borderRadius: 6,
                  background: i === 0 ? "#f2f0fa" : "transparent",
                }}
              >
                <span>{tool.name}</span>
                <img src={tool.icon} alt={tool.alt} width={16} height={16} style={{ display: "block", flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
