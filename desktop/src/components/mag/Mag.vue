<template>
  <div id="mag">
    <v-container fluid>
      <exo-carousel :slides="news"></exo-carousel>
      <v-container>
          <mag-number-card v-for="magNumber in magNumbers" :key="magNumber.title"></mag-number-card>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import ExoCarousel from '../shared/primitives/ExoCarousel'

import { mapState, mapActions } from 'vuex'
import { actionTypes } from '../../store/modules/mag/types'

const { FETCH_MAG_INFOS } = actionTypes

export default {
  data () {
    return {
      display: 'mag'
    }
  },
  computed: {
    ...mapState('mag', ['news', 'magNumbers'])
  },
  mounted: function () {
    /* this[FETCH_MAG_INFOS]() */
  },
  methods: {
    ...mapActions('mag', [FETCH_MAG_INFOS])
  },
  components: {
    ExoCarousel
  }
}
</script>

<style lang="stylus">

</style>
