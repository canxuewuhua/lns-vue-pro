import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloVue from '@/components/day01/HelloVue'
import HelloTest from '@/components/day01/HelloTest'
import HelloSwitch from '@/components/day01/HelloSwitch'
import HelloWatch from '@/components/day01/HelloWatch'
import HelloFatherPage from '@/components/day01/HelloFatherPage'
import HelloSlot from '@/components/day01/HelloSlot'
import HelloFirst from '@/components/day01/HelloFirst'
import HelloSecond from '@/components/day01/HelloSecond'
import HelloVFor from '@/components/day01/HelloVFor'
import HelloCompute from '@/components/day01/HelloCompute'
import HelloLifeCycle from '@/components/day01/HelloLifeCycle'
import HelloDeepWatch from '@/components/day01/HelloDeepWatch'

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
    ,
    {
      path: '/day01/HelloSlot',
      name: 'HelloSlot',
      component: HelloSlot
    }
    ,
    {
      path: '/day01/HelloFirst',
      name: 'HelloFirst',
      component: HelloFirst
    }
    ,
    {
      path: '/day01/HelloSecond',
      name: 'HelloSecond',
      component: HelloSecond
    }
    ,
    {
      path: '/day01/HelloVFor',
      name: 'HelloVFor',
      component: HelloVFor
    }
    ,
    {
      path: '/day01/HelloCompute',
      name: 'HelloCompute',
      component: HelloCompute
    }
    ,
    {
      path: '/day01/HelloLifeCycle',
      name: 'HelloLifeCycle',
      component: HelloLifeCycle
    }
    ,
    {
      path: '/day01/HelloDeepWatch',
      name: 'HelloDeepWatch',
      component: HelloDeepWatch
    }
  ]
})
