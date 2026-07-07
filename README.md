<div align="center">

# 🌐 Hnarayna — Immersive 3D Corporate Portfolio

**An award-quality interactive portfolio website with scroll-driven 3D animations**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r184-000000?logo=threedotjs&logoColor=white)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?logo=greensock&logoColor=black)](https://gsap.com/)

</div>

---

## 📌 Overview

Hnarayna is a cinematic, immersive 3D portfolio website that combines **React Three Fiber** (R3F) for real-time WebGL rendering with **GSAP ScrollTrigger** for scroll-driven narrative animations. The site features multiple interactive sections — Hero, Ventures, Projects, and Contact — each with unique 3D scene transitions synchronized to the user's scroll position.

---

## ✨ Key Features

- 🎬 **Scroll-Driven Narrative** — GSAP ScrollTrigger coordinates DOM reveals with 3D scene transitions as users scroll through chapters
- 🌍 **Real-Time 3D Rendering** — React Three Fiber renders interactive WebGL scenes with custom geometry, lighting, and materials
- ✨ **Post-Processing Effects** — Bloom, chromatic aberration, and vignette via `@react-three/postprocessing`
- 🎭 **Smooth Scrolling** — Lenis smooth scroll library for buttery-smooth scroll physics
- 📱 **Responsive Design** — Fully responsive layout with mobile-optimized 3D performance
- ⚡ **State Management** — Zustand store synchronizes scroll progress, active section, and scroll velocity across DOM and canvas layers

---

## 🏗️ Architecture

```
┌─────────────────────────────────────┐
│            Browser Window           │
├──────────────────┬──────────────────┤
│   DOM Layer      │   Canvas Layer   │
│   (React)        │   (R3F / Three)  │
│                  │                  │
│  ┌────────────┐  │  ┌────────────┐  │
│  │ Hero       │  │  │ Narrative  │  │
│  │ Ventures   │◄─┼─►│ Scene      │  │
│  │ Projects   │  │  │ PostFX     │  │
│  │ Contact    │  │  │            │  │
│  └────────────┘  │  └────────────┘  │
│        ▲         │        ▲         │
│        └─────────┼────────┘         │
│            Zustand Store            │
│     (scrollProgress, section)       │
└─────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|:-----------|:--------|
| **React 19** | Component architecture & DOM rendering |
| **React Three Fiber** | Declarative Three.js scene graph |
| **Three.js r184** | WebGL 3D rendering engine |
| **@react-three/drei** | Helper components (Environment, OrbitControls, etc.) |
| **@react-three/postprocessing** | Bloom, chromatic aberration, vignette effects |
| **GSAP + ScrollTrigger** | Scroll-synchronized animations & DOM reveals |
| **Lenis** | Smooth scroll physics |
| **Zustand** | Lightweight reactive state management |
| **TypeScript** | Type-safe development |
| **Vite** | Fast HMR development server & bundler |

---

## 📂 Project Structure

```
src/
├── components/
│   ├── canvas/                  # 3D WebGL components
│   │   ├── NarrativeScene.tsx   # Main 3D scene with scroll-reactive elements
│   │   └── PostEffects.tsx      # Post-processing effect stack
│   └── dom/                     # DOM UI components
│       ├── LandingPage.tsx      # Main page orchestrator (ScrollTrigger setup)
│       ├── Hero.tsx             # Hero section
│       ├── Ventures.tsx         # Ventures/services showcase
│       ├── Projects.tsx         # Project portfolio grid
│       ├── Contact.tsx          # Contact form section
│       ├── Navbar.tsx           # Navigation bar
│       ├── Footer.tsx           # Site footer
│       ├── About.tsx            # About page
│       ├── ServicesPage.tsx     # Services detail page
│       └── Loader.tsx           # Loading screen
├── stores/
│   ├── sceneStore.ts            # Zustand store (scroll state, active section)
│   └── routeStore.ts            # Route management store
└── App.tsx                      # Root app with canvas + DOM layers
```

---

## 🚀 Getting Started

```bash
# Clone and install
git clone https://github.com/manoharverma0/hnarayna.git
cd hnarayna
npm install

# Start development server
npm run dev

# Production build
npm run build
npm run preview
```

---

## 📄 License

This project is for educational and portfolio demonstration purposes.
