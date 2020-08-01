import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import selectArea from '@/components/selectArea'
import appointment from '@/components/appointment'
import registration from '@/components/registration'
import selectRegistDate from '@/components/selectRegistDate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/selectArea',
      name: 'selectArea',
      component: selectArea
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: appointment
    },
    {
      path: '/registration',
      name: 'registration',
      component: registration
    },
    {
      path: '/selectRegistDate',
      name: 'selectRegistDate',
      component: selectRegistDate
    }
  ]
})
