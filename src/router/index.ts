import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/search',
    component: () => import('@/layouts/FixHeader.vue'),
    children: [{ path: '/search', component: () => import('@/pages/search/index.vue') }]
  },
  {
    path: '/',
    component: () => import('@/layouts/Default.vue'),
    children: [
      { path: '/', component: () => import('@/pages/home/index.vue') },
      { path: '/collections', component: () => import('@/pages/collections.vue') },
      { path: '/categories', component: () => import('@/pages/categories.vue') }
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
