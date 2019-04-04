import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import store from './store'
import './stylus/main.styl'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { clientUrl } from './constants'

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
    updateRoute (path, params, query) {
      path.constructor === Object ?
        this.$router.push(path) :
        path.includes('/') ? 
          this.$router.push({ 
            path: path, 
            query: query 
          }) :
          this.$router.push({ 
            name: path, 
            params: params, 
            query: query 
          })
    },
    isSmallScreen () {
      return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
    },
    formatDate (date) {
      if(date.constructor === Date) {
        return `${date.getDay()}-${date.getMonth()}-${date.getYear()}`
      } else {
        //todo : format if not javascript object Date
        return date.substring(0,10)
      }
    },
    formatUrl(routeName, id) {
      return `${clientUrl}/${routeName}/${id}`
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
