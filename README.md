# React + Vite

## Steps to install React + Vite

- npm create vite@latest
  - name the project and package
  - select react
  - select javascript
- cd vite-project
- npm install (to instal dependencies and node modules)
- npm run dev

## Steps to install tailwindcss

- npm install-D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- add following paths in tailwind.config.js file to add all files to the template files

```jsx
module.exports = {
  content: [content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- add tailwind directives for each of tailwind layers to "./src/index.css"

```jsx
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- npm run start
