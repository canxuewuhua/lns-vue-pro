import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloVue from '@/components/day01/HelloVue'
import HelloTest from '@/components/day01/HelloTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/day01/HelloVue',
      name: 'HelloVue',
      component: HelloVue
    }
    ,
    {
      path: '/day01/HelloTest',
      name: 'HelloTest',
      component: HelloTest
    }
  ]
})
