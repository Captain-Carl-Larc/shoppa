# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Shoppa Tasks

A responsive React app to manage tasks and explore public API data.

### Features

- Add, complete, delete, and filter tasks (with localStorage persistence)
- Browse and search public API data (with pagination)
- Responsive design with Tailwind CSS v4
- Reusable components and clean architecture

### Getting Started

```bash
pnpm install
pnpm dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## Folder Structure

- `src/components` – Reusable UI components
- `src/pages` – App pages (Home, Tasks, Explore)
- `src/hooks` – Custom React hooks
