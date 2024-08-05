import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      defaultImport: 'component'
    }),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
