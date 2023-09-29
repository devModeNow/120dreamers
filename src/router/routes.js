const routes = [
  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      // { path: '/', redirect: '/login' },
      { 
        path: '',
        name: 'landing', 
        component: () => import('pages/IndexPage.vue') 
      },
      { path: 'login', component: () => import('src/pages/LoginPage.vue') },
      { path: 'register', component: () => import('src/pages/RegisterPage.vue') }
    ],
    meta: { auth: false }
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('pages/Dashboard.vue') 
      },
      { 
        path: 'dailyJournal',
        name: 'dailyJournal',
        component: () => import('pages/DailyJournal.vue') 
      },
      { 
        path: 'portfolio',
        name: 'portfolio',
        component: () => import('pages/Portfolio.vue') 
      },
      { 
        path: 'newTrade',
        name: 'newTrade',
        component: () => import('pages/NewTrade.vue') 
      },
    ],
    meta: { auth: true }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
