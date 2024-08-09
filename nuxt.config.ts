export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['@/assets/style/antd.css', '@/assets/style/index.css'],
  modules: ['@nuxt/ui', '@ant-design-vue/nuxt', 'nuxt-svgo', '@vueuse/nuxt'],
  svgo: {
    autoImportPath: false,
    defaultImport: 'component'
  },
  antd: {
    extractStyle: true
  }
})
