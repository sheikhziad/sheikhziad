// ─────────────────────────────────────────────────────────────
// ProjectMockup.tsx — a procedurally-drawn "phone screen" mockup.
//
// 📚 Beginner notes:
//  • This is a "presentational" component: takes `variant` as a
//    prop and returns SVG/HTML based on it. Pure function in,
//    JSX out, no state.
//  • Props are how a parent passes data into a child. The TS type
//    `Props` below tells the editor exactly what `variant` can be.
//  • Once you have a real screenshot, replace the SVG body with
//    `<Image src="..." />` — the wrapper stays the same.
// ─────────────────────────────────────────────────────────────

type Variant = 'fintech' | 'dating' | 'recruitment' | 'marketplace' | 'ai-launch' | 'poc';

type Props = {
  variant: Variant;
  accent: string;
};

export default function ProjectMockup({ variant, accent }: Props) {
  return (
    <div className="relative aspect-[9/19] w-full max-w-[280px] mx-auto">
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[2.2rem] bg-ink-200 border border-ink-400/40 shadow-[0_30px_80px_-20px_rgba(0,240,255,0.15)]" />
      <div className="absolute inset-[6px] rounded-[1.9rem] bg-ink-100 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-ink-200 rounded-full z-10" />
        {/* Status bar */}
        <div className="absolute top-2 left-4 right-4 flex items-center justify-between text-[8px] font-mono text-ink-700 z-10">
          <span>9:41</span>
          <span>•••</span>
        </div>
        {/* Screen body */}
        <div className="absolute inset-0 pt-8 px-3 flex flex-col gap-2">
          {renderScreen(variant, accent)}
        </div>
      </div>
    </div>
  );
}

function renderScreen(variant: Variant, accent: string) {
  switch (variant) {
    case 'fintech':
      return (
        <>
          <div className="text-[9px] font-mono text-ink-700 uppercase tracking-wider">Portfolio</div>
          <div className="text-2xl font-display text-ink-900">$1.2M</div>
          <div className="text-[8px]" style={{ color: accent }}>+18.4%  past year</div>
          <div className="mt-2 h-20 relative">
            <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
              <path
                d="M0,30 L10,28 L20,32 L30,22 L40,25 L50,15 L60,18 L70,10 L80,12 L90,5 L100,8"
                fill="none"
                stroke={accent}
                strokeWidth="1.2"
              />
              <path
                d="M0,30 L10,28 L20,32 L30,22 L40,25 L50,15 L60,18 L70,10 L80,12 L90,5 L100,8 L100,40 L0,40 Z"
                fill={accent}
                opacity="0.12"
              />
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-1.5 mt-2">
            {['ABC', 'XYZ', 'DEF', 'PQR'].map((s) => (
              <div key={s} className="bg-ink-200 rounded p-1.5 text-[8px] font-mono">
                <div className="text-ink-900">{s}</div>
                <div style={{ color: accent }}>+2.4%</div>
              </div>
            ))}
          </div>
        </>
      );
    case 'dating':
      return (
        <>
          <div className="flex justify-between items-center">
            <div className="text-[9px] font-mono text-ink-700">Match</div>
            <div className="w-5 h-5 rounded-full" style={{ background: accent, opacity: 0.7 }} />
          </div>
          <div className="flex-1 mt-2 relative rounded-xl overflow-hidden bg-gradient-to-br from-ink-300 to-ink-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full opacity-30" style={{ background: accent }} />
            </div>
            <div className="absolute bottom-2 left-2 right-2">
              <div className="text-[10px] font-display text-ink-900">Alex, 27</div>
              <div className="text-[7px] text-ink-700">Loves quiet mornings</div>
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-2">
            <div className="w-7 h-7 rounded-full bg-ink-300" />
            <div className="w-9 h-9 rounded-full" style={{ background: accent }} />
            <div className="w-7 h-7 rounded-full bg-ink-300" />
          </div>
        </>
      );
    case 'recruitment':
      return (
        <>
          <div className="text-[9px] font-mono text-ink-700 uppercase tracking-wider">Internships</div>
          <div className="text-[11px] font-display text-ink-900">Dubai · 142 open</div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-ink-200 rounded p-2 mt-1">
              <div className="flex justify-between items-center">
                <div className="text-[8px] text-ink-900">Verified company {i}</div>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
              </div>
              <div className="text-[7px] text-ink-700 mt-0.5">Product · 3 mo · Hybrid</div>
            </div>
          ))}
          <div className="mt-auto py-1.5 rounded text-center text-[8px] font-mono" style={{ background: accent, color: '#000' }}>
            Apply now
          </div>
        </>
      );
    case 'marketplace':
      return (
        <>
          <div className="text-[9px] font-mono text-ink-700 uppercase tracking-wider">Trade</div>
          <div className="text-[11px] font-display text-ink-900">Live listings</div>
          <div className="grid grid-cols-2 gap-1.5 mt-1 flex-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-ink-200 rounded p-1.5">
                <div className="aspect-square rounded mb-1" style={{ background: i % 2 ? accent : '#262b3a', opacity: 0.6 }} />
                <div className="text-[7px] text-ink-900">Item {i}</div>
                <div className="text-[7px] font-mono" style={{ color: accent }}>${(i * 42).toFixed(0)}</div>
              </div>
            ))}
          </div>
        </>
      );
    case 'ai-launch':
      return (
        <>
          <div className="text-[9px] font-mono text-ink-700 uppercase tracking-wider">Studio</div>
          <div className="text-[11px] font-display text-ink-900">Brand kit</div>
          <div className="flex gap-1 mt-1">
            {[accent, '#7c3aff', '#ff2bd6', '#caff33'].map((c, i) => (
              <div key={i} className="flex-1 aspect-square rounded" style={{ background: c, opacity: 0.7 }} />
            ))}
          </div>
          <div className="bg-ink-200 rounded p-2 mt-2 text-[8px]">
            <div className="text-ink-900">Generating logo…</div>
            <div className="mt-1 h-1 rounded-full bg-ink-300 overflow-hidden">
              <div className="h-full w-2/3 rounded-full" style={{ background: accent }} />
            </div>
          </div>
          <div className="bg-ink-200 rounded p-2 mt-1 text-[8px]">
            <div className="text-ink-900">Demo video</div>
            <div className="text-[7px] text-ink-700">Remotion · 0:42</div>
          </div>
        </>
      );
    case 'poc':
      return (
        <>
          <div className="text-[9px] font-mono text-ink-700 uppercase tracking-wider">Builder</div>
          <div className="text-[11px] font-display text-ink-900">New POC</div>
          <div className="flex gap-1 mt-1 mb-1">
            <div className="flex-1 h-1.5 rounded-full" style={{ background: accent }} />
            <div className="flex-1 h-1.5 rounded-full bg-ink-300" />
            <div className="flex-1 h-1.5 rounded-full bg-ink-300" />
          </div>
          {/* Drag-and-drop component blocks (low-code style) */}
          {[
            { w: 'w-full', label: 'Header' },
            { w: 'w-3/4', label: 'Card · Title' },
            { w: 'w-full', label: 'List · 3 items' },
            { w: 'w-1/2', label: 'Button' },
          ].map((b, i) => (
            <div
              key={i}
              className="bg-ink-200 rounded p-1.5 mt-1 flex items-center gap-1.5"
            >
              <div className="w-1 h-3 rounded-sm" style={{ background: accent, opacity: 0.7 }} />
              <div className={`${b.w} text-[7px] text-ink-700`}>{b.label}</div>
              <div className="ml-auto text-[7px] text-ink-600 font-mono">≡</div>
            </div>
          ))}
          <div
            className="mt-auto py-1.5 rounded text-center text-[8px] font-mono"
            style={{ background: accent, color: '#000' }}
          >
            Deploy
          </div>
        </>
      );
  }
}
