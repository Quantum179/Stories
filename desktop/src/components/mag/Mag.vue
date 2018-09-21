<template>
  <div id="mag">
    <v-container>
      <exo-carousel :slides="news"></exo-carousel>
      <mag-number-list :magNumbers="magNumbers"></mag-number-list>
    </v-container>
  </div>
</template>

<script>
import ExoCarousel from "../shared/primitives/ExoCarousel"
import MagNumberList from "./MagNumberList"

export default {
  data () {
    return {
      display: 'mag',
      news: [],
      magNumbers : []
    }
  },
  mounted: function() {
    this.state.home.dispatch('getMagInfos')
  }
}
</script>

<style lang="stylus">

</style>
