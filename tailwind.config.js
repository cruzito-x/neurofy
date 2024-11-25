/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#0066DE", // Principal
        dark: "#0D3F79",
        light: "#4A90E2",
      },
      secondary: {
        lightest: "#F7F8FA",
        light: "#EDEFF2",
        DEFAULT: "#BBBBBB",
        medium: "#747474",
        dark: "#666666",
      },
      green: {
        DEFAULT: "#56D297", // Éxito
      },
      red: {
        light: "#F3574D",
        DEFAULT: "#E24A4A",
        dark: "#DE0000",
      },
      pink: {
        DEFAULT: "#E24A82", // Rosa
      },
      orange: {
        DEFAULT: "#E2844A", // Advertencia
      },
      yellow: {
        DEFAULT: "#E2C44A", // Alerta
      },
      white: {
        DEFAULT: "#FFFFFF", // Blanco
      },
    },
  },
  plugins: [],
};
