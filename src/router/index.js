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
  },

{
  path: '/examenes',
  component: () => import('@/layouts/default/Default.vue'),
  children: [
    {
      path: '',
      name: 'Examenes',
      component: () => import('@/views/Examenes.vue'),
    },
  ]
},

{
  path: '/horarios',
  component: () => import('@/layouts/default/Default.vue'),
  children: [
    {
      path: '',
      name: 'Horarios',
      component: () => import('@/views/Horarios.vue'),
    },
  ]
},
{
  path: '/proyectos',
  component: () => import('@/layouts/default/Default.vue'),
  children: [
    {
      path: '',
      name: 'Proyectos',
      component: () => import('@/views/Proyectos.vue'),
    },
  ]
},
{
  path: '/editarcorreo',
  component: () => import('@/layouts/default/Default.vue'),
  children: [
    {
      path: '',
      name: 'Editarcorreo',
      component: () => import('@/views/Editarcorreo.vue'),
    },
  ]
},
{
  path: '/editardireccion',
  component: () => import('@/layouts/default/Default.vue'),
  children: [
    {
      path: '',
      name: 'Editardireccion',
      component: () => import('@/views/Editardireccion.vue'),
    },
  ]
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
