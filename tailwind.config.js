/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      colors: {
        'primary': '#FBD029',
        'secondary': '#F2F2F2',
        'text-primary': '#333',
        'text-secondary': '#666',
      },
    },
  },
  plugins: [],
};
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   theme: {
//     screens: {
//       mb: "320px",
//       sm: "640px",
//       // => @media (min-width: 640px) { ... }

//       md: "1024px",
//       // => @media (min-width: 1024px) { ... }

//       lg: "1024px",
//       // => @media (min-width: 1280px) { ... }
//     },
//   },
// };
