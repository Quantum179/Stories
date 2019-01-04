import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { state, getters, actions, mutations } from './root'
import homeModule from './modules/home'
import magModule from './modules/mag'
import storyModule from './modules/story'
import blogModule from './modules/blog'
import authModule from './modules/auth'

Vue.use(Vuex)

const vuexPersist = {
  reducer: state => ({
    auth: {
      token: state.auth.token,
    }
  })
}

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
  },
  plugins: [createPersistedState(vuexPersist)]
})

export default store
