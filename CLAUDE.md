# CLAUDE.md: KWETU Connect (& CROP Conference 2026)

Australian consultancy (Sydney) on cultural heritage, health equity, sustainable trade and community resilience; also hosts CROP Conference 2026 pages.

- Live domain: https://kwetuconnect.org (the only one; confirmed 15 Nov 2026). kwetu4communities.org is the sister organisation.
- Host: Hostinger. Contact and forms email: info@kwetuconnect.org
- Design and audience: see `brand-dna.md`. Placeholders: `PLACEHOLDERS.md` (create it when you find one).

## Studio rules (Jacques' web studio: apply to every task)
- This site must look custom-made for this client, never like a template. Never reuse another client's palette, font pairing, layout rhythm or signature element. No generic AI layout (centered hero + 3 icon cards + testimonial slider + CTA band) unless Jacques asks for it.
- Read `brand-dna.md` in this repo before any design or content change. Items marked ❓ are not confirmed: ask, don't invent.
- Real copy and real photos only. Never invent reviews, testimonials, statistics, people or partner logos. Every placeholder goes in `PLACEHOLDERS.md`.
- Done means: `npm ci && npm run build` passes, you checked desktop and mobile yourself, alt text, AA contrast, page titles/descriptions, compressed images.
- Push to the deploy branch only after the build passes and the change is verified (pushing deploys the live site). Never commit secrets.
- Report to Jacques in plain language, no jargon, with the live link. Anything he must do himself (secrets, DNS, accounts): click-by-click steps.
- Studio stack (zero recurring cost): client's own host via GitHub Actions FTP deploy; Cloudflare free in front; images in Cloudinary or the repo; video on YouTube or Mux (store the public Playback ID, never the Asset ID); forms via Web3Forms; editing via Pages CMS + Sveltia at `/admin`. No Vercel Hobby or Netlify for client sites.

## Stack and build
- Originally a Readdy export: Vite + React + TypeScript + Tailwind + React Router, i18next installed.
- Install and build: `npm ci && npm run build` (`vite build && node scripts/social-pages.mjs`) → output in `out/`.
- Dev preview: `npm run dev`.
- Routes: `/`, `/about`, `/contact`, `/crop2026`, `/crop2026/kwetu-connect`, `/crop2026/ldii`, `/crop2026/outcomes`, `/crop2026/partnership`, `/crop2026/pillars`, `/crop2026/programme`, `/crop2026/register`, `/crop2026/thrive-tours`, `/crop2026/venue`, `/crop2026/vision`, `/gallery`, `/health-recruitment`, `/privacy-policy`, `/programs`, `/terms-of-service`.

## Deploy
- No passwords, no FTP (17 Nov 2026). `.github/workflows/deploy.yml`: push to `main` → `npm ci && npm run build` → the built site (`out/`) is saved to the `live` branch → Hostinger pulls that branch (hPanel > kwetuconnect.org > Advanced > Git, branch `live`, Auto deployment webhook) → the workflow checks kwetuconnect.org shows the new build.
- Never edit the `live` branch by hand: it is rewritten on every publish. `public/.htaccess` carries the server rules (https, clean addresses, per-page files, SPA fallback, caching). If Hostinger misses a publish, the workflow nudges it up to twice (empty commit on `live`).

## Where things live
- Pages: `src/pages/<page>/` (one folder per page, sections in `components/`). Routes: `src/router/`.
- Text, images and links are mostly hard-coded inside the page components (`src/pages/<page>/components/*.tsx`) and in `src/mocks/`.
- Next studio step for this site: move client-facing content into `src/content/*.json` and wire up both editors (Pages CMS + Sveltia at `/admin`), exactly like `jacquesmofa/CAWAP` (see its CLAUDE.md and `scripts/studio-tools/` for `extract.mjs`, `snapshot.mjs`, `compare.mjs`). Verify with before/after snapshots that visitors see no change.

## Known issues (found 10 Nov 2026)
- 148 Readdy AI placeholder image URLs (`readdy.ai/api/search-image`) are still in the code. Replace them with real photos and track the rest in `PLACEHOLDERS.md`.
- Forms: moved to Web3Forms on 15 Nov 2026 (`src/lib/forms.ts`, key for info@kwetuconnect.org). Test that a message arrives after the first deploy.
- Duplicates the CROP 2026 conference that also has its own repo (`crop2026`). Decide which one is the source of truth.
- CROP 2026 dates (6–8 Nov 2026) have now passed: event pages need a 'thank you / outcomes' update.
- Design overlap with other clients: Navy + gold is shared with LDII (navy) and several gold sites. Must diverge.

## Leadership profile (15 Nov 2026)
- `src/content/founder.json` holds Mr Morris Kizito Mukasa's profile (his text, verbatim, in 8 chapters). `src/components/feature/FounderProfile.tsx` shows it chapter by chapter ("Read more" opens the next one; `preview` mode on the home page links to the full page `/about/morris-kizito-mukasa`). Edit the JSON, not the component.
- Invented team members were removed from the About page. See PLACEHOLDERS.md.
- `out/` is no longer committed (15 Nov); the workflow builds it.
- 17 Nov 2026: kwetuconnect.org was a Hostinger "Web app" (ZIP uploads only, no Git). With Jacques' approval it was deleted and re-created as a PHP/HTML website, then connected in hPanel > Advanced > Git to the `live` branch with Auto-deployment on. Email DNS records (MX, SPF, DKIM, DMARC) were checked before and after: unchanged. First automatic publish verified the same day.

## SEO, gallery and clean-up (17 Nov 2026)
- `src/content/seo.json` is the only place for page titles, descriptions and share pictures (20 addresses). `SeoSync.tsx` applies it in the browser; `scripts/social-pages.mjs` writes one HTML file per address plus `sitemap.xml`. The old per-page `<title>`/`<meta>` lines inside the pages were removed (they never reached the browser tab). New page: add its line to `seo.json`.
- Icons and the default share picture are the KWETU logo served by Cloudinary at the right sizes (`index.html`, `public/site.webmanifest`); CROP pages swap the browser icon in `App.tsx`.
- Gallery (`src/mocks/gallery.ts`): real photos only, one album "Multicultural Mass 2022" (313 photos). Grids load small pictures (`w_640`), the viewer the large one. Never add AI or stock pictures as event photos.
- Invented testimonials were removed from Home and Health Recruitment. See PLACEHOLDERS.md.
