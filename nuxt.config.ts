export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['@/assets/style/index.css'],
  modules: ['@nuxt/ui', '@formkit/auto-animate/nuxt', '@pinia/nuxt', '@vueuse/nuxt', 'nuxt-svgo'],
  imports: {
    dirs: ['./store']
  },
  svgo: {
    autoImportPath: false,
    defaultImport: 'component'
  },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }]
    }
  },
  routeRules: {
    '/app': { prerender: true },
    '/app/category': { prerender: true },
    '*': { ssr: false }
  }
})
