import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["~/src/main.scss"],
    modules: [
        '@inkline/nuxt'
    ],
    inkline: {
        // Plugin options (optional)
        'inkline.css' : true,
    }
})
