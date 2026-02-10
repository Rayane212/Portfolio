# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `npm run dev` (Next.js on port 3000)
- **Build**: `npm run build`
- **Lint**: `npm run lint`

No test framework is configured.

## Architecture

Single-page portfolio built with **Next.js 16 App Router** (React 19, TypeScript, Tailwind CSS 4).

All UI lives in `src/app/page.tsx` as colocated section components: `Navbar`, `HeroSection`, `AboutSection`, `ProjectsSection`, `ContactSection`. These are not exported — they're only used by the default `Home` component at the bottom of the file.

Shared utilities (`cn`, `GlassCard`, `Atmosphere`, animation variants) are defined at the top of `page.tsx`.

### Internationalization (i18n)

The site is fully bilingual **FR/EN** via a lightweight React Context (no external i18n library).

- `src/i18n/locales/fr.ts` — French dictionary (~55 keys), exports `TranslationKeys` type
- `src/i18n/locales/en.ts` — English dictionary (same keys, typed via `Record<TranslationKeys, string>`)
- `src/i18n/index.ts` — `Locale` type (`"fr" | "en"`), re-exports dictionaries and types
- `src/i18n/context.tsx` — `LocaleProvider`, `useLocale()`, `useTranslation()` hooks

Key conventions:
- Default locale is **`"fr"`**. Persisted in `localStorage` under the key `"locale"`.
- `document.documentElement.lang` is updated dynamically when locale changes.
- `layout.tsx` wraps children in `<LocaleProvider>`.
- In `page.tsx`, each section component calls `const { t } = useTranslation()` and uses `t("key")` for all user-facing strings.
- Translation keys follow a dot-separated convention: `section.field` (e.g. `hero.badge`, `about.exp1.role`).
- Non-translatable content stays inline: tech names (`SKILLS`), project tags, company names, dates, email address.
- The FR/EN toggle is in the `Navbar` as a pill button with animated `layoutId="locale-pill"`.
- When adding new UI text, add the key to **both** `fr.ts` and `en.ts` to maintain parity.

### API Routes

- `src/app/api/contact/route.ts` — POST endpoint that sends emails via **Resend**. Requires `RESEND_API_KEY` in `.env.local`.

## Design System

The project uses a **Glass Gradient** dark theme documented in `design-system.md` at the project root. Key patterns:

- Background: `#030303`, text: white/zinc-400
- Accent gradient: `from-blue-400 via-indigo-400 to-purple-400`
- Glass cards: `bg-white/5 border-white/10 backdrop-blur-xl rounded-2xl` with 3D tilt via framer-motion springs
- Primary buttons: `bg-white text-black rounded-full`
- Glass inputs: `bg-white/5 border-white/10 rounded-xl` with `focus:border-indigo-500/50`
- Labels: `text-[10px] tracking-[0.2em] uppercase font-mono`

Always read `design-system.md` before creating new UI components to match the existing visual language.

## Key Dependencies

- **framer-motion** — all animations, scroll-triggered reveals (`whileInView`), 3D card tilt
- **lucide-react** — icons
- **clsx + tailwind-merge** — combined via `cn()` utility for conditional class merging
- **resend** — email sending in the contact API route

## Language

The site is fully bilingual **FR/EN** with a toggle in the navbar. Default locale is French. All user-facing strings are managed via translation dictionaries in `src/i18n/`. The contact API email template (`src/app/api/contact/route.ts`) remains in French only (it is sent to the site owner).
