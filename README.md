# edicts.ai

Marketing site and documentation for [Edicts](https://github.com/mssteuer/edicts) — ground truth for AI agents.

**Live:** [mssteuer.github.io/edicts.ai](https://mssteuer.github.io/edicts.ai/)

## What's here

- **Landing page** — Product overview, use cases, quick start
- **Documentation** — Getting started, guides, API reference, integration docs

Built with [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) + Tailwind CSS.

## Development

```bash
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Production build to dist/
npm run preview   # Preview production build
```

## Deployment

Deployed to GitHub Pages via GitHub Actions. Push to `main` triggers a build and deploy.

Base path: `/edicts.ai/` (configured in `astro.config.mjs`).

## Related repos

- [edicts](https://github.com/mssteuer/edicts) — Core library (standalone TypeScript, framework-agnostic)
- [openclaw-plugin-edicts](https://github.com/mssteuer/openclaw-plugin-edicts) — OpenClaw plugin adapter

## License

MIT
