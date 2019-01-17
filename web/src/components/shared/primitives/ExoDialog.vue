<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        {{content.title}}
      </v-card-title>
      <v-card-text>
        {{content.text}}
      </v-card-text>
      <v-divider v-if="actions.length > 0"></v-divider>
      <v-card-actions v-if="actions.length > 0">
        <v-spacer></v-spacer>
        <v-btn v-for="(action, i) in actions" :key="i" color="primary" flat @click="action.callback()">
          {{action.label}}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { getterTypes, mutationTypes } from '../../../store/root/types'

const { GET_DIALOG_VALUE } = getterTypes
const { CLOSE_DIALOG } = mutationTypes

export default {
  props: {
    actions: Array,
    content: Object
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters([GET_DIALOG_VALUE]),

    dialog: {
      get () {
        return this[GET_DIALOG_VALUE]
      }
    }
  },
  mounted () {
    // TODO : check if props are valid ?

  },
  methods: {
    ...mapMutations([CLOSE_DIALOG])
  }
}
</script>

<style lang="stylus" scoped>

</style>
