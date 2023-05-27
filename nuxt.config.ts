// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
      head: {
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1",
         title: "Adhi Jaya Persada - Gorong Gorong Baja",
         meta: [
            {
               name: "description",
               content: "Adhi Jaya Persada menyediakan hampir semua produk baja galvanis untuk kebutuhan proyek infrastruktur seperti Corrugated Steel , Hot Dip Galvanize, Steel Grating, Flex Beam Guard Rail dan lain-lain.",
            },
            { name: "keywords", content: "adhi jaya persada, gorong gorong, suplier steel, baja galvanis" },
         ],
         link: [
            { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
            { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
            { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
            { rel: "manifest", href: "/site.webmanifest" },

            {
               href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
               rel: "stylesheet",
            },
         ],
         script: [
            {
               src: "https://unpkg.com/akar-icons-fonts",
            },
         ],
      },
      pageTransition: { name: "page", mode: "out-in" },
   },
   css: ["~/assets/css/main.css"],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
   modules: ["nuxt-swiper"],
});
