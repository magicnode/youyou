import Vue from 'vue'
import Vuex from 'vuex'

import * as hotel from './modules/hotel'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    hotel
  },
  state: {
    title: '悠游旅游网'
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  }
})

export default store
