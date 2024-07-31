import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/pages/index.vue') },
  { path: '/collections', component: () => import('@/pages/collections.vue') }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
