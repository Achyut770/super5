/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ED5311",
        thamarblack: "#181818",
        licoricestick: "#B23E3E",
      },
      dropShadow: {
        d1: "0px 0px 20px rgba(187, 187, 187, 0.25)",
        d2: "4px 4px 8px rgba(103, 103, 103, 0.25) -4px -4px 8px #FFF",
      },
      boxShadow: {
        c1: "0px 0px 20px 0px rgba(187, 187, 187, 0.25)",
        c2: "0px 0px 20px 0px #BBBBBB40",
        c3: "0px 0px 14px 0px rgba(207, 207, 207, 0.25)",
      },
    },
  },
  plugins: [],
};
