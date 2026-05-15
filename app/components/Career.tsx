// ─────────────────────────────────────────────────────────────
// Career.tsx — career & experience timeline (between Work and
// Recommendations in the scroll).
//
// 📚 Beginner notes:
//  • Same shape as the other sections: data array on top, JSX
//    that maps over it to render rows.
//  • The "spine" is just a thin vertical line inside each row.
//    Because consecutive rows share their bottom-padding with the
//    spine, the lines visually connect across the whole list.
//  • The big year number uses our `font-display` (Instrument Serif)
//    so it has the editorial, magazine-y feel.
// ─────────────────────────────────────────────────────────────

const roles = [
  {
    lead: 'Now',
    sub: 'Since Dec 2025',
    title: 'Founding Product Engineer',
    org: 'Stealth Startup · Singapore',
    body:
      'AI-assisted landing pages, frontend systems, and brand identity for an early-stage product. Claude Code + Next.js + Remotion.',
  },
  {
    lead: '3 mos',
    sub: 'Nov 2025 → Jan 2026 · Project-based',
    title: 'Technical Project Consultant',
    org: 'RapidDev · Boston',
    body:
      'Concurrent with Stealth. Shipped reusable low-code templates and rapid MVPs consumed by startup teams and the wider community.',
  },
  {
    lead: '2 yrs',
    sub: 'Jan 2024 → Dec 2025',
    title: 'Mobile App Developer',
    org: 'Jafton · US · Remote',
    body:
      'Led end-to-end delivery of cross-platform apps for US clients across marketplace, dating, recruitment, and fintech. 100% on-time delivery.',
  },
  {
    lead: '1.5 yrs',
    sub: 'Sep 2022 → Feb 2024',
    title: 'Cloud Explorer → Cloud Associate & Team Lead',
    org: 'Niveus · Mangalore',
    body:
      'Started as Cloud Explorer; promoted to Cloud Associate after 6 months. Pioneered FlutterFlow at the consultancy, mentored juniors, and contributed to apps reaching 5M+ users. Star of the Month ×2.',
  },
];

const peach = '#ff8855';

export default function Career() {
  return (
    <section
      id="career"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        <p
          className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-8"
          style={{ color: peach }}
        >
          Career &amp; experience
        </p>
        <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1] tracking-tightest text-ink-900 mb-16 max-w-4xl text-balance">
          Shipped at every scale —{' '}
          <span className="text-ink-700 italic">solo agency to enterprise.</span>
        </h2>

        {/* Timeline */}
        <div>
          {roles.map((r, i) => (
            <div
              key={i}
              className="flex gap-5 md:gap-10 items-stretch pb-12 md:pb-20 last:pb-0"
            >
              {/* Duration column — leads with tenure, not start year,
                  so the eye reads stickiness instead of job-hops. */}
              <div className="w-20 md:w-40 text-right shrink-0 pt-1">
                <p
                  className={`font-display tracking-tightest leading-none ${
                    r.lead === 'Now'
                      ? 'text-3xl md:text-5xl italic'
                      : 'text-3xl md:text-5xl'
                  }`}
                  style={{
                    color: r.lead === 'Now' ? peach : 'rgba(141,151,171,0.8)',
                  }}
                >
                  {r.lead}
                </p>
                <p className="font-mono text-[10px] md:text-xs text-ink-600 mt-1.5 md:mt-2.5 leading-snug">
                  {r.sub}
                </p>
              </div>

              {/* Spine column with dot at the top of each row */}
              <div className="relative w-2 shrink-0">
                <div
                  className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                  style={{
                    background:
                      i === roles.length - 1
                        ? `linear-gradient(to bottom, ${peach}55, transparent)`
                        : `${peach}55`,
                  }}
                />
                <div
                  className="absolute left-1/2 top-2.5 w-2.5 h-2.5 rounded-full -translate-x-1/2"
                  style={{
                    background: peach,
                    boxShadow: `0 0 14px ${peach}aa`,
                  }}
                />
              </div>

              {/* Content column */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-xl md:text-3xl text-ink-900 tracking-tight leading-tight">
                  {r.title}
                </h3>
                <p
                  className="font-mono text-[10px] md:text-xs uppercase tracking-widest mt-1.5 md:mt-2 mb-3 md:mb-4"
                  style={{ color: `${peach}cc` }}
                >
                  {r.org}
                </p>
                <p className="text-ink-700 text-pretty leading-relaxed text-sm md:text-base max-w-2xl">
                  {r.body}
                </p>
              </div>
            </div>
          ))}

          {/* Terminator: a faint pulsing dot at the very bottom of the spine */}
          <div className="flex gap-5 md:gap-10 -mt-6 md:-mt-12">
            <div className="w-20 md:w-40 shrink-0" />
            <div className="relative w-2 shrink-0 flex justify-center">
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: `${peach}66` }}
              />
            </div>
            <div className="flex-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
