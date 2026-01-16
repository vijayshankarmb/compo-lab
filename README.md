# CompoLab

CompoLab is a modern, high-performance SaaS landing page built with **Next.js 16**, **Tailwind CSS**, and **Framer Motion**. It features a futuristic, dark-themed design with fluid animations and a responsive component architecture, designed to provide an exceptional user experience.

## 🚀 Features

- **Modern Tech Stack**: Built with the latest Next.js 16 (App Router) and React 19.
- **Responsive Design**: Fully responsive layout that looks great on all devices, from mobile to desktop.
- **Advanced Animations**: Smooth, fluid transitions and micro-interactions using `motion` (Framer Motion) and `tw-animate-css`.
- **Dark Mode Aesthetic**: A sleek, dark-themed interface with carefully curated color palettes and glassmorphism effects.
- **Interactive UI**: Magnetic navigation, orbit animations, and dynamic feature showcases.
- **Modular Components**: A clean, reusable component structure separating `common` UI elements from specific `landing` page sections.
- **Typography**: Uses `Poppins` for a modern, geometric look.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Motion](https://motion.dev/) (Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/) (Slot)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Poppins)

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router pages
│   ├── about/            # About page
│   ├── features/         # Features page
│   ├── pricing/          # Pricing page
│   ├── globals.css       # Global styles and Tailwind imports
│   └── layout.tsx        # Root layout with Navbar/Footer
├── components/           # React Components
│   ├── common/           # Shared components (Navbar, Footer, etc.)
│   ├── landing/          # Landing page specific sections (Hero, Orbit, etc.)
│   └── ui/               # Reusable UI primitives (Buttons, Cards)
└── config/               # Configuration files (Navigation, etc.)
```

## ⚡ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/compo-lab.git
   cd compo-lab
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **View the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📜 License

This project is licensed under the MIT License. Feel free to use it for personal and commercial projects.
