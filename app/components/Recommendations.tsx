// ─────────────────────────────────────────────────────────────
// Recommendations.tsx — quotes from managers/leads.
//
// 📚 Beginner notes:
//  • Real LinkedIn recommendations, condensed to one pull-quote
//    each. The `signal` field tags which kind of role each quote
//    is evidence for — a recruiter scanning for "PM" sees the PM
//    quote and stops.
//  • Notice the `dangerouslySetInnerHTML` is NOT used here. We
//    write quotes as plain strings — safer and React-idiomatic.
// ─────────────────────────────────────────────────────────────

const quotes = [
  {
    quote:
      "Just gets things done — resourceful, totally reliable, and always the first to jump in during a crunch. And just as important: he's genuinely nice and easy to get along with — the kind of teammate who makes the whole dynamic better.",
    person: 'Ivan Jivov',
    role: 'Project Manager · managed Sheikh directly',
    signal: 'Founding eng · TPM',
  },
  {
    quote:
      "From day one, it felt like he'd been with us much longer. His approach became the benchmark — clear enough that I asked him to lead a knowledge-sharing session so the rest of the team could learn from it.",
    person: 'Natallia Liashkevich',
    role: 'Product Manager · managed Sheikh directly',
    signal: 'Team lead · Management',
  },
  {
    quote:
      "Always gave 100% to every task. Reliable, proactive, and a great team player — someone you can count on.",
    person: 'Elmira Khamitova',
    role: 'Program Manager & Scrum Head · managed Sheikh directly',
    signal: 'Customer success · Ops',
  },
  {
    quote:
      "Clear communication and collaborative approach. Consistently offered valuable suggestions. Always up to date with the latest tech.",
    person: 'Aakash Patwa',
    role: 'Business Analyst, PSPO-I · same team',
    signal: 'PM · Customer-facing',
  },
];

export default function Recommendations() {
  return (
    <section
      id="recommendations"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-8" style={{ color: '#caff33' }}>
          From the people I worked with
        </p>
        <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1] tracking-tightest text-ink-900 mb-16 max-w-4xl text-balance">
          Don't take my word for it. Take theirs.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((q) => (
            <figure
              key={q.person}
              className="bg-ink-100/70 backdrop-blur-sm border border-ink-300/40 p-8 md:p-10 rounded-lg hover:border-neon-lime/40 transition-colors"
            >
              <span
                className="inline-block font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-full mb-6"
                style={{ background: 'rgba(202,255,51,0.1)', color: '#caff33' }}
              >
                {q.signal}
              </span>
              <blockquote className="font-display text-2xl md:text-3xl text-ink-900 leading-snug tracking-tight text-pretty mb-6">
                "{q.quote}"
              </blockquote>
              <figcaption className="font-mono text-xs text-ink-600 leading-relaxed">
                <div className="text-ink-900">— {q.person}</div>
                <div>{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-12 font-mono text-xs text-ink-600 text-center">
          Source:{' '}
          <a
            href="https://www.linkedin.com/in/sheikh-ziad-ahmed-b3391319a/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-700 hover:text-neon-cyan transition-colors underline underline-offset-4"
          >
            LinkedIn recommendations
          </a>
        </p>
      </div>
    </section>
  );
}
