import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FilterCities from '@/components/FilterCities'
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
      path: '/cities/filter',
      name: 'FilterCities',
      component: FilterCities
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
