import { state, actions, mutations } from './root'
import homeModule from './modules/home'
import magModule from './modules/mag'
import storiesModule from './modules/stories'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    home: homeModule,
    mag: magModule,
    stories: storiesModule
  }
})

export default store
