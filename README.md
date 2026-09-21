# Kavya Murali — Portfolio

My personal portfolio website: an interactive, single-page site built with
React and Three.js, showcasing my work experience, projects, and a contact
form backed by Sanity.

Live: https://kavya-portfolio.vercel.app/

## About the project

The site is a single scrolling page (`src/components/AllScreens.jsx`) made up
of four sections:

- **Hero** ([src/components/Hero.jsx](src/components/Hero.jsx)) — intro, resume link, and social links.
- **Work Experience** ([src/components/WorkExperience.jsx](src/components/WorkExperience.jsx)) — a timeline of past roles.
- **Projects** ([src/components/Projects.jsx](src/components/Projects.jsx)) — a carousel of projects with tech-stack tags.
- **Contact** ([src/components/Contact.jsx](src/components/Contact.jsx)) — a contact form that saves submissions to Sanity.

A parallax star-field scene rendered with Three.js sits behind the whole page
(`src/App.js`), and a floating pill navigation bar lets you jump between
sections.

## Tech stack

**Frontend framework & tooling**
- [React](https://react.dev/) `19.3.0` + `react-dom` `19.3.0`
- [react-scripts](https://create-react-app.dev/) (Create React App) `5.0.1`
- [Tailwind CSS](https://tailwindcss.com/) `3.4.19`, [PostCSS](https://postcss.org/) `8.5.28`, [Autoprefixer](https://github.com/postcss/autoprefixer) `10.4.21`

**3D, animation & UI**
- [Three.js](https://threejs.org/) `0.186.0` — background particle/parallax scene
- [Framer Motion](https://www.framer.com/motion/) `13.4.0` — animations and transitions
- [GSAP](https://gsap.com/) `3.15.0` — scroll-driven animations
- [react-slick](https://react-slick.neostack.com/) `0.31.0` — the projects carousel
- [react-tooltip](https://react-tooltip.com/) `6.0.8` — tech-stack tag tooltips
- [react-globe.gl](https://github.com/vasturiano/react-globe.gl) `2.38.0` (unused, present as a dependency)
- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) `11.0.1` (unused, present as a dependency)
- [react-router-dom](https://reactrouter.com/) `7.18.4` (unused, present as a dependency)

**Content / backend**
- [@sanity/client](https://www.sanity.io/docs/js-client) `8.6.2` — used by the contact form to save messages
- [Sanity Studio](https://www.sanity.io/) (see [backend/](backend)) — separate CMS project, its own dependencies are listed below

**Testing**
- [Jest](https://jestjs.io/) (via `react-scripts test`)
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) `16.3.3`
- [@testing-library/jest-dom](https://github.com/testing-library/jest-dom) `7.0.1`
- [@testing-library/user-event](https://testing-library.com/docs/user-event/intro/) `14.6.7`

**Metrics**
- [web-vitals](https://github.com/GoogleChrome/web-vitals) `6.2.2`

### Backend (`backend/`) — Sanity Studio v2

- `@sanity/base` `2.27.1`, `@sanity/core` `2.27.0`, `@sanity/desk-tool` `2.27.1`,
  `@sanity/default-layout` `2.27.1`, `@sanity/default-login` `2.27.0`,
  `@sanity/vision` `2.27.1`, `@sanity/eslint-config-studio` `2.0.0`
- `react` `17.0`, `react-dom` `17.0`, `styled-components` `5.2.0`, `prop-types` `15.7`
- `eslint` `8.6.0`

## Getting started

### Prerequisites
- Node.js 18+ and npm

### Setup

```bash
npm install
```

Create a `.env` file in the project root with your Sanity project credentials
(used by the contact form to save messages):

```bash
REACT_APP_SANITY_PROJECT_ID=your_sanity_project_id
REACT_APP_SANITY_TOKEN=your_sanity_write_token
```

### Run the dev server

```bash
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000) with hot reload.

### Run tests

```bash
npm test
```

### Build for production

```bash
npm run build
```

Outputs an optimized production build to the `build/` folder.

## Sanity Studio (backend)

The `backend/` folder contains a separate Sanity Studio project used to manage
the `contact` schema. See [backend/README.md](backend/README.md) for setup.
