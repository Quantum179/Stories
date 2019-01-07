<template>
  <exo-dialog v-if="dialog" ref="dialog" :actions="actions" :content="content"></exo-dialog>
</template>

<script>
import ExoDialog from '../primitives/ExoDialog'
import { mapGetters, mapMutations } from 'vuex'
import { getterTypes, mutationTypes } from '../../../store/root/types.js'

const { GET_DIALOG_VALUE } = getterTypes
const { OPEN_DIALOG, CLOSE_DIALOG } = mutationTypes

export default {
  data () {
    return {
      content: null,
      actions: []
    }
  },
  computed: {
    ...mapGetters([GET_DIALOG_VALUE]),

    dialog: {
      get () {
        return this[GET_DIALOG_VALUE]
      }
    }
  },
  methods: {
    ...mapMutations([OPEN_DIALOG, CLOSE_DIALOG]),

    openDialog (post = {}, callback) {
      this.actions = []
      this.actions.push({label: 'Lire', callback: callback})
      this.actions.push({label: 'Annuler', callback: this[CLOSE_DIALOG]})
      this.content = {title: post.title || '', body: post.preface.sentences.join(" ")}

      this[OPEN_DIALOG]()
    }
  },
  components: {
    ExoDialog
  }
}
</script>

<style lang="stylus" scoped>

</style>
