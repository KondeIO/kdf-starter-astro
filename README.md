# KDF Starter Template

A clean, minimal, framework-agnostic starting point for **KDF (Konde Design Framework)** built with Astro.

[![Deploy to Cloudflare Pages](https://cloudflare-pages.com/deploy/button.svg)](https://pages.cloudflare.com/deploy)

## 🚀 Features
- **KDF Native**: Uses `@kondeio/kdf` to map JSON design tokens seamlessly.
- **Framework Agnostic**: No Tailwind required, yet fully supports utility-class patterns.
- **SEO Ready**: Configured with Canonical URLs, Open Graph, Twitter cards, and auto-generated Sitemap.
- **AI Ready**: Ships with `llms.txt` and `llms-full.txt` (AEO/GEO optimized).
- **Fast**: Zero JS overhead, static HTML output.

## 🛠 Project Structure

```text
/
├── designs/
│   ├── kdf.json         # Core KDF dictionary mapping
│   ├── starter.json     # Starter template component mapping
│   ├── layout.json      # Layout wrapper mapping
│   └── konde-server.css # Pre-compiled CSS properties
├── public/
│   ├── favicon.svg      # Favicon
│   ├── llms.txt         # AI context
│   └── robots.txt       # Search engine directives
├── src/
│   ├── layouts/
│   │   └── Layout.astro # Base HTML layout wrapping KDF
│   └── pages/
│       └── index.astro  # Homepage using starter.json tokens
├── astro.config.mjs     # Astro configuration (Sitemap, KDF define)
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm run dev`            | Starts local dev server                          |
| `pnpm run build`          | Build your production site to `./dist/`          |
| `pnpm run preview`        | Preview your build locally                       |

## 📖 Learn More

- Read the documentation: [Konde.io Docs](https://konde.io/kdf/docs)
- Interactive KDF Playground: [Playground](https://playground.konde.io)

## 📄 License

MIT License. See `LICENSE` for more information.
