# Bhavya Sri Lakshmi Deva — Cybersecurity Portfolio (React)

React + Vite version of the cybersecurity portfolio site.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

Static files are output to `dist/`.

## Deploy on Render

### Fix: `Couldn't find a package.json in /opt/render/project/src`

Your app is in the **`portfolio/`** folder. Render was running from the repo root with `yarn start`.

**Do this in Render Dashboard → your service → Settings:**

| Setting | Value |
|--------|--------|
| **Root Directory** | `portfolio` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |

Do **not** use `yarn start`. Use **npm** only.

**Or** leave Root Directory empty and use the root `package.json` (already added) with:

| Setting | Value |
|--------|--------|
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |

### Recommended: Static Site (no start command)

Use **Static Site** instead of Web Service:

| Setting | Value |
|--------|--------|
| **Root Directory** | `portfolio` |
| **Build Command** | `npm install && npm run build` |
| **Publish directory** | `dist` |
| **Rewrite** | `/*` → `/index.html` |

Environment: `NODE_VERSION` = `20`

### Option A — Blueprint (`render.yaml`)

1. Push this repo to GitHub.
2. In [Render Dashboard](https://dashboard.render.com) → **New** → **Blueprint**.
3. Connect the repo; Render reads `render.yaml` automatically.
4. Deploy. Your site URL will look like `https://portfolio-bhavya.onrender.com`.

### Option B — Manual Static Site

| Setting | Value |
|--------|--------|
| **Runtime** | Static Site |
| **Root directory** | `portfolio` (if repo root is parent folder) or `.` (if repo is only the portfolio folder) |
| **Build command** | `npm install && npm run build` |
| **Publish directory** | `dist` |

Add a **Rewrite** rule so routing works:

- Source: `/*`
- Destination: `/index.html`

### If deploy fails (Render troubleshooting)

1. **Check logs** in Render Dashboard → your service → **Logs** (search for `error`).
2. **Runtime** must be **Static Site** for this project — not Docker/Node Web Service unless you add a server.
3. **Node version** — `package.json` requires Node **20+**. In Render, set `NODE_VERSION=20` under Environment if needed.
4. **Root directory** — if the repo is `portfolio_bhavya/portfolio/`, set Root Directory to `portfolio`.
5. **Build locally** — run `npm install && npm run build` in this folder; fix any errors before redeploying.
6. **Commit `package-lock.json`** — always push the lockfile so Render installs the same dependency versions.

### Web Service (only if you chose Node instead of Static)

- **Build command:** `npm install && npm run build`
- **Start command:** `npm run start` (serves `dist` via Vite preview on `PORT`)
- Bind is handled by `--host 0.0.0.0`; Render sets `PORT` automatically.

Static Site is simpler, faster, and free-tier friendly.

## Resume

Place your resume PDF at `public/resume.pdf` so the **Resume** button in About Me works.

## Project structure

- `src/App.jsx` — main layout
- `src/App.css` — global styles (from original HTML)
- `src/components/` — Nav, Hero, About, Skills, Experience, Projects, Certifications, Contact, Footer
- `src/data/portfolioData.js` — content data
- `src/hooks/` — scroll reveal and hero typing effect
