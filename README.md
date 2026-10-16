# Hunar's World

An explorable portfolio built with React, Vite, and Tailwind CSS. A custom SVG village replaces the traditional portfolio layout. Resume content and original personal-project links live in `src/data.js`.

## Run

Use Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

## Play

Click the map to focus it. Move with WASD or the arrow keys, and press E or Enter near a destination. Collect five stars as an optional side quest. Buildings and the pond block movement. Mobile visitors have direction buttons. Building labels and the Field Notes menu open all content directly, with no gameplay required. Escape closes a destination and returns focus.

Exploration progress lasts for the current page session. Motion respects the operating system's reduced-motion preference. No API keys or backend are needed.

## Edit

- `src/main.jsx`: world artwork, controls, destinations, and content views.
- `src/data.js`: work experience, personal projects, and skills.
- `src/game.js`: movement bounds and collisions.
- `src/styles.css`: game interface and responsive layouts.
- `public/Resume.pdf`: downloadable resume.

## Build

```sh
npm run build
```

## Publish

The GitHub Pages workflow builds and deploys `dist` on pushes to `main` or `master`. Set the repository's **Settings → Pages → Source** to **GitHub Actions**. Local edits are not published until pushed.
