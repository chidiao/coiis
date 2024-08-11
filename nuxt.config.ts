export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: { enabled: false },
  css: ['@/assets/style/antd.css', '@/assets/style/index.css'],
  modules: [
    '@nuxt/ui',
    '@formkit/auto-animate/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-svgo',
    '@ant-design-vue/nuxt'
  ],
  imports: {
    dirs: ['./store']
  },
  svgo: {
    autoImportPath: false,
    defaultImport: 'component'
  },
  antd: {
    extractStyle: true
  }
})
