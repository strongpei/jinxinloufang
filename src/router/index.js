/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msiter.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Ceshi from '../pages/Ceshi/Ceshi.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
      path: '/',
      redirect: '/msite',
      meta:{
        showFooter:true
      }
    },
    {
      path: '/msite',
      component: Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      component: Login,
      meta:{
        showFooter:false
      }
    },
    {
      path: '/ceshi',
      component: Ceshi,
      meta:{
        showFooter:false
      }
    },
  ]
})