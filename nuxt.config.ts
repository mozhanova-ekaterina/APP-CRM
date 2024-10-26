// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@vee-validate/nuxt'
  ],

  shadcn: {
    prefix: 'ui',
    componentDir: './components/ui'
  },
  googleFonts: {
    families: {
      Lato: [400, 700],
    }
  },
  pinia: {
    storesDirs: ['./stores/**']
  },
  veeValidate: {
    autoImports: true
  }
})