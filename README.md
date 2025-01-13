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

# How it works:

## Click on edit button

- on clicking it automatically opens the dialog box to upload image
- provides only one picture upload functionality
- on seletion displays the image as the avatar

# concepts used:

## useState hook

- to store the avatarUrl and update it

## useRef hook

- to directly manipulate the DOM element
- simulate click event on upload image of input file type

## event.preventDefault()

- to stop the page from reloading on each click event

## Form data

# Screenshot of component

- avatar url
  ![Avatar Component](screenshots/Image Uploader - Google Chrome 2025-01-13 22-24-32.mp4)
