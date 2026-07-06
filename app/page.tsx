// ─────────────────────────────────────────────────────────────
// page.tsx — the home page of the site (route `/`).
//
// 📚 Next.js App Router 101:
//  • Every file named `page.tsx` inside `/app` is a route.
//    `/app/page.tsx`        →  /
//    `/app/about/page.tsx`  →  /about
//    `/app/blog/[slug]/page.tsx` → /blog/anything
//  • This file is a "Server Component" — rendered to HTML on the
//    server, sent down as plain markup. Fast and SEO-friendly.
//  • The 3D <Scene /> is the ONE piece that needs the browser, so
//    we lazy-load it via `next/dynamic` with `ssr: false`. That
//    skips it during server render entirely.
//  • Everything else (Arrival, WhatIDo, Work, Recommendations,
//    Talk) is plain HTML output. The page works even with JS
//    disabled — the 3D layer is enhancement, not the foundation.
// ─────────────────────────────────────────────────────────────

import Arrival from './components/Arrival';
import WhatIDo from './components/WhatIDo';
import Work from './components/Work';
import Career from './components/Career';
import Recommendations from './components/Recommendations';
import Talk from './components/Talk';
import SceneClient from './components/SceneClient';

// 📚 Why SceneClient (not dynamic() here)?
//   Next.js 15 forbids `dynamic({ ssr: false })` inside Server
//   Components. We isolated that into a tiny Client wrapper —
//   see SceneClient.tsx for the explanation.

export default function Home() {
  return (
    <main className="relative">
      {/* The 3D scene is `position: fixed` so it sits BEHIND every
          section as you scroll. Sections are transparent layers
          over the top. */}
      <SceneClient />

      {/* `relative z-10` puts content above the fixed Scene.
          `grain` adds a subtle film-grain overlay for texture. */}
      <div className="relative z-10 grain bg-[#05060a]/70">
        <Arrival />
        <Divider />
        <WhatIDo />
        <Divider />
        <Work />
        <Divider />
        <Career />
        <Divider />
        <Recommendations />
        <Divider />
        <Talk />
      </div>
    </main>
  );
}

function Divider() {
  return (
    <div className="px-6 md:px-16">
      <div className="hairline max-w-6xl mx-auto" />
    </div>
  );
}
