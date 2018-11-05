import { state, getters, actions, mutations } from './root'
import homeModule from './modules/home'
import magModule from './modules/mag'
import storyModule from './modules/story'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    home: homeModule,
    mag: magModule,
    story: storyModule
  }
})

export default store
