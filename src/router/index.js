import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Seasons from '@/components/Seasons'
import Cities from '@/components/Cities'
import Category from '@/components/Category'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/seasons',
      name: 'Seasons',
      component: Seasons
    },
    {
      path: '/cities',
      name: 'Cities',
      component: Cities
    },
     {
      path: '/category',
      name: 'Category',
      component: Category
    }
  ]
})
