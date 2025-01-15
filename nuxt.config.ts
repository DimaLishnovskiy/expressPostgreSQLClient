// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss"],

  runtimeConfig: {
    public: {
      BASE_URL: process.env.SERVER_ADDRESS || "",
    },
  },

  tailwindcss: {
    cssPath: ["~/assets/tailwind/tailwind.css", { injectPosition: "first" }],
  },
});
