<template>
<div id="mag">
    <h1>ExoMag</h1>
    <v-container>
      <v-flex>
        <mag-number-card v-for="magNumber in magNumbers" :key="magNumber.title"></mag-number-card>
      </v-flex>
    </v-container>
    <preface-dialog v-if="dialog"></preface-dialog>
</div>
</template>

<script>
import PrefaceDialog from '../shared/dialogs/PrefaceDialog'
import MagNumberCard from './MagNumberCard'
import { mapGetters, createNamespacedHelpers } from 'vuex'
import { actionTypes } from '../../store/modules/mag/types'
import * as rootTypes from '../../store/root/types'

const { mapState, mapActions } = createNamespacedHelpers('mag')
const { FETCH_MAG_INFOS } = actionTypes
const { GET_DIALOG_VALUE } = rootTypes.getterTypes

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['news', 'magNumbers']),
    ...mapGetters([GET_DIALOG_VALUE]),

    dialog: {
      get () {
        return this[GET_DIALOG_VALUE]
      }
    }
  },
  mounted: function () {
    /* this[FETCH_MAG_INFOS]() */
  },
  methods: {
    ...mapActions([FETCH_MAG_INFOS])
  },
  components: {
    PrefaceDialog,
    MagNumberCard
  }
}
</script>

<style lang="stylus">

</style>
