import Vue from 'vue'
import VueRouter from 'vue-router'
import tabBar from '@/views/tabBar'
import Home from '@/views/Home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tabBar',
    component: tabBar,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
