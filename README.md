<div align="center">

# ⚡ Truong Van Phuong — AI Engineer & Backend Developer Portfolio

<p align="center">
  <strong>Production AI Systems • LLM Applications • RAG Pipelines • Resilient Backend Microservices</strong>
</p>

[![Next.js](https://img.shields.io/badge/Next.js-16.3.8-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-000000?style=for-the-badge&logo=vercel)](https://turbo.build/pack)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

<br />

[Explore Live Demo](#) • [Download Resume](public/assets/resume.pdf) • [Report Bug](https://github.com/phuongtv275/portfolio/issues)

</div>

---

## 🌟 Overview

This is the personal portfolio website of **Truong Van Phuong**, an AI Engineer and Backend Developer specializing in architecting production-grade RAG systems, autonomous agent workflows (LangChain, LangGraph, LightRAG), vector databases (Qdrant), and high-throughput asynchronous microservices (FastAPI, Docker).

Built from the ground up with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**, this project combines modern web engineering best practices, vivid cyber-bio aesthetic design, WCAG AA accessibility, and a 100% JSON-driven data architecture.

---

## 🚀 Key Features

* **⚡ Blazing Fast Next.js 16 + Turbopack**: Fully static prerendered output for instant page transitions and near-zero First Contentful Paint (FCP).
* **🗄️ 100% JSON-Driven Data Architecture (Local Mock Backend)**: All website content, project descriptions, technical skills, timeline milestones, and SEO metadata are isolated in clean JSON files (`src/data/*.json`). Anyone can customize the portfolio without touching React JSX code.
* **🌓 Seamless Dark / Light Mode (WCAG AA Compliant)**: Powered by `next-themes` with carefully tuned contrast ratios (emerald `#15803d` for light mode with 4.56:1 contrast, cyber-green `#4bde55` for dark mode with 10.7:1 contrast).
* **🎯 Interactive Projects Filter**: Real-time project categorization (All Works, AI & LLM Systems, Distributed Backend, Fullstack Architecture) with live count badges and friendly empty-state handling.
* **📱 Mobile-First Responsive Design**: Full viewport adaptability with sticky glassmorphism navigation, mobile drawer with backdrop blur overlay, and keyboard accessibility (`Escape` key dismiss).
* **📋 1-Click Contact & Copy**: Quick copy-to-clipboard for email and phone numbers with visual feedback, direct mailto action, and resume download.

---

## 🛠️ Tech Stack

| Domain | Technologies & Libraries |
| :--- | :--- |
| **Framework & Runtime** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack), [React 19](https://react.dev/), [Node.js](https://nodejs.org/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), CSS Variables Design Tokens |
| **Theme Engine** | [`next-themes`](https://github.com/pacocoursey/next-themes) |
| **Icons & Visuals** | [`lucide-react`](https://lucide.dev/), [`react-icons`](https://react-icons.github.io/react-icons/) |
| **Quality & Linting** | [ESLint 9](https://eslint.org/) with Flat Config |

---

## 📁 Architecture: Local Mock Backend (`src/data/`)

All data displayed across the website is decoupled from UI presentation components and organized into 5 structured JSON entities:

```
src/data/
├── site.json          # Site metadata, navigation links, and section copy
├── personal.json      # Profile, bio, education, contacts, socials, stats
├── skills.json        # Technical arsenal categories and proficiency levels
├── projects.json      # Project showcase items, category filters, empty state
├── experience.json    # Professional timeline, milestones, achievements
└── index.ts           # Type-safe Data Gateway / Facade
```

### ✏️ How to Customize Your Content

| What you want to edit | Target File | Description |
| :--- | :--- | :--- |
| **Headline, titles, section copy, footer note** | [`src/data/site.json`](src/data/site.json) | Customize all interface copy, navigation links, and SEO tags. |
| **Name, bio, contact info, socials, stats** | [`src/data/personal.json`](src/data/personal.json) | Update your profile details, education, phone, and LinkedIn. |
| **Skills & technologies** | [`src/data/skills.json`](src/data/skills.json) | Add/remove skills or change proficiency (`Core`, `Proficient`, `Familiar`). |
| **Projects & portfolios** | [`src/data/projects.json`](src/data/projects.json) | Add new projects with GitHub links, live demos, and tech tags. |
| **Work experience & track record** | [`src/data/experience.json`](src/data/experience.json) | Update your work history, company details, and key achievements. |

---

## 🏗️ Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   └── resume.pdf         # Resume PDF asset
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind CSS v4 variables & custom themes
│   │   ├── layout.tsx         # Root layout, ThemeProvider & SEO metadata
│   │   └── page.tsx           # Home page assembling all portfolio sections
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Sticky navigation with mobile drawer
│   │   │   ├── Footer.tsx     # Footer with social links & back-to-top
│   │   │   └── ThemeProvider.tsx # Client-side theme context
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Hero banner with metrics & CTAs
│   │   │   ├── AboutSection.tsx      # Bio, education & engineering pillars
│   │   │   ├── SkillsSection.tsx     # Tech stack grid with brand icons
│   │   │   ├── ExperienceSection.tsx # Chronological career timeline
│   │   │   ├── ProjectsSection.tsx   # Filterable selected projects
│   │   │   └── ContactSection.tsx    # Direct contact boxes & copy helpers
│   │   └── ui/
│   │       ├── Badge.tsx      # Theme-aware badge primitive
│   │       ├── Button.tsx     # Accessible polymorphic button / link
│   │       ├── ProjectCard.tsx # Detailed card view for projects
│   │       ├── TechIcon.tsx   # Normalized brand icon renderer
│   │       └── ThemeToggle.tsx # Animated dark / light switcher
│   ├── data/                  # 100% JSON-driven data layer
│   │   ├── site.json
│   │   ├── personal.json
│   │   ├── skills.json
│   │   ├── projects.json
│   │   ├── experience.json
│   │   └── index.ts
│   ├── lib/
│   │   └── utils.ts           # Class merge helper (clsx + tailwind-merge)
│   └── types/
│       └── index.ts           # Strict TypeScript contracts & models
├── package.json
├── tsconfig.json
└── README.md
```

---

## 💻 Getting Started

### Prerequisites
- **Node.js**: `v20.x` or higher
- **Package Manager**: `npm` (recommended)

### 1. Clone the repository
```bash
git clone git@github.com:phuongtv275/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 4. Build for production
```bash
npm run build
npm run start
```

### 5. Run verification suite
```bash
# Check TypeScript types
npx tsc --noEmit

# Run ESLint check
npm run lint
```

---

## 🤝 Git & Contribution Guidelines

This repository follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

* `feat(...)`: New features or sections
* `fix(...)`: Bug fixes or UI contrast adjustments
* `docs(...)`: Documentation and README updates
* `chore(...)`: Configuration or maintenance tasks
* `refactor(...)`: Code refactoring without behavioral changes

---

## 📬 Contact & Connect

**Truong Van Phuong** — AI Engineer & Backend Developer  
📍 Da Nang, Vietnam  
📧 Email: [phuongtv.it275@gmail.com](mailto:phuongtv.it275@gmail.com)  
🐙 GitHub: [@trgphun](https://github.com/trgphun) / [@phuongtv275](https://github.com/phuongtv275)  
🔗 LinkedIn: [linkedin.com/in/phuongtv](https://linkedin.com)

---

<div align="center">
  <sub>Built with ❤️ using Next.js 16, TypeScript & Tailwind CSS v4.</sub>
</div>
