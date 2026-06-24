import React from "react";
import { Check, FileText, TrendingUp, Users, MessageSquare, BookOpen, Megaphone } from "lucide-react";

type Tool = { name: string; icon: () => JSX.Element };
type Bullet = { text: string; tool?: Tool; tools?: Tool[] };

const WordIcon = () => (
  <img src="https://img.icons8.com/color/16/microsoft-word-2019.png" alt="Word" style={{ width: 15, height: 15 }} />
);
const ExcelIcon = () => (
  <img src="https://img.icons8.com/color/16/microsoft-excel-2019.png" alt="Excel" style={{ width: 15, height: 15 }} />
);
const LinkedInIcon = () => (
  <img src="https://img.icons8.com/color/16/linkedin.png" alt="LinkedIn" style={{ width: 15, height: 15 }} />
);
const FacebookIcon = () => (
  <img src="https://img.icons8.com/color/16/facebook-new.png" alt="Facebook" style={{ width: 15, height: 15 }} />
);
const TikTokIcon = () => (
  <img src="https://img.icons8.com/color/16/tiktok.png" alt="TikTok" style={{ width: 15, height: 15 }} />
);
const InstagramIcon = () => (
  <img src="https://img.icons8.com/color/16/instagram-new.png" alt="Instagram" style={{ width: 15, height: 15 }} />
);

const TeamsIcon = () => (
  <img src="https://img.icons8.com/color/16/microsoft-teams.png" alt="Teams" style={{ width: 15, height: 15 }} />
);
const ZoomIcon = () => (
  <img src="https://img.icons8.com/color/16/zoom.png" alt="Zoom" style={{ width: 15, height: 15 }} />
);
const OutlookIcon = () => (
  <img src="https://img.icons8.com/color/16/microsoft-outlook-2019.png" alt="Outlook" style={{ width: 15, height: 15 }} />
);
const GmailIcon = () => (
  <img src="https://img.icons8.com/color/16/gmail.png" alt="Gmail" style={{ width: 15, height: 15 }} />
);
const PdfIcon = () => (
  <img src="https://img.icons8.com/color/16/pdf.png" alt="PDF" style={{ width: 15, height: 15 }} />
);
const MailchimpIcon = () => (
  <svg viewBox="0 0 20 20" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" rx="4" fill="#FFE01B"/>
    <path d="M3 6.5h14v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-8z" fill="#fff" stroke="#1a1a1a" strokeWidth="1.2"/>
    <path d="M3 6.5l7 5 7-5" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
const GoogleAdsIcon = () => (
  <img src="https://img.icons8.com/color/16/google-ads.png" alt="Google Ads" style={{ width: 15, height: 15 }} />
);

const WORD: Tool       = { name: "Word",       icon: WordIcon };
const EXCEL: Tool      = { name: "Excel",      icon: ExcelIcon };
const LINKEDIN: Tool   = { name: "LinkedIn",   icon: LinkedInIcon };
const FACEBOOK: Tool   = { name: "Facebook",   icon: FacebookIcon };
const TIKTOK: Tool     = { name: "TikTok",     icon: TikTokIcon };
const INSTAGRAM: Tool  = { name: "Instagram",  icon: InstagramIcon };
const TEAMS: Tool      = { name: "Teams",      icon: TeamsIcon };
const ZOOM: Tool       = { name: "Zoom",       icon: ZoomIcon };
const OUTLOOK: Tool    = { name: "Outlook",    icon: OutlookIcon };
const GMAIL: Tool      = { name: "Gmail",      icon: GmailIcon };
const PDF: Tool        = { name: "PDF",        icon: PdfIcon };
const MAILCHIMP: Tool  = { name: "Mailchimp",  icon: MailchimpIcon };
const GOOGLEADS: Tool  = { name: "Google Ads", icon: GoogleAdsIcon };

const cases: { icon: React.ElementType; imgSrc?: string; iconSize?: number; title: string; bullets: Bullet[] }[] = [
  {
    icon: FileText,
    imgSrc: "/ewa/icon-verwaltung.png",
    title: "Verwaltung & Organisation",
    bullets: [
      { text: "Word Dokumente strukturieren", tool: WORD },
      { text: "Excel Inhalte schneller auswerten", tool: EXCEL },
      { text: "Meetings zusammenfassen", tools: [TEAMS, ZOOM] },
      { text: "Informationen schneller aufbereiten" },
    ] as Bullet[],
  },
  {
    icon: TrendingUp,
    imgSrc: "/ewa/icon-vertrieb.png",
    title: "Vertrieb & Angebote",
    bullets: [
      { text: "Kundenantworten formulieren", tools: [OUTLOOK, GMAIL] },
      { text: "Follow-Ups schreiben", tools: [OUTLOOK, GMAIL] },
      { text: "Angebote vorbereiten" },
      { text: "Wiederkehrende Kommunikation vereinfachen" },
    ] as Bullet[],
  },
  {
    icon: Users,
    imgSrc: "/ewa/icon-recruiting.png",
    title: "Recruiting & Bewerbergewinnung",
    bullets: [
      { text: "Social Recruiting", tools: [TIKTOK, INSTAGRAM, FACEBOOK, LINKEDIN] },
      { text: "Stellenanzeigen schneller erstellen" },
      { text: "Bewerberkommunikation vereinfachen" },
      { text: "Sichtbarkeit für offene Stellen aufbauen" },
    ] as Bullet[],
  },
  {
    icon: MessageSquare,
    imgSrc: "/ewa/icon-meetings.png",
    title: "Meetings, Recherche & Wissenssuche",
    bullets: [
      { text: "Meetings automatisch zusammenfassen", tools: [TEAMS, ZOOM] },
      { text: "PDFs und Dokumente einfacher verstehen", tool: PDF },
      { text: "Informationen schneller finden" },
      { text: "Recherche deutlich beschleunigen" },
    ] as Bullet[],
  },
  {
    icon: BookOpen,
    imgSrc: "/ewa/icon-einarbeitung.png",
    title: "Einarbeitung & internes Wissen",
    bullets: [
      { text: "Neue Mitarbeiter schneller einarbeiten" },
      { text: "Wiederkehrende Fragen dokumentieren" },
      { text: "Prozesse verständlicher festhalten" },
      { text: "Wissen langfristig sichern" },
    ] as Bullet[],
  },
  {
    icon: Megaphone,
    imgSrc: "/ewa/icon-marketing.png",
    title: "Marketing & Sichtbarkeit",
    bullets: [
      { text: "Social Media Inhalte erstellen", tools: [LINKEDIN, FACEBOOK, TIKTOK, INSTAGRAM] },
      { text: "Newsletter schneller schreiben", tool: MAILCHIMP },
      { text: "Kampagnenideen entwickeln", tool: GOOGLEADS },
      { text: "Texte für Anzeigen formulieren" },
    ] as Bullet[],
  },
];

export function UseCases() {
  return (
    <section style={{ background: "#f7f8fa" }} className="py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-semibold leading-[1.1] tracking-[-0.02em] text-ink whitespace-nowrap" style={{ fontSize: "2.8rem" }}>
            So wird KI im Unternehmen praktisch genutzt
          </h2>
          <p className="mt-4 text-[0.9rem] md:text-base leading-relaxed text-ink-muted">
            Keine theoretischen KI Konzepte. Reale Anwendungen die in Ihrem Unternehmen täglich Zeit sparen können.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="flex flex-col rounded-xl border border-border bg-white p-6"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  {c.imgSrc ? (
                    <img src={c.imgSrc} alt="" style={{ width: c.iconSize ?? 36, height: c.iconSize ?? 36, flexShrink: 0 }} />
                  ) : (
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                  )}
                  <span className="text-[0.95rem] font-bold text-ink leading-tight">{c.title}</span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 border-t border-border pt-5">
                  {c.bullets.map((b) => (
                    <li key={b.text} className="flex items-center gap-2.5 text-sm text-ink-muted">
                      {b.tools ? (
                        <span style={{ display: "flex", gap: 3, flexShrink: 0 }}>
                          {b.tools.map((t) => <t.icon key={t.name} />)}
                        </span>
                      ) : b.tool ? (
                        <span style={{ flexShrink: 0, display: "flex" }}><b.tool.icon /></span>
                      ) : (
                        <Check size={13} className="text-brand shrink-0" strokeWidth={2.5} />
                      )}
                      {b.text}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
