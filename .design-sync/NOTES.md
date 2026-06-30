# Design Sync Notes — UTAKE TECH Design System

## Project

- Claude Design project: `8943d9a2-086b-431a-ae8e-1a66f8974d1d`
- URL: https://claude.ai/design/p/8943d9a2-086b-431a-ae8e-1a66f8974d1d
- Shape: `package` (CSS tokens only — no React components in `packages/design-system`)

## What was synced (2026-06-29)

Partial/non-destructive sync: tokens + self-hosted fonts only. No `_ds_sync.json` anchor produced (scoped upload, not a full converter run).

**Uploaded:**
- `styles.css` — CSS entry point (5 `@import` statements)
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/effects.css` — brand tokens
- `tokens/fonts.css` — REWRITTEN to `@font-face` self-hosted (paths reference `../fonts/*.woff2`)
- `fonts/*.woff2` — 9 files: Poppins 400/500/600/700, Inter 400/500/600, JetBrains Mono 400/500

**Left untouched (design agent outputs — not in this repo):**
- `components/core/` — React components (Badge, Button, Card, Checkbox, FeatureCard, Input, Radio, Switch)
- `guidelines/` — 14 brand guideline cards
- `ui_kits/website/` — Hero, Navbar, Pillars, Sections, Services
- `templates/landing-page/` — LandingPage template
- `scraps/`, `uploads/` — design exploration assets
- `_ds_bundle.js` — React component bundle (kept from design agent's version)

## Re-sync risks

- `tokens/fonts.css` in the project uses `../fonts/*.woff2` paths; the local `packages/design-system/tokens/fonts.css` uses `../assets/fonts/*.woff2`. Re-syncing the local file directly would break font resolution in the project — always rewrite paths on upload (fonts → `../fonts/`, not `../assets/fonts/`).
- The project has no `_ds_sync.json` anchor. Every re-sync must be a full re-upload of the targeted files (no diff-based skip).
- `components/core/`, `guidelines/`, `ui_kits/`, etc. are NOT in this repo. If the design agent updates them, a re-sync should NOT overwrite them — always use `deletes: []` and a scoped `writes` list.
- `_ds_bundle.js` in the project bundles the React components from the design agent's work. Do not overwrite it with a tokens-only empty bundle.

## Known render warns

None — no component renders in this sync.
