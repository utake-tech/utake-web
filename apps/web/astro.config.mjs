import { defineConfig } from "astro/config";

// Deploy target: Vercel (added later — no infra/adapter wired up yet).
// When ready: `pnpm add @astrojs/vercel` and set `output`/`adapter` here.
export default defineConfig({
  srcDir: "./src",
});
