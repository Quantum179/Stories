<template>
  <div id="chronicles">
    <h1>Chroniques de Saturn</h1>
    <v-container>
      <v-layout>
        <v-flex v-for="(chronicle, i) in chronicles" :key="i"
        xs12 sm12 md10 lg10>
          <chronicle-card :chronicle="chronicle"></chronicle-card>
        </v-flex>
      </v-layout>
      <preface-dialog ref="preface"></preface-dialog>
    </v-container>
  </div>
</template>

<script>
import ChronicleCard from './ChronicleCard'
import PrefaceDialog from '../shared/dialogs/PrefaceDialog'
import { mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState('chronicle', ['chronicles'])
  },
  components: {
    ChronicleCard,
    PrefaceDialog
  }
}
</script>

<style lang="stylus">

</style>
