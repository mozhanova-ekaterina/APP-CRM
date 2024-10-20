// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxt/icon'
  ],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'ui',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  googleFonts: {
    families: {
      Lato: [400, 700],
    }
  }
})