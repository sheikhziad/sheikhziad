// ─────────────────────────────────────────────────────────────
// WhatIDo.tsx — the four-verbs section.
//
// 📚 Beginner notes:
//  • `verbs` is a plain array of objects holding the section data.
//    Keeping data separate from markup is a React best-practice —
//    we then `.map()` over it to render one card per item.
//  • The `key` prop on the mapped element helps React track which
//    item is which when the list changes. Always required when
//    rendering arrays.
// ─────────────────────────────────────────────────────────────

const verbs = [
  {
    label: 'Build',
    n: '01',
    body: 'Apps shipped across mobile, web, and MVP.',
    proof: 'Claude Code · Next.js · FlutterFlow · Supabase',
  },
  {
    label: 'Coordinate',
    n: '02',
    body: 'Sprints, QA, stakeholders, releases.',
    proof: '100% on-time delivery at Jafton',
  },
  {
    label: 'Support',
    n: '03',
    body: 'Products serving 5M+ users. Trusted by clients across 4 countries.',
    proof: 'Star of the Month ×2 at Niveus',
  },
  {
    label: 'Lead',
    n: '04',
    body: 'Mentored juniors. Led knowledge-sharing sessions.',
    proof: '“Grows the people around him.” — PM, 2025',
  },
];

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-24"
    >
      <div className="max-w-6xl">
        <p className="font-mono text-xs md:text-sm text-neon-violet uppercase tracking-[0.3em] mb-8">
          What I do
        </p>
        <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1] tracking-tightest text-ink-900 mb-16 max-w-3xl text-balance">
          Four verbs. Same person. Different lens for whoever's reading.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-300/40 border border-ink-300/40">
          {verbs.map((v) => (
            <div
              key={v.label}
              className="bg-ink-50/80 backdrop-blur-sm p-8 md:p-10 group hover:bg-ink-100/80 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-mono text-xs text-ink-600 tracking-widest">
                  {v.n}
                </span>
                <span className="w-2 h-2 rounded-full bg-neon-violet/60 group-hover:bg-neon-violet group-hover:scale-150 transition-all" />
              </div>
              <h3 className="font-display text-4xl md:text-5xl text-ink-900 tracking-tight mb-3">
                {v.label}.
              </h3>
              <p className="text-ink-700 text-pretty leading-relaxed mb-5">
                {v.body}
              </p>
              <p className="font-mono text-xs text-neon-violet/90 uppercase tracking-widest">
                {v.proof}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
