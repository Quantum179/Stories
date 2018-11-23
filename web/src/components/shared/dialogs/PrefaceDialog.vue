<template>
  <exo-dialog ref="dialog" :actions="actions" :content="content"></exo-dialog>
</template>

<script>
import ExoDialog from '../primitives/ExoDialog'

import { mapMutations } from 'vuex'

import { mutationTypes } from '../../../store/root/types.js'
const { OPEN_DIALOG } = mutationTypes

export default {
  data () {
    return {
      content: null,
      actions: []
    }
  },
  methods: {
    ...mapMutations([OPEN_DIALOG]),

    openDialog (post, labelPost, callback) {
      this.actions.push(...[{label: labelPost, callback: callback}, {label: 'Annuler', handler: null}])
      this.content = {title: post.title, body: post.preface}

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
