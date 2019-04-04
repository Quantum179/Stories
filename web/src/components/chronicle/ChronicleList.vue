<template>
  <div id="chronicles">
    <v-flex xs12 justify-center>
      <h1>Chroniques de Saturn</h1>
    </v-flex>
    <v-container>
      <v-layout column justify-space-between>
        <v-flex v-for="(chronicle, i) in chronicles" :key="i" 
        class="chronicle-flex pointer"
        xs12 @click="readChronicle(chronicle)">
          <chronicle-card :chronicle="chronicle"></chronicle-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ChronicleCard from './ChronicleCard'
import { mapState, mapActions, mapMutations } from 'vuex'
import { actionTypes, mutationTypes } from '../../store/modules/chronicle/types'
import * as rootTypes from '../../store/root/types'

const { FETCH_CHRONICLES_INFOS } = actionTypes
const { SET_SELECTED_CHRONICLE } = mutationTypes
const { CLOSE_DIALOG } = rootTypes.mutationTypes

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState('chronicle', ['chronicles'])
  },
  mounted () {
    this.fetchInfos()
  },  
  methods: {
    ...mapMutations({
      closeDialog: CLOSE_DIALOG
    }),
    ...mapActions('chronicle', {
      fetchInfos: FETCH_CHRONICLES_INFOS
    }),
    ...mapMutations('chronicle', {
      setSelectedChronicle: SET_SELECTED_CHRONICLE
    }),

    readChronicle (chronicle) {
      this.setSelectedChronicle(chronicle.id)
      this.updateRoute(`/chronicles/${chronicle.id}`)
    }
  },
  components: {
    ChronicleCard
  }
}
</script>

<style lang="stylus">

.chronicle-flex
  width 100%
  height 400px
  margin-bottom: 20px
</style>
