import { Noir } from './themes/noir'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['@/assets/style/index.css', 'primeicons/primeicons.css'],
  modules: [
    '@nuxt/ui',
    '@primevue/nuxt-module',
    '@formkit/auto-animate/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-svgo'
  ],
  primevue: {
    composables: {
      exclude: ['useToast']
    },
    options: {
      theme: {
        preset: Noir,
        options: {
          darkModeSelector: '.dark'
        }
      }
    }
  },
  svgo: {
    autoImportPath: false,
    defaultImport: 'component'
  },
  imports: {
    dirs: ['./store']
  },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }]
    }
  },
  ssr: true,
  routeRules: {
    '/app': { prerender: true },
    '/app/category': { prerender: true },
    '/app/*': { ssr: false },
    '/account/*': { ssr: false },
    '/api/*': { ssr: false },
    '/org/*': { ssr: false }
  }
})
