# Portfolio Website - React Version

A personal portfolio website built with React and Vite, featuring a nostalgic 90s/00s web design aesthetic. This is the React version of the portfolio website, ready for deployment to Cloudflare Pages.

## Features

- Modern React application with Vite
- React Router for client-side routing
- Draggable windows and interactive UI elements
- Easter eggs and fun interactive features
- Responsive design
- Optimized for Cloudflare Pages deployment

## Tech Stack

- **React** 19.2.0
- **Vite** 7.2.4
- **React Router DOM** 7.12.0
- **React Draggable** 4.5.0
- **Canvas Confetti** 1.9.4

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-simeon-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview the production build:
```bash
npm run preview
```

## Deployment to Cloudflare Pages

This project is configured for deployment to Cloudflare Pages. The `_redirects` file in the `public` folder handles SPA routing.

### Automatic Deployment via Git

1. Push your code to GitHub/GitLab/Bitbucket
2. In Cloudflare Pages dashboard:
   - Click "Create a project"
   - Connect your Git repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
     - **Node version:** 18 or higher
   - Click "Save and Deploy"

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder using Wrangler CLI:
```bash
npm install -g wrangler
wrangler pages deploy dist
```

### Build Configuration

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 18.x or higher

The `_redirects` file ensures proper routing for the single-page application, redirecting all routes to `index.html` with a 200 status code for client-side routing.

## Project Structure

```
portfolio-simeon-react/
├── public/          # Static assets
│   ├── _redirects  # Cloudflare Pages routing rules
│   ├── css/        # Global styles
│   ├── fonts/      # Custom fonts
│   ├── img/        # Images and assets
│   └── sounds/     # Audio files
├── src/
│   ├── components/ # React components
│   ├── pages/      # Page components
│   ├── hooks/      # Custom React hooks
│   ├── context/    # React context providers
│   └── styles/     # Component styles
└── dist/           # Build output (generated)
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

Private project - All rights reserved
