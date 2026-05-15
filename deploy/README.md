# Studio 71 — Portfolio

Personal portfolio site for Dakotta Bhatti. Pure HTML + React (via Babel standalone) — no build step, no install.

## Run locally

Just open `index.html` in a browser. That's it.

If you want a local server (some browsers block ES modules over `file://`):

```bash
# any of these work
python3 -m http.server 8000
npx serve
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Push this folder to your repo's `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Select `main` / root and save.
4. Site goes live at `https://<username>.github.io/<repo>/`.

## File map

```
index.html             # entry — loads React, Babel, all the JSX modules
tweaks-panel.jsx       # in-page tweaks UI (color, font, etc.)
s71/
  styles.css           # design tokens + base styles
  shared.jsx           # tokens, nav, footer, shared components (Btn, Thumb, etc.)
  home.jsx             # landing
  portfolio.jsx        # project index
  project.jsx          # individual project view
  about.jsx            # about / timeline
  contact.jsx          # contact / scheduler
```

## Design tokens

Defined in `s71/styles.css` under `:root` — `--purple`, `--coral`, `--yellow`, type families, radii, easings. The Tweaks panel at the bottom-right lets you preview color/font changes live; values persist via the in-file `EDITMODE-BEGIN/END` block.

## Stack

- React 18.3 (UMD)
- Babel Standalone 7.29 (JSX transpiled in the browser)
- Inter + Orbitron via Google Fonts

No npm. No bundler. Edit a `.jsx` file, refresh, done.
