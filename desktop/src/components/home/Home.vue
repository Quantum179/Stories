<template>
  <div id="home">
    <exocraft-opening v-if="display === 'exo'"></exocraft-opening>
    <home-opening v-else-if="display === 'intro'"></home-opening>
    <v-container v-else-if="display === 'home'">
      <home-carousel></home-carousel>
    </v-container>
  </div>
</template>

<script>
import ExocraftOpening from './ExocraftOpening'
import HomeOpening from './HomeOpening'
import HomeCarousel from './HomeCarousel'

export default {
  name: 'home',
  data () {
    return {
      display: 'home',
      news: []
    }
  },
  components: {
    ExocraftOpening,
    HomeOpening,
    HomeCarousel
  }
}
</script>

<style lang="stylus">

#home
  height 2000px
</style>
