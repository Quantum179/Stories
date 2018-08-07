import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// TODO : refactor with module approch
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
