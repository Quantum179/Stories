<template>
  <v-app id="main-app">
    <header-app></header-app>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <footer-app></footer-app>
  </v-app>
</template>

<script>
import HeaderApp from './components/shared/HeaderApp.vue'
import FooterApp from './components/shared/FooterApp.vue'

export default {
  components: {
    HeaderApp,
    FooterApp
  }
}
</script>

<style lang="stylus">

.pointer
  cursor pointer
</style>
