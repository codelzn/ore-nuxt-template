export default defineNuxtConfig({
  srcDir: "src",
  ssr: true,
  typescript: {
    strict: true,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/device",
    "@vueuse/nuxt",
  ],
  tailwindcss: {
    viewer: false,
  },
});
