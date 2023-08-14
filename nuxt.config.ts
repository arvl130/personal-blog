// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
          Inter: true,
          "Josefin+Sans": true,
          Lato: true,
          Raleway: true,
          "DM+Sans": true,
        },
      },
    ],
  ],
})
