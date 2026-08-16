<div align="center">

# 🚀 Phath Chengkeang — Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.2.12-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<p align="center">
  A modern, high-performance personal portfolio website built with <b>Next.js 16</b>, <b>React 19</b>, <b>Tailwind CSS v4</b>, and <b>Framer Motion</b>. Featuring rich glassmorphism aesthetics, interactive canvas background, responsive animations, and seamless dark mode support.
</p>

[**Explore Live Demo »**](https://github.com/chengkeangphath-creator/keangporfolio)

</div>

---

## 🌟 Features

- 🎨 **Modern Glassmorphism UI** — Sleek dark theme with tailored glowing gradients, backdrop blurs, and polished micro-interactions.
- ✨ **Interactive Background** — Custom HTML5 canvas particle system responsive to cursor movements.
- 📱 **Fully Responsive Design** — Optimized for mobile phones, tablets, laptops, and ultra-wide desktops.
- ⚡ **Cutting-Edge Tech Stack** — Built on Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.
- 🎭 **Smooth Animations** — Fluid scroll-triggered entrance transitions powered by Framer Motion.
- 🧩 **Comprehensive Portfolio Sections**:
  - 🏠 **Hero** — Animated typing effect, profile showcase, quick actions, and status badges.
  - 👨‍💻 **About Me** — Bio, core values, university education, and career aspirations.
  - 🛠️ **Skills Matrix** — Grouped technical competencies (Frontend, Backend, Database, Tools) with proficiency indicators.
  - 📂 **Featured Projects** — Showcase with technology tags, live demo links, and repository access.
  - ⏳ **Experience & Education Timeline** — Chronological journey of academic and project milestones.
  - 📜 **Certifications & Achievements** — Credential highlights with modal previews.
  - 📈 **Learning Journey & GitHub Activity** — Visual roadmap and contribution insights.
  - 📬 **Interactive Contact Form** — Functional message form with celebration confetti effects upon submission.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Interactive FX** | [Canvas Confetti](https://github.com/catdad/canvas-confetti) |
| **Fonts** | [Geist Sans & Geist Mono](https://vercel.com/font) |

---

## 📂 Project Structure

```text
keangportfolio/
├── public/                # Static assets, images, and icons
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── globals.css    # Global stylesheet & design system variables
│   │   ├── layout.tsx     # Root layout with SEO metadata & theme provider
│   │   └── page.tsx       # Main portfolio landing page
│   └── components/        # Reusable UI components & sections
│       ├── ContactForm.tsx
│       ├── Footer.tsx
│       ├── GitHubCalendar.tsx
│       ├── InteractiveBackground.tsx
│       ├── Navbar.tsx
│       ├── ThemeContext.tsx
│       ├── TypingEffect.tsx
│       └── sections/      # Portfolio sections
│           ├── About.tsx
│           ├── Achievements.tsx
│           ├── Certificates.tsx
│           ├── Contact.tsx
│           ├── Hero.tsx
│           ├── LearningJourney.tsx
│           ├── Projects.tsx
│           ├── Skills.tsx
│           └── Timeline.tsx
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
└── tsconfig.json          # TypeScript configuration
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- **Node.js**: `v18.18.0` or later ([Download Node.js](https://nodejs.org/))
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/chengkeangphath-creator/keangporfolio.git
   cd keangporfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## 📦 Available Scripts

In the project directory, you can run:

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server with Hot Module Replacement |
| `npm run build` | Compiles the production build for deployment |
| `npm run start` | Runs the compiled production server |
| `npm run lint` | Runs ESLint to check for code quality and errors |

---

## 🌐 Deployment

The easiest way to deploy this Next.js app is using the **Vercel Platform**:

1. Push your changes to GitHub.
2. Import your repository into [Vercel](https://vercel.com/new).
3. Vercel will automatically detect Next.js and build the site.

---

## 👤 Author

**Phath Chengkeang**
- **University:** Norton University (Computer Science)
- **GitHub:** [@chengkeangphath-creator](https://github.com/chengkeangphath-creator)
- **Location:** Phnom Penh, Cambodia

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
