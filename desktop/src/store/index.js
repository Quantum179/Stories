import homeModule from './modules/home'
import magModule from './modules/mag'
import storiesModule from './modules/stories'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// TODO : refactor with module approch
const store = new Vuex.Store({
  modules: {
    home: homeModule,
    mag: magModule,
    stories: storiesModule
  }
})

export default store
