import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Главная'
    }
  },
  // {
  //   path: '/user',
  //   // beforeEnter: (to, from, next) => {
  //   beforeEnter: (_, __, next) => {
  //     next(vm => {
  //       vm.$route.push('/')
  //     })
  //   }
  // },
  {
    path: '/user/:id',
    name: 'User',
    component: User,
    meta: {
      title: 'Пользователь'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
