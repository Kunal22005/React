/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/*
npm install -D tailwindcss@^3 postcss@^8 autoprefixer@^10

npx tailwindcss init -p

@tailwind base;
@tailwind components;
@tailwind utilities;


*/