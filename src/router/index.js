import Vue from 'vue'
import Router from 'vue-router'

import Container from '@/views/Container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container,
      children: [{
        path: '/hotel',
        name: 'Hotel',
        component: require('@/views/Hotel')
      }, {
        path: '/cruise',
        name: 'Cruise',
        component: require('@/views/Cruise')
      }, {
        path: '/login',
        name: 'Login',
        component: require('@/views/login')
      }]
    }
  ]
})
