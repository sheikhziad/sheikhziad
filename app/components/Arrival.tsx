// ─────────────────────────────────────────────────────────────
// Arrival.tsx — the hero section (first thing you see).
//
// 📚 Beginner notes:
//  • This is a "Server Component" by default — no `'use client'`
//    at the top. It renders to plain HTML on the server, which is
//    faster and better for SEO.
//  • A component is just a function that returns JSX. JSX looks
//    like HTML but is JavaScript — `className` instead of `class`,
//    `{expressions}` to inject values.
//  • Tailwind utility classes (e.g. `text-7xl`, `tracking-tightest`)
//    style the element directly. No separate CSS file needed.
// ─────────────────────────────────────────────────────────────

export default function Arrival() {
  return (
    <section
      id="arrival"
      className="relative min-h-screen flex flex-col justify-between px-6 md:px-16 pt-10 pb-12"
    >
      {/* Top bar: location ticker */}
      <div className="flex items-center justify-between text-xs md:text-sm font-mono text-ink-600 uppercase tracking-widest">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
          Working globally
        </span>
        <span className="hidden md:block">Sheikh Ziad Ahmed · 2026</span>
      </div>

      {/* Center: big statement */}
      <div className="max-w-5xl">
        <p className="font-mono text-xs md:text-sm text-neon-cyan uppercase tracking-[0.3em] mb-6 md:mb-10">
          Founding Engineer · Project Lead · Customer-facing builder
        </p>
        <h1 className="font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-tightest text-ink-900 text-balance">
          I build apps.
          <br />
          I lead delivery.
          <br />
          <span className="glow-cyan text-neon-cyan italic">
            I make teams ship.
          </span>
        </h1>
        <p className="mt-8 md:mt-12 max-w-2xl text-base md:text-xl text-ink-700 text-pretty leading-relaxed">
          3+ years across solo agencies to enterprise. 5M+ users reached.
          Currently a Founding Product Engineer (Singapore) and Technical
          Project Consultant (Boston). Open to the next level —{' '}
          <span className="text-ink-900">
            founding engineer, technical PM, or customer-success roles
          </span>
          .
        </p>
      </div>

      {/* Bottom: scroll cue + status */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm font-mono text-ink-600">
          <span>
            <span className="text-ink-900">5M+</span> users reached
          </span>
          <span>
            <span className="text-ink-900">Top 1%</span> FlutterFlow 2024
          </span>
          <span>
            <span className="text-ink-900">100%</span> delivery @ Jafton
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs md:text-sm font-mono text-ink-600 uppercase tracking-widest">
          <span>Scroll</span>
          <span className="w-12 h-px bg-neon-cyan/40" />
        </div>
      </div>
    </section>
  );
}
