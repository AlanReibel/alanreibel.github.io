// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: false,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    baseURL: "/",
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Alan Reibel Perez - Fullstack Web Developer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Fullstack Web Developer with 12 years of experience, specialized in Vue3, Nuxt3, and Laravel. Expert in high-performance web applications.",
        },
        { name: "format-detection", content: "telephone=no" },
        // SEO Keywords
        { name: "keywords", content: "Fullstack Developer, Vue3, Nuxt3, Laravel, Web Performance, Frontend Developer, Backend Developer, Barcelona, Alan Reibel" },
        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://alanreibel.github.io/" },
        { property: "og:title", content: "Alan Reibel Perez - Fullstack Web Developer" },
        { property: "og:description", content: "Fullstack Web Developer with 12 years of experience, specialized in Vue3, Nuxt3, and Laravel." },
        { property: "og:image", content: "https://alanreibel.github.io/og-image.png" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://alanreibel.github.io/" },
        { name: "twitter:title", content: "Alan Reibel Perez - Fullstack Web Developer" },
        { name: "twitter:description", content: "Fullstack Web Developer with 12 years of experience, specialized in Vue3, Nuxt3, and Laravel." },
        { name: "twitter:image", content: "https://alanreibel.github.io/og-image.png" },
      ],
      link: [
        { rel: "canonical", href: "https://alanreibel.github.io/" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap",
        },
      ],
    },
  },
});
