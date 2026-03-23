## Firma DDD Frontend

Single-page marketing website for the Firma DDD services (deratizare, dezinsectie, curatenie), built with React, Vite and Tailwind CSS.

### Tech stack

- React 19
- Vite 7
- React Router for client‑side routing
- Tailwind CSS 3 for styling
- Framer Motion for animations

### Prerequisites

- Node.js and npm installed (LTS version recommended)

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

The app will be available on the URL printed in the terminal (by default `http://localhost:5173`).

### Build for production

```bash
npm run build
```

The optimized build output is generated in the `dist/` folder.

### Preview the production build

```bash
npm run preview
```

### Lint the project

```bash
npm run lint
```

### Project structure (frontend)

- `src/` – React source code
  - `components/` – reusable UI components (Navbar, Hero, Services, Footer, etc.)
  - `pages/` – routed pages (HomePage, ServicesPage, PricingPage, ContactPage, etc.)
  - `images/` – static image assets
- `public/` – static public assets
- `tailwind.config.js` – Tailwind configuration
- `vite.config.*` – Vite configuration
