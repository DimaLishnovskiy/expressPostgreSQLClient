// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxthub/core"],

  runtimeConfig: {
    public: {
      BASE_URL: `http://${process.env.DB_HOST || "localhost"}:${
        process.env.SERVER_PORT || 5001
      }`,
    },
  },

  tailwindcss: {
    cssPath: ["~/assets/tailwind/tailwind.css", { injectPosition: "first" }],
  },
});