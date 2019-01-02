import Vue from 'vue'
import Vuex from 'vuex'

import { state, getters, actions, mutations } from './root'
import homeModule from './modules/home'
import magModule from './modules/mag'
import storyModule from './modules/story'
import blogModule from './modules/blog'
import authModule from './modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    home: homeModule,
    mag: magModule,
    story: storyModule,
    blog: blogModule,
    auth: authModule
  }
})

export default store
