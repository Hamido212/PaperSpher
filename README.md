# hamid-yosefzai.dev — Personal Portfolio

Personal portfolio and blog of **Hamid Yosefsei** — Software Engineer & Founder.

Built with [Astro](https://astro.build), Tailwind CSS, and TypeScript. Based on the Astro Sphere template, customized into a minimalist developer portfolio.

## Stack

- **Framework**: Astro (static site generation)
- **Styling**: Tailwind CSS v3 + CSS custom properties
- **Language**: TypeScript
- **Content**: Markdown / MDX via Astro Content Collections
- **Fonts**: Inter (UI) · Lora (prose)
- **Theme**: Light / Dark (system preference + toggle)

## Structure

```
src/
  components/   UI components (Header, Footer, ArrowCard, …)
  content/      blog/, projects/, work/, legal/
  layouts/      Page and article layout wrappers
  pages/        Route pages
  styles/       global.css with CSS token system
public/         Static assets (fonts, SVGs, favicon)
```

## Commands

Run from the project root:

| Command         | Action                        |
| :-------------- | :---------------------------- |
| `pnpm install`  | Install dependencies          |
| `pnpm dev`      | Start dev server at localhost |
| `pnpm build`    | Build for production          |
| `pnpm preview`  | Preview production build      |

## Projects

- **[Brieffix](https://brieffix.de)** — AI letter generator for German bureaucracy
- **[Dolmetschernetz](https://dolmetschernetz.com)** — Germany's interpreter marketplace
- **[Amt-Vernetzt](https://amt-vernetzt.de)** — Cross-agency government collaboration platform
- **[BricksSnap](https://github.com/Hamido212/BricksSnap)** — Open-source Bricks Builder JSON template generator

## Contact

- GitHub: [github.com/Hamido212](https://github.com/Hamido212)
- LinkedIn: [linkedin.com/in/hamid-yosefzai](https://www.linkedin.com/in/hamid-yosefzai/)
- Email: hi@seid.dev

| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run dev:network`     | Starts dev server on local network               |
| `npm run sync`            | Generates TypeScript types for all Astro modules.|
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run preview:network` | Starts preview server on local network           |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Run ESLint                                       |
| `npm run lint:fix`        | Auto-fix ESLint issues                           |

## 🗺️ Roadmap

A few features I plan to implement
- ⬜ Article Pages - Table of Contents
- ⬜ Article Pages - Share on social media

## ✨ Acknowledgement

Theme inspired by [Paco Coursey](https://paco.me/), [Lee Robinson](https://leerob.io/) and [Hayden Bleasel](https://www.haydenbleasel.com/)


## 🏛️ License

MIT


# 1.0.1 Update

Added ability to run dev and preview on local network.
added npm run dev:network
added npm run preview:network

Added slightly more particle density in both light and dark mode.

Added subtle dark mode star and meteor animations.

Removed eslint config

