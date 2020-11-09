import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import supplier from './modules/supplier'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    supplier
  }
})
