# 📦 MFE About

This project is a base **microfrontend (MFE)** built with **React**, **Vite**, and **TypeScript**, featuring internationalization support with **Tolgee**. It is designed to be integrated into a container application using **Single SPA**.

---

## 📑 Table of Contents

- [Features](#-features)
- [Project structure](#-project-structure)
- [Installation](#-installation)
- [Running tests](#-running-tests)
- [Internationalization (Tolgee)](#-internationalization-tolgee)
- [Linting & formatting](#-linting--formatting)
- [Useful scripts](#-useful-scripts)
- [Single SPA integration](#-single-spa-integration)
- [Quality checklist](#-quality-checklist)
- [Author](#-author)
- [License](#-license)

---

## 🚀 Features

- ⚛️ React + Vite
- 🌍 Internationalization with Tolgee
- 🧪 Testing with Vitest + React Testing Library
- 🎨 Automated linting & formatting via Husky
- 🧩 Compatible with Single SPA container
- 🧰 DevTools support (development only)

---

## 📁 Project structure

```
src/
├── App.tsx             # Main component
├── main.tsx            # Vite entry point
├── test-utils.ts       # Test helpers
├── i18n/               # Tolgee config
├── components/         # (Optional)
└── ...
```

---

## 🛠️ Installation

```bash
npm install
```

---

## 🧪 Running tests

```bash
npm test
# or with coverage
npm test:coverage
```

> Tests are powered by `Vitest` and `React Testing Library`. They are also run automatically on pre-push.

---

## 💬 Internationalization (Tolgee)

- The Tolgee instance is provided by the shell via `window.tolgee`. (To be fixed in future releases)
- This MFE listens for and uses that instance.
- Default language: English (`en`).

---

## 🧹 Linting & formatting

```bash
npm lint
npm format
```

> ✅ Automatically run on pre-commit via `husky + lint-staged`.

---

## 📜 Useful scripts

```bash
npm dev:full      # Start development server
npm build         # Build for production (Single SPA)
npm preview       # Preview production build
npm type-check    # Run TypeScript type checks
```

---

## 🧩 Single SPA integration

This microfrontend exposes the required lifecycle modules to be loaded by a Single SPA container.

> Make sure the shell provides `window.tolgee` before mounting this MFE.

---

## ✅ Quality checklist

- [x] ESLint + Prettier
- [x] Husky + lint-staged
- [x] Unit testing
- [x] i18n support
- [x] Type checking with `tsc --noEmit`
- [x] Ready for CI integration

---

## 👤 Author

Made with ❤️ by Iván Tisera – Software Engineer
