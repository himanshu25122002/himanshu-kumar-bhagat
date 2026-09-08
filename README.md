# Himanshu Kumar Bhagat — Portfolio

A frontend-only Next.js (App Router) + TypeScript + Tailwind CSS portfolio site.
No backend, no database, no API routes — fully static-deployable on Vercel.

## Project structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout, fonts, SEO metadata
│   ├── page.tsx          # Assembles all sections
│   ├── globals.css       # Tailwind + base styles
│   └── icon.svg          # Favicon (auto-detected by Next.js App Router)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Research.tsx
│   ├── Awards.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   └── Reveal.tsx         # Scroll-reveal animation wrapper
├── lib/
│   └── data.ts            # ALL content lives here — edit this file to update the site
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── postcss.config.js
```

All text content, links, metrics, and project data live in **`lib/data.ts`**.
To update anything on the site (a new project, a new award, a changed link), edit that one file — you don't need to touch any component.

## Run locally

Requires Node.js 18.17 or later.

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploy to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project**.
3. Select the GitHub repository you just pushed.
4. Vercel auto-detects Next.js — leave all build settings as default.
5. Click **Deploy**.

No environment variables are required. The site has no backend, so there is nothing else to configure.

## Checklist before going live

- [ ] Confirm the Google Drive resume/Research CV links in `lib/data.ts` are set to "Anyone with the link can view."
- [ ] Confirm all six project GitHub repositories are public.
- [ ] Add a custom domain in Vercel's project settings if you have one (optional).
- [ ] Swap `app/icon.svg` for a custom favicon/logo if you'd like something more personal — it's a plain "HB" monogram placeholder right now.
- [ ] Re-check the LESA DOI before sharing the live link widely (this was flagged during resume review as worth double-checking against IEEE Xplore directly).

## Notes on content accuracy

Every fact, metric, date, and link on this site was sourced directly from the two documents provided (professional resume and Research CV) and the links list. Nothing was invented — if you need to change any claim, edit `lib/data.ts` directly rather than asking for a rewrite of the design.
