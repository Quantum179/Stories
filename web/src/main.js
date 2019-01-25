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

Vue.mixin({
  methods: {
    $$ (selector) {
      let elements = document.querySelectorAll(selector)
      if(elements.length === 0) {
        return null
      } else if(elements.length === 1) {
        return elements[0]
      } else {
        return elements
      }
    },
    updateRoute (name, params) {
      if(name.hasOwnProperty('path')) {
        this.$router.push(name)
      } else {
        this.$router.push({ name: name, params: params })
      }
    },
    isSmallScreen () {
      return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
    }  
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
