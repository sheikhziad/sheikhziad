// next.config.mjs — static export for GitHub Pages.
//
// basePath/assetPrefix are required because the site is served at
// https://sheikhziad.github.io/sheikhziad/ (a project page under the
// `sheikhziad` repo), not at the domain root. Without these, every
// `_next/...` asset URL would 404.
//
// We only apply the prefix when NEXT_PUBLIC_BASE_PATH is set, so
// local `bun run dev` stays clean at `localhost:3000/`. The deploy
// workflow sets that env var when building for Pages.

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
