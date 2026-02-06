# Project Setup: Next.js with Tailwind CSS and Lucide React

This document outlines the steps to set up a new Next.js project with Tailwind CSS for styling and Lucide React for icons, as a foundation for your revamped property website.

## 1. Create a New Next.js Project

Open your terminal and run the following command. Choose TypeScript, ESLint, Tailwind CSS, `src/` directory, App Router, and disable import alias for simplicity.

```bash
npx create-next-app@latest my-property-app
```

Navigate into your new project directory:

```bash
cd my-property-app
```

## 2. Configure Tailwind CSS

`create-next-app` typically sets up Tailwind CSS automatically. Verify your `tailwind.config.js` and `globals.css` files.

### `tailwind.config.js` (Verify/Update)

Ensure your `tailwind.config.js` looks similar to this, especially the `content` array to include all your component files:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Define PropertyGuru Red
        'primary-red': '#ED1C24', 
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // Custom subtle shadow
      }
    },
  },
  plugins: [],
}
```

### `app/globals.css` (Verify)

Ensure your `app/globals.css` (or `styles/globals.css` if not using `src/app`) includes the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add custom fonts if needed */
/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap'); */

html, body {
  font-family: 'Inter', sans-serif; /* Or 'Roboto', sans-serif; */
}
```
*Note: You might need to add `@import` for Google Fonts in your CSS or link them in your `layout.tsx` if you want to use Inter/Roboto from Google Fonts.*

## 3. Install Lucide React Icons

Install Lucide React for a comprehensive set of clean icons:

```bash
npm install lucide-react
# or
yarn add lucide-react
```

## 4. Integrate Custom Fonts (Optional, but Recommended for Inter/Roboto)

If `create-next-app` didn't configure Inter/Roboto via `@next/font/google`, you can do it manually.

### Option A: Using `@next/font/google` (Recommended for Next.js 13+)

In your `app/layout.tsx` (or `pages/_app.tsx`), you can import and configure the fonts:

```typescript jsx
// app/layout.tsx
import './globals.css'
import { Inter, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

Then, in `tailwind.config.js`, configure Tailwind to use these font variables:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        roboto: ['var(--font-roboto)'],
      },
      // ... other theme extensions
    },
  },
  // ...
}
```

Finally, apply the font classes to your `body` in `globals.css` or directly in components:

```css
/* app/globals.css */
body {
  @apply font-inter; /* Or font-roboto */
}
```

### Option B: Using traditional Google Fonts link (Less ideal for Next.js 13+)

You can add a link tag to your `app/layout.tsx` or `pages/_document.tsx`:

```html
<head>
  {/* ... other head elements */}
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
</head>
```
And then use `font-family: 'Inter', sans-serif;` in your CSS.

## 5. Start Your Development Server

```bash
npm run dev
# or
yarn dev
```

You are now ready to start developing your components!