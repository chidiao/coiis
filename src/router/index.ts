import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/pages/home/index.vue') },
  { path: '/collections', component: () => import('@/pages/collections.vue') },
  { path: '/categories', component: () => import('@/pages/categories.vue') }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
