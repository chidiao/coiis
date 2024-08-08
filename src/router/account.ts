export default [
  {
    path: '/account',
    children: [
      {
        path: 'login',
        component: () => import('@/pages/account/login.vue')
      },
      {
        path: 'signup',
        component: () => import('@/pages/account/signup.vue')
      },
      {
        path: 'forget',
        component: () => import('@/pages/account/forget.vue')
      }
    ]
  }
]
