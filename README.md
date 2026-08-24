# landing-studyquest

Sitio estático de portfolio para [StudyQuest](https://github.com/LorenGrz/StudyQuest) — plataforma de estudio colaborativo con matchmaking en tiempo real y quests generadas por IA.

Da contexto completo del producto (capturas reales de la app, features, stack) antes de mandar al visitante a la pantalla de login de la app real, ya que StudyQuest no tiene vistas públicas sin cuenta.

## Stack

- Next.js 16 (App Router, `output: 'export'`)
- Tailwind CSS
- TypeScript

## Desarrollo local

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build y deploy

Deploy automático a GitHub Pages vía GitHub Actions en cada push a `master` (ver `.github/workflows/deploy.yml`).

```bash
npm run build   # genera ./out
```

**URL en vivo:** https://lorengrz.github.io/landing-studyquest/

## Proyecto relacionado

- App principal: [LorenGrz/StudyQuest](https://github.com/LorenGrz/StudyQuest)
