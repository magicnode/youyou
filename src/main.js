// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import IView from 'iview'
import VueLazyload from 'vue-lazyload'
import REGION_DATA from 'china-area-data'
import { RegionPicker } from 'vue-region-picker'

import App from './App'
import router from './router'
import store from './store'

import {picurl, ishot, isnull} from './filters'
import vImg from '@/components/Lazyimg'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

RegionPicker.region = REGION_DATA

Vue.use(IView)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/images/404.png'),
  loading: require('./assets/images/loading.gif'),
  attempt: 1
})

Vue.component('v-img', vImg)
Vue.component('region-picker', RegionPicker)

Vue.filter('pic', picurl)
Vue.filter('ishot', ishot)
Vue.filter('isnull', isnull)

router.afterEach((to, from) => {
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
