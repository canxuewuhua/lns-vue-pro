import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloVue from '@/components/day01/HelloVue'
import HelloTest from '@/components/day01/HelloTest'
import HelloSwitch from '@/components/day01/HelloSwitch'
import HelloWatch from '@/components/day01/HelloWatch'
import HelloFatherPage from '@/components/day01/HelloFatherPage'

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
    ,
    {
      path: '/day01/HelloSwitch',
      name: 'HelloSwitch',
      component: HelloSwitch
    }
    ,
    {
      path: '/day01/HelloWatch',
      name: 'HelloWatch',
      component: HelloWatch
    }
    ,
    {
      path: '/day01/HelloFatherPage',
      name: 'HelloFatherPage',
      component: HelloFatherPage
    }
  ]
})
