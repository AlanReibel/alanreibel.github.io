// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: false,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    baseURL: "/profile/",
    head: {
      title: "Alan Reibel Perez - Fullstack Web Developer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Fullstack Web Developer with 11 years of experience, specialized in Vanilla JS & CSS, Vue3, Nuxt3, Pinia and Laravel.",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap",
        },
      ],
    },
  },
});
