import homeModule from './modules/home'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// TODO : refactor with module approch
export default new Vuex.Store({
  modules: {
    home: homeModule
  }
})
