<template>
  <v-layout>
    <v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import {actionTypes} from '../../store/modules/auth/types'

const {mapState, mapActions} = createNamespacedHelpers('auth')
const { REQUEST_LOGIN } = actionTypes

export default {
  data () {
    return {
      form: {
        email: null,
        password: null
      }
    }
  },
  computed: {

  },
  mounted () {
    // todo: add guard system 
    // https://serversideup.net/vue-router-navigation-guards-vuex/
    // https://serversideup.net/clean-vuejs-public-private-routes/
  },
  methods: {
    ...mapActions([REQUEST_LOGIN]),

    login () {
      this[REQUEST_LOGIN](this.form)
        .then(res => {
          this.$router.push({path: 'home'})
        })
        .catch(err => {
          // todo: display errors in form
        })
    }
  }
}
</script>

<style lang="stylus">
</style>
