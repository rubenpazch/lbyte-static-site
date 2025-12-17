# L BYTE - Modern Software Development

A modern, responsive website for L BYTE software development company built with React, TypeScript, and Vite.

## 🚀 Features

- Modern UI/UX with gradient effects and glassmorphism
- Fully responsive design
- Smooth animations and transitions
- Service showcase
- Company statistics
- Contact information

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Express** - Production server

## 📦 Installation

```bash
npm install
```

## 🔧 Development

```bash
npm run dev
```

Visit `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

## 🚀 Deploy to Heroku

### Prerequisites
- Heroku CLI installed
- Heroku account

### Deployment Steps

```bash
# Login to Heroku
heroku login

# Create a new Heroku app
heroku create lbyte-website

# Push to Heroku
git push heroku main

# Open the app
heroku open
```

### Environment Variables

No environment variables required for basic deployment.

## 📝 Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services grid
│   ├── About.tsx       # About section with stats
│   ├── Contact.tsx     # Contact information
│   └── Footer.tsx      # Footer with links
├── styles/
│   └── main.css        # Global styles
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## 🎨 Customization

### Colors

Edit the CSS variables in `src/styles/main.css`:

```css
:root {
  --orange: #ff6a00;
  --green: #2ecc71;
  --purple: #7f3fbf;
  --dark: #0a0a0a;
  --white: #ffffff;
}
```

### Content

Update component files in `src/components/` to modify text and content.

## 📄 License

MIT

## 👤 Author

L BYTE - Software Development Company
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# lbyte-static-site
