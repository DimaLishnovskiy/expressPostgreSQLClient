/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./app.vue",
  ],
  theme: {
    screens: {
      // 'sm': '360px',
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1000px",
      // => @media (min-width: 1000px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "xl-lg": "1400px",
      // => @media (min-width: 1400px) { ... }

      "2xl": "1600px",
      // => @media (min-width: 1600px) { ... }
    },

    container: {
      center: true,

      padding: {
        DEFAULT: "1rem",
        lg: "20px",
        xl: "24px",
      },

      screens: {
        sm: "576px",

        md: "768px",

        lg: "1000px",

        xl: "1200px",
      },
    },

    extend: {
      animation: {
        scaleIn: "scaleIn 0.5s ease-in-out forwards",
      },
      keyframes: {
        scaleIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      colors: {
        secondary50: "#E0F3FA",
        secondary100: "#b1e1f3",

        neutral100: "#F6F6F6",
        neutral200: "#F1F1F1",
        neutral500: "#A5A5A5",
        neutral600: "#7C7C7C",
        neutral700: "#676767",
        neutral900: "#1B1B1B",

        gray200: "#E4E7F2",
        gray300: "#C7D0DA",
        gray700: "#5F6D7B",
        gray800: "#505C68",

        primary50: "#E1F6FD",
        primary100: "#B3EAF9",
        primary500: "#18BAE0",
        primary600: "#12AACC",
        primary700: "#0595B1",
        primary800: "#008298",

        white: "#FFFFFF",

        black: "#000000",
      },
      boxShadow: {
        headerS2: `
          0px 2px 6px 2px rgba(170, 170, 170, 0.3), 
          0px 1px 2px 0px rgba(170, 170, 170, 0.3)
        `,
        dropDownListS3: `
          0px 4px 8px rgba(170, 170, 170, 0.3),
          0px 1px 3px rgba(170, 170, 170, 0.3)
        `,
        mainShadowS3: `
         0px 4px 8px 3px rgba(170, 170, 170, 0.30),
         0px 1px 3px 0px rgba(170, 170, 170, 0.30)
        `,
        mainShadowS5: `
          0px 8px 12px 8px rgba(170, 170, 170, 0.30),
          0px 4px 4px 0px rgba(170, 170, 170, 0.30);
        `,
        shadowS3: `
          0px 4px 8px rgba(177, 203, 213, 0.4),
          0px 1px 3px rgba(177, 203, 213, 0.3);
        `,
        mainShadowS4: `
          0px 6px 10px 4px rgba(170, 170, 170, 0.30),
          0px 2px 3px 0px rgba(170, 170, 170, 0.30);
        `,
        colorS3: `
          0px 4px 8px 3px rgba(177, 203, 213, 0.40),
          0px 1px 3px 0px rgba(177, 203, 213, 0.30);
        `,
        colorS5: `
         0px 6px 10px 4px rgba(177, 203, 213, 0.40),
         0px 2px 3px 0px rgba(177, 203, 213, 0.30);
        `,
      },
    },
  },
};
