<template>
<v-container fluid>
    <h1>ExoMag</h1>
    <exo-carousel :slides="news"></exo-carousel>
    <v-container>
      <v-flex>
        <mag-number-card v-for="magNumber in magNumbers" :key="magNumber.title"></mag-number-card>
      </v-flex>
    </v-container>
    <preface-dialog></preface-dialog>
</v-container>
</template>

<script>
import ExoCarousel from '../shared/primitives/ExoCarousel'
import PrefaceDialog from '../shared/dialogs/PrefaceDialog'
import MagNumberCard from './MagNumberCard'
import { createNamespacedHelpers } from 'vuex'
import { actionTypes } from '../../store/modules/mag/types'

const { mapState, mapActions } = createNamespacedHelpers('mag')
const { FETCH_MAG_INFOS } = actionTypes

export default {
  data () {
    return {
      display: 'mag'
    }
  },
  computed: {
    ...mapState(['news', 'magNumbers'])
  },
  mounted: function () {
    this[FETCH_MAG_INFOS]()
  },
  methods: {
    ...mapActions([FETCH_MAG_INFOS])
  },
  components: {
    ExoCarousel,
    PrefaceDialog,
    MagNumberCard
  }
}
</script>

<style lang="stylus">

</style>
