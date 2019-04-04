<template>
  <v-app id="main-app">
    <header-app></header-app>
    <nav-app></nav-app>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <footer-app></footer-app>
    <exo-snackbar v-if="snackbar"></exo-snackbar>
  </v-app>
</template>

<script>
import HeaderApp from './components/app/HeaderApp'
import NavApp from './components/app/NavApp'
import FooterApp from './components/app/FooterApp'
import ExoSnackbar from './components/shared/primitives/ExoSnackbar'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['snackbar']),
    ...mapState('auth', ['token'])
  },
  components: {
    HeaderApp,
    NavApp,
    FooterApp,
    ExoSnackbar
  }
}
</script>

<style lang="stylus">
@import './stylus/main'

.pointer
  cursor pointer
</style>
