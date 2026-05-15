// ─────────────────────────────────────────────────────────────
// SceneClient.tsx — a thin Client Component wrapper around Scene.
//
// 📚 Why this exists:
//   Next.js 15 doesn't allow `dynamic(..., { ssr: false })` inside
//   a Server Component (which is what `app/page.tsx` is). The fix:
//   put the `dynamic` call inside a Client Component, then import
//   that wrapper from the Server Component.
//
//   Server Components are the default in App Router — they render
//   to HTML on the server (great for SEO, smaller JS bundle).
//   Client Components run in the browser (needed for hooks, events,
//   browser APIs). The `'use client'` directive opts a file in.
//
//   So the chain is:
//     page.tsx (server)  →  SceneClient (client)  →  Scene (client)
//   Tiny wrapper, big architectural benefit: the rest of the page
//   stays server-rendered and fast.
// ─────────────────────────────────────────────────────────────
'use client';

import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./Scene'), { ssr: false });

export default function SceneClient() {
  return <Scene />;
}
