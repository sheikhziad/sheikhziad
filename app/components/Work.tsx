// ─────────────────────────────────────────────────────────────
// Work.tsx — the selected projects section.
//
// 📚 Beginner notes:
//  • We `import` a child component (ProjectMockup) and use it like
//    a custom HTML tag: <ProjectMockup variant={...} />.
//  • Each project is rendered as a "row" alternating image-left /
//    image-right with `md:flex-row-reverse` on every other card.
//    (`index % 2` toggles even/odd.)
// ─────────────────────────────────────────────────────────────

import ProjectMockup from './ProjectMockup';

const projects = [
  {
    id: 'poc',
    variant: 'poc' as const,
    accent: '#00f0ff',
    eyebrow: 'Solo POC → enterprise pipeline',
    title: 'Pioneered FlutterFlow inside an enterprise consultancy',
    body:
      "Built the consultancy's first FlutterFlow proof-of-concept almost single-handedly for a major financial-services client. The POC's success opened the door to multiple enterprise FlutterFlow contracts on that account — and I went on to mentor juniors as the practice scaled internally.",
    role: 'Niveus · 2022–24',
    stack: 'FlutterFlow · Firebase · POC delivery',
  },
  {
    id: 'fintech',
    variant: 'fintech' as const,
    accent: '#caff33',
    eyebrow: '5M+ users · enterprise fintech',
    title: 'Fortune 500 financial services app',
    body:
      'Contributed to frontend implementation on a financial investment app reaching 5M+ users. Worked alongside enterprise backend teams integrating secured client APIs under tight delivery schedules.',
    role: 'Niveus · 2022–24',
    stack: 'Flutter · FlutterFlow',
  },
  {
    id: 'dating',
    variant: 'dating' as const,
    accent: '#ff2bd6',
    eyebrow: 'US-based · AI-powered',
    title: 'Where strangers become matches',
    body:
      'An AI-chatbot-driven onboarding and match-discovery platform. Built matching logic on Supabase edge functions; shipped the frontend in FlutterFlow.',
    role: 'Mobile App Developer · Jafton · 2024–25',
    stack: 'FlutterFlow · Supabase · Edge functions',
  },
  {
    id: 'recruitment',
    variant: 'recruitment' as const,
    accent: '#00f0ff',
    eyebrow: 'Dubai · verified-only hiring',
    title: 'Internship marketplace',
    body:
      'Real-time messaging, interview scheduling, application tracking, and the full hiring lifecycle for a verified-company internship platform.',
    role: 'Mobile App Developer · Jafton · 2024–25',
    stack: 'FlutterFlow · Firebase',
  },
  {
    id: 'marketplace',
    variant: 'marketplace' as const,
    accent: '#7c3aff',
    eyebrow: 'US trade · MVP delivery',
    title: 'Trade marketplace',
    body:
      'Frontend, MVP delivery, and stakeholder coordination for a US-based trading marketplace. Shipped from spec to launch.',
    role: 'Mobile App Developer · Jafton · 2024–25',
    stack: 'FlutterFlow · Supabase',
  },
  {
    id: 'ai-launch',
    variant: 'ai-launch' as const,
    accent: '#00f0ff',
    eyebrow: 'Stealth Singapore · founding role',
    title: 'AI-assisted startup launch workflows',
    body:
      'Built landing pages, branding, launch visuals, and demo workflows. Produced product demos in Remotion. Experimented with Hyperframes automation in Claude Code.',
    role: 'Founding Product Engineer · 2025–present',
    stack: 'Claude Code · Next.js · Remotion · Figma',
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative min-h-screen px-6 md:px-16 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs md:text-sm text-neon-magenta uppercase tracking-[0.3em] mb-8">
          Selected work
        </p>
        <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1] tracking-tightest text-ink-900 mb-20 max-w-3xl text-balance">
          Apps I've shipped — from solo agency to enterprise.
        </h2>

        <div className="space-y-32">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className={`flex flex-col gap-10 md:gap-16 ${
                i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } md:items-center`}
            >
              <div className="md:w-1/2">
                <ProjectMockup variant={p.variant} accent={p.accent} />
              </div>
              <div className="md:w-1/2 max-w-xl">
                <p
                  className="font-mono text-xs uppercase tracking-[0.25em] mb-4"
                  style={{ color: p.accent }}
                >
                  {p.eyebrow}
                </p>
                <h3 className="font-display text-3xl md:text-5xl text-ink-900 tracking-tight leading-[1.05] mb-5 text-balance">
                  {p.title}
                </h3>
                <p className="text-ink-700 text-pretty leading-relaxed mb-6">
                  {p.body}
                </p>
                <div className="flex flex-col gap-1.5 text-xs md:text-sm font-mono text-ink-600">
                  <span>{p.role}</span>
                  <span className="text-ink-700">{p.stack}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
