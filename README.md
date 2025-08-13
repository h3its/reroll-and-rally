# Re-roll & Rally — SvelteKit Markdown Blog

A fast, static Warhammer blog built with **SvelteKit**, **Tailwind CSS v4**, and **DaisyUI**.  
Posts are plain **Markdown** files with simple front-matter. Dev runs in Docker; prod ships as a tiny Nginx image and deploys on **Fly.io** via GitHub Actions.

---

## Features

- 📝 Write posts in **Markdown** (`src/posts/*.md`) with front-matter
- 🎨 **Tailwind v4** + **DaisyUI** styling out of the box
- ⚡️ **Static** build with `@sveltejs/adapter-static`
- 🧱 **Docker** dev environment (Vite hot reload)
- 🚀 **Fly.io** deployment (Dockerfile + `fly.toml`)
- 🔎 Built-in search on the blog index (client-side filter)
- 🖼 Easy asset handling via `/static/images/...`

---

## Stack

- **SvelteKit** `^2.x` (JS)
- **Tailwind CSS v4** + `@tailwindcss/vite` + **DaisyUI**
- **Marked** for Markdown
- **Docker** (dev & prod) + **Nginx** (prod)
- **Fly.io** (deploy)

---

## Project Structure

```
.
├─ src/
│  ├─ app.css                # Tailwind v4 + plugins imports
│  ├─ lib/
│  │  └─ posts.js            # loads/parses markdown + front-matter
│  ├─ posts/                 # your markdown posts (content!)
│  └─ routes/
│     ├─ +layout.svelte      # imports ../app.css, navbar/footer
│     ├─ +page.svelte        # homepage
│     └─ blog/
│        ├─ +page.js         # returns { posts }
│        ├─ +page.svelte     # blog index (cards + search)
│        └─ [slug]/
│           ├─ +page.js      # returns { post }
│           └─ +page.svelte  # single post view
├─ static/
│  ├─ images/                # put images here, reference as /images/...
│  └─ servoskull.svg
├─ Dockerfile                # prod build: node:20-alpine -> nginx:alpine
├─ Dockerfile.dev            # dev image for Vite server
├─ docker-compose.yml        # dev (hot reload)
├─ nginx.conf                # SPA-friendly nginx config
├─ svelte.config.js          # adapter-static
├─ vite.config.js            # sveltekit + tailwind vite plugin
├─ fly.toml                  # Fly.io app config
├─ package.json
└─ .gitignore
```

---

## Content Authoring

Create files in `src/posts/` like:

```md
---
title: T’au Retaliation Cadre — Showcase Post
date: 2025-08-12
tags: tau, tactics, 10th
excerpt: Demo post showing markdown features.
cover: /images/retaliation.jpg
---

# Heading

Write in regular Markdown.  
Images: `![alt](/images/your-image.jpg)` (put files under `static/images/`).
```

> **Tip:** Use **absolute** image paths (`/images/...`). Relative paths like `images/foo.jpg` will resolve differently on `/blog` vs `/blog/[slug]`.

---

## Local Development

### Prereqs
- Node 20+ (for non-Docker dev)  
- Docker & Docker Compose v2 (recommended)

### Option A — **Docker (recommended)**
```bash
# first run: populate node_modules in the dev volume and sync SvelteKit
docker compose run --rm sveltekit sh -lc 'npm ci --include=optional && npx svelte-kit sync'

# start dev server (Vite on :5173)
docker compose up
```
Visit http://localhost:5173

### Option B — Node (no Docker)
```bash
npm ci
npm run dev
```

---

## Build & Preview (static)

```bash
npm run build
npm run preview
```

Static output is emitted to `build/`.

---

## Production (Docker + Nginx)

Build and run locally:
```bash
docker build -t warhammer-blog .
docker run --rm -p 8080:80 warhammer-blog
# open http://localhost:8080
```

`Dockerfile` (multi-stage) builds the static site in Node and serves it via Nginx with SPA fallback and long-cache for assets.

---

## Deploy to Fly.io (GitHub Actions)

1. Ensure `fly.toml` exists with your app name and Dockerfile:
   ```toml
   app = "warhammer-blog"
   primary_region = "iad"

   [build]
     dockerfile = "Dockerfile"

   [[services]]
     internal_port = 80
     protocol = "tcp"

     [[services.ports]]
       port = 80

     [[services.ports]]
       handlers = ["tls","http"]
       port = 443
   ```

2. Add the GitHub Action: `.github/workflows/deploy.yml`
   ```yaml
   name: Deploy to Fly.io
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: superfly/flyctl-actions@1.5
           with:
             args: "deploy --remote-only"
           env:
             FLY_API_TOKEN: ${{ secrets.FLY_API_TOKEN }}
   ```

3. Create the token and save as repo secret:
   ```bash
   fly auth token
   ```
   GitHub → Settings → Secrets → Actions → **New repository secret**  
   Name: `FLY_API_TOKEN` → paste the token.

Each push to `main` builds and deploys.

---

## Tailwind / DaisyUI Setup

- `src/app.css`:
  ```css
  @import "tailwindcss";
  @plugin "@tailwindcss/forms";
  @plugin "@tailwindcss/typography";
  @plugin "daisyui";
  ```
- `vite.config.js`:
  ```js
  import { sveltekit } from '@sveltejs/kit/vite';
  import tailwindcss from '@tailwindcss/vite';
  export default { plugins: [tailwindcss(), sveltekit()] };
  ```
- Import CSS in root layout:
  ```svelte
  <script>import '../app.css';</script>
  ```

No `tailwind.config.*` is required for v4 (file-based). Add one later if you want custom themes.

---

## Scripts

```bash
npm run dev       # Vite dev server
npm run build     # Static build (adapter-static)
npm run preview   # Preview the static output
```

---

## Troubleshooting

- **Rollup “Cannot find module @rollup/rollup-linux-…”**  
  Ensure optional deps are allowed (Rollup v4 ships a platform binary as an **optional** dep):
  ```bash
  npm config get optional        # should be true / default
  # if you previously disabled it:
  npm config delete optional
  ```
  When using Docker dev volumes, populate `node_modules` once:
  ```bash
  docker compose run --rm sveltekit sh -lc 'npm ci --include=optional && npx svelte-kit sync'
  ```

- **Tailwind not applying**  
  Make sure `app.css` is imported in `+layout.svelte`, and `@tailwindcss/vite` is in `vite.config.js`.

- **Images don’t show on post pages**  
  Use absolute paths like `/images/...` (assets belong in `static/images/`).  
  `cover` in front-matter should also start with `/`.

---

## License

MIT © You — customize as you like.
