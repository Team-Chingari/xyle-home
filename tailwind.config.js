/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        judson: ["Judson", "serif"],
        georgia: ["Georgia", "serif"],
        jaldi: ["Jaldi", "sans-serif"],
      },
    },
  },
  plugins: [],
}

