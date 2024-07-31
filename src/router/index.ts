import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [{ path: '/', component: () => import('@/pages/index.vue') }]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
