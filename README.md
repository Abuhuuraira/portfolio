# Abu Huraira — Portfolio

A modern, animated personal portfolio for **Abu Huraira**, a Frontend & React Developer. Built with React and Vite, styled with Tailwind CSS, and brought to life with GSAP, Framer Motion, and 3D visuals powered by Three.js.

🔗 **Live sections:** Hero, About, Skills, Services, Experience, Projects, Certifications, Education, Contact.

## Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **Animation:** [GSAP](https://gsap.com/), [Framer Motion](https://www.framer.com/motion/)
- **3D / Graphics:** [Three.js](https://threejs.org/) via [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) & [@react-three/drei](https://github.com/pmndrs/drei)
- **UX extras:** react-type-animation, react-intersection-observer, custom cursor, scroll-spy, count-up hooks
- **Icons:** [lucide-react](https://lucide.dev/)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+ and npm

### Installation

```bash
# clone the repo
git clone https://github.com/Abuhuuraira/portfolio.git
cd portfolio

# install dependencies
npm install
```

### Development

```bash
npm run dev
```

Runs the app in development mode. Open the URL printed in the terminal (default [http://localhost:5173](http://localhost:5173)).

### Build

```bash
npm run build      # production build to ./dist
npm run preview    # preview the production build locally
```

## Project Structure

```
portfolio/
├── index.html              # entry HTML (SEO + font setup)
├── public/                 # static assets (favicon, etc.)
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # root component / layout
│   ├── index.css           # global styles + Tailwind directives
│   ├── components/         # page sections & UI
│   │   ├── Navbar.jsx      Hero.jsx        About.jsx
│   │   ├── Skills.jsx      Services.jsx    Experience.jsx
│   │   ├── Projects.jsx    Certifications.jsx
│   │   ├── Education.jsx   Contact.jsx     Footer.jsx
│   │   ├── Loader.jsx      CustomCursor.jsx
│   ├── hooks/              # useCountUp, useScrollSpy
│   └── utils/              # animations
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## License

This project is personal portfolio work. All rights reserved © Abu Huraira.
