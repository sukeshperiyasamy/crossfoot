# Crossfoot Website

🌐 **Live Website:** [https://crossfoot.netlify.app](https://crossfoot.netlify.app)

Static marketing site for the reconciliation practice, built per `../docs/website_development_specification.md`.

**Stack:** Astro 5 + Tailwind CSS 4 (design system in `src/styles/global.css`) · deployed on **Netlify** (`netlify.toml` included). No backend anywhere.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → dist/
npm run preview    # serve the production build
```

## Deploy to Netlify

Either connect the repo in the Netlify dashboard (build command `npm run build`, publish `dist` — already in `netlify.toml`), or run `npm run build` and drag the `dist/` folder into Netlify Drop.

## Before launch — replace these placeholders

| What | Where |
| :--- | :--- |
| Brand name "Crossfoot" (placeholder trade name) | `Header.astro`, `Footer.astro`, `about.astro`, package.json, favicon |
| Domain (`site` in `astro.config.mjs`, email, footer) | `astro.config.mjs`, `about.astro`, `contact.astro`, `privacy.astro` |
| Phone number | `contact.astro` |
| Calendly link / inline embed | `contact.astro` (marked TODO) |
| GA4 measurement ID | `src/layouts/Base.astro` (marked TODO) |
| 60-sec Loom demo embed | `proof.astro` (marked placeholder) |
| Founder name in the NDA + jurisdiction city | `nda.astro` |

Also: `contact.astro`'s form is **Netlify Forms** (`data-netlify="true"`) — it activates automatically on the first production deploy; submissions appear in the Netlify dashboard (Forms tab) and can webhook to email/Sheets.

## Pages (Phase 1 — 14)

`/` · `/diagnostic` · `/how-it-works` · `/security` · `/proof` · `/who-we-help` · `/pricing` · `/faq` · `/about` · `/contact` · `/privacy` · `/legal-summary` · `/nda` (print-ready) · `/thanks`

## Design language — "The Ledger"

- **Paper & ink:** warm ivory surfaces (`paper-*`), deep green-black text (`ink-*`) — reads as a ledger, not a tech startup.
- **One green, used semantically:** ledger-green (`match-*`) means *verified/matched/action*. It is the only accent; there are no gradients.
- **Exception semantics:** red (`exception-*`) and amber (`timing-*`) appear *only* where the deliverable's own categories appear (unbilled / variance) — the UI teaches the product.
- **Type:** Fraunces (serif display = authority), Inter (body), IBM Plex Mono (labels, figures, status chips — the audit-trail voice).
- **Motifs:** hairline rules, numbered section indices (`01 · THE PROBLEM`), monospace spec bands, status chips, and the exception-register table as the signature visual.
- **Deliberately absent:** purple/indigo gradients, glassmorphism, glow, emoji icons, fake logos/testimonials.

## Analytics events to wire (per spec §11)

GA4 custom events: `call_book_click` (Calendly/button), `register_download`, `pricing_view` (scroll depth on /pricing), `security_read` (scroll on /security).
