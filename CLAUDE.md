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

## Arquitectura y convenciones de código

Estas son las reglas que sigo al generar cada componente de `apps/web`.

### Arquitectura por capas

Responsabilidad única aplicada a un sitio de contenido. Cada capa hace **un solo
trabajo** y no invade la de al lado:

- **UI components** (`Button`, `Card`, `Badge`…) — presentación pura. Reciben props y
  pintan. Sin lógica de negocio, sin acceso a datos. Reutilizables en cualquier página.
- **Section components** (`HeroSection`, `PillarsSection`, `ServicesSection`…) — componen
  UI components y definen la composición de una sección. **No** buscan datos ni saben de
  su origen.
- **Capa de contenido** (`lib/content`) — única capa que conoce el origen del contenido
  (hoy local/Markdown o Astro Content Collections; mañana Strapi). Secciones y páginas
  piden datos **aquí**, nunca directo al CMS/API.
- **Páginas** (`pages/`) — orquestan. Ensamblan secciones y les pasan el contenido
  obtenido de `lib/content`.

> **Regla de oro:** al conectar Strapi solo cambia `lib/content`. Secciones y páginas no
> se enteran.

### Reglas de código

- **Cero valores de diseño hardcodeados**: color, tipografía, espaciado y breakpoints
  salen **siempre** de los tokens de `@utake/design-system`. Breakpoints solo
  **640 / 768 / 1024 / 1200**.
- **Un componente por archivo**, nombrado por lo que es (`HeroSection.astro`, no
  `Section1.astro`).
- **El contenido no se incrusta en los componentes**: textos y datos viven en
  `lib/content`, para que páginas futuras reusen las mismas secciones con otro contenido.
- **Componentes "tontos" por defecto**: si aparece lógica, sube a un helper o a
  `lib/content`; no se queda en el template.
- **Idioma**: código en inglés; contenido de usuario y anchor IDs en español.
- **TypeScript**: tipa lo que cruza fronteras (shape del contenido, props de componentes
  reutilizables). No tipar de más "por si acaso".

### Evitar (sobre-ingeniería para un sitio de contenido)

- **Capas tipo repository/service o inyección de dependencias**: `lib/content` ya basta.
- **Tests exhaustivos de componentes de presentación**: reservar tests para `lib/content`
  cuando tenga lógica real (p. ej. transformar respuestas de Strapi).
- **DRY prematuro**: no fusionar dos secciones que hoy se parecen pero representan cosas
  distintas. Esperar a que el patrón se repita de verdad (**regla del tercer caso**).

## Comandos

```bash
pnpm install          # instala todo el workspace
pnpm dev              # arranca apps/web
pnpm build            # build de apps/web
```
