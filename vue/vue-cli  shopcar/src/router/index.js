import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import details from '@/components/details'
import shopcar from '@/components/shopcar'
import me from '@/components/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    {
      path: '/me',
      name: 'me',
      component: me
    }
  ]
})
