import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App'

import router from './router'
import store from './store'

import './stylus/main.styl'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.use(Vuetify)

window.axios = window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.prototype.$http = window.axios

Vue.mixin({
  updateRoute (path) {
    this.$router.push({ path: `${path}` })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// this.viewport = `client w : ${window.clientWidth}, client h : ${window.clientHeight}, inner w : ${window.innerWidth}, inner h : ${window.innerHeight},` 
