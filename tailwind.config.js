// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional brand palette
        brand: {
          DEFAULT: "#4f46e5", // main indigo
          600: "#4f46e5",
          700: "#4338ca",
        },
        accent: "#14b8a6",   // teal accent
        neutral: "#0f1724",  // deep slate for headers/background
        muted: "#64748b",    // muted gray for captions
        surface: "#f7fafc",  // light surface
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2,6,23,0.08)",
        elevated: "0 14px 40px rgba(2,6,23,0.12)",
      },
      borderRadius: {
        xl2: "18px",
      },
    },
  },
  plugins: [],
};
