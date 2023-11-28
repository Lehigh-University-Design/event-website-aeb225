module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        indigo: { 200: "#9abcdb" },
        blue_gray: { 500: "#647585", 900: "#2e2e2e" },
        gray: { 900: "#22291d" },
        yellow: { 50: "#fff7e9" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        inknutantiqua: "Inknut Antiqua",
        besley: "Besley",
        markazitext: "Markazi Text",
        metal: "Metal",
        montaga: "Montaga",
        dosis: "Dosis",
        jacquesfrancois: "Jacques Francois",
        montaguslab: "Montagu Slab",
        merriweather: "Merriweather",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
