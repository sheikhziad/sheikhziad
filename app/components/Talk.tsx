// ─────────────────────────────────────────────────────────────
// Talk.tsx — the contact / "talk to me" section.
//
// 📚 Beginner notes:
//  • `<a href="mailto:...">` opens the user's mail client — no JS
//    needed.
//  • `target="_blank" rel="noopener noreferrer"` opens external
//    links in a new tab safely. `rel="noopener"` prevents the new
//    page from accessing the originating window's `window.opener`.
// ─────────────────────────────────────────────────────────────

const links = [
  { label: 'Email', href: 'mailto:sheikhziadwork@gmail.com', value: 'sheikhziadwork@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sheikh-ziad-ahmed-b3391319a/', value: 'sheikh-ziad-ahmed' },
  { label: 'GitHub', href: 'https://github.com/sheikhziad', value: 'sheikhziad' },
  // 📚 Resume is hosted externally (Google Drive view-only link) instead
  // of being checked into /public — keeps phone number / personal email
  // out of the public repo and git history. Replace the placeholder
  // below with your actual Drive / Notion / Dropbox share URL.
  { label: 'Resume', href: 'https://drive.google.com/REPLACE_WITH_YOUR_LINK', value: '2026 — View' },
];

export default function Talk() {
  return (
    <section
      id="talk"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-24"
    >
      <div className="max-w-5xl mx-auto w-full">
        <p className="font-mono text-xs md:text-sm text-neon-cyan uppercase tracking-[0.3em] mb-8">
          Talk
        </p>

        <h2 className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-tightest text-ink-900 mb-10 text-balance">
          Got a 0→1 idea?
          <br />
          <span className="text-ink-700 italic">I'm probably interested.</span>
        </h2>

        <p className="text-base md:text-xl text-ink-700 max-w-2xl text-pretty leading-relaxed mb-16">
          Looking for a founding engineer, technical PM, project lead, or
          customer-facing builder. Based in Mangalore — open across APAC,
          GCC, and remote worldwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink-300/40 border border-ink-300/40">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') || l.href.startsWith('/') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="bg-ink-50/80 p-6 md:p-8 group hover:bg-ink-100/80 transition-colors flex items-center justify-between"
            >
              <div>
                <div className="font-mono text-xs text-ink-600 uppercase tracking-widest mb-1">
                  {l.label}
                </div>
                <div className="font-display text-2xl md:text-3xl text-ink-900 tracking-tight">
                  {l.value}
                </div>
              </div>
              <span className="text-neon-cyan text-2xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          ))}
        </div>

        <footer className="mt-24 pt-8 border-t border-ink-300/40 flex flex-col md:flex-row md:justify-between gap-4 text-xs font-mono text-ink-600">
          <span>© Sheikh Ziad Ahmed · 2026</span>
          <span>
            Built with{' '}
            <a
              href="https://claude.com/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-700 hover:text-neon-cyan transition-colors"
            >
              Claude Code
            </a>{' '}
            · Next.js · Three.js · GSAP
          </span>
        </footer>
      </div>
    </section>
  );
}
