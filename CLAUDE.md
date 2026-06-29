# UTAKE TECH

Monorepo gestionado con **pnpm workspaces**. Node 22 (fijado en `.nvmrc`).

## Estructura

```
apps/
  web/                 # Frontend Astro
  cms/                 # Strapi (placeholder — se añade después)
packages/
  design-system/       # Tokens canónicos — FUENTE ÚNICA
```

- **apps/web** — frontend en Astro. Consume los tokens del design system vía CSS.
- **apps/cms** — Strapi. Aún no scaffoldeado; confirmar el rango de Node soportado
  por Strapi al añadirlo (Node 22 es el objetivo).
- **packages/design-system** — tokens canónicos y **FUENTE ÚNICA** de diseño.
  Consumido por `web` y sincronizado hacia Claude Design vía `/design-sync`.
  **El código es la fuente de verdad**: los cambios se hacen aquí y se propagan,
  nunca al revés.

## Convenciones

- **Idioma del código**: inglés (nombres de variables, funciones, archivos, commits).
- **Contenido de usuario y anchor IDs**: español.
- **Base responsive**: vive en el design system y se consume vía CSS, **nunca se
  re-hardcodea** en las apps. Tokens:
  - `--bp-*` — breakpoints
  - `--fs-*` — tamaños de fuente fluidos (clamp)
  - `--section-pad-y` / `--gutter` — espaciado fluido (vertical / horizontal)

## Comandos

```bash
pnpm install          # instala todo el workspace
pnpm dev              # arranca apps/web
pnpm build            # build de apps/web
```
