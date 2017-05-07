// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import '../node_modules/semantic-ui/dist/semantic.min.css'
import semantic from 'semantic' // eslint-disable-line

import Home from '@/components/Home'
import Seasons from '@/components/Seasons'
import Cities from '@/components/Cities'
import CityDetail from '@/components/CityDetail'
import Category from '@/components/Category'
import Historical from '@/components/Historical'



import _ from 'lodash';

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.http.options.emulateJSON = true;

let components = [Home, Seasons, Cities, CityDetail,Category,Historical];

// Create components to be accessible everywhere
_.forEach(components, component => {
  Vue.component(component.name, component);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
