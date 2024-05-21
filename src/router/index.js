import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // Otras rutas...
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/cursos',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Cursos',
        component: () => import('@/views/Cursos.vue'),
      },
    ]
  },
  {
    path: '/noticias',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Noticias',
        component: () => import('@/views/Noticias.vue'),
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
