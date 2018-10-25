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
  </v-app>
</template>

<script>
import HeaderApp from './components/app/HeaderApp'
import NavApp from './components/app/NavApp'
import FooterApp from './components/app/FooterApp'

export default {
  components: {
    HeaderApp,
    NavApp,
    FooterApp
  }
}
</script>

<style lang="stylus">

.pointer
  cursor pointer
</style>
