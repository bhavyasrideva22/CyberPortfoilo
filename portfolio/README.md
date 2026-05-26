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

## Resume

Place your resume PDF at `public/resume.pdf` so the **Resume** button in About Me works.

## Project structure

- `src/App.jsx` — main layout
- `src/App.css` — global styles (from original HTML)
- `src/components/` — Nav, Hero, About, Skills, Experience, Projects, Certifications, Contact, Footer
- `src/data/portfolioData.js` — content data
- `src/hooks/` — scroll reveal and hero typing effect
