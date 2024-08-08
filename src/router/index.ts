import { createWebHistory, createRouter } from 'vue-router'
import account from './account'

const routes = [
  ...account,
  {
    path: '/search',
    component: () => import('@/layouts/FixedHeader.vue'),
    children: [{ path: '/search', component: () => import('@/pages/search/index.vue') }]
  },
  {
    path: '/',
    component: () => import('@/layouts/FixedMenu.vue'),
    children: [
      { path: '/', component: () => import('@/pages/home/index.vue') },
      { path: '/collections', component: () => import('@/pages/collections.vue') },
      { path: '/categories', component: () => import('@/pages/categories.vue') },
      { path: '/workspace', component: () => import('@/pages/workspace/index.vue') }
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => {
    return { top: 0 }
  }
})
