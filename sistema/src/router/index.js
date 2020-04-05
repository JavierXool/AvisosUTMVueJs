import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Actividades from '../components/Actividades.vue'
import Conferencias from '../components/Conferencias.vue'
import Deportes from '../components/Deportes.vue'
import EvaluacionDocente from '../components/EvaluacionDocente.vue'
import Calificaciones from '../components/Calificaciones.vue'
import Horarios from '../components/Horarios.vue'
import Usuarios from '../components/Usuarios.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/actividades',
    name: 'Actividades',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Actividades
  },

  {
    path: '/conferencias',
    name: 'Conferencias',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Conferencias
  },
  {
    path: '/deportes',
    name: 'Deportes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Deportes
  },
  {
    path: '/calificaciones',
    name: 'Calificaciones',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Usuarios
  },
  {
    path: '/usuarios',
    name: 'Usuario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Usuarios
  },
  {
    path: '/evaluaciondocente',
    name: 'EvaluacionDocente',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: EvaluacionDocente
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
