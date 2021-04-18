import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/transfers',
    name: 'Transfers',
    component: () => import(/* webpackChunkName: "transfers" */ '../views/Transfers.vue')
  },
  {
    path: '/recipients',
    name: 'Recipients',
    component: () => import(/* webpackChunkName: "transfers" */ '../views/Recipients.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
