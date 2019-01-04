<template>
  <v-snackbar v-model="snackbar" :left="true" :bottom="true" :timeout="2000">
    {{ text }}
    <v-btn color="primary" flat @click="closeSnackbar()">Fermer</v-btn>
  </v-snackbar>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { getterTypes, mutationTypes } from '../../../store/root/types'

const { GET_SNACKBAR_VALUE } = getterTypes
const { CLOSE_SNACKBAR } = mutationTypes

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      text: state => state.snackbarText
    }),
    ...mapGetters([GET_SNACKBAR_VALUE]),

    snackbar: {
      get () {
        return this[GET_SNACKBAR_VALUE]
      },
      set (val) {
        if(val === false) {
          this[CLOSE_SNACKBAR]()
        }
      }
    }
  },
  mounted () {
    // TODO : add others config (vertical, timeout etc) (check vuetify doc)
    // todo: search if there's a better way to emit snackbar text

  },
  methods: {
    ...mapMutations([CLOSE_SNACKBAR]),

    closeSnackbar () {
      this[CLOSE_SNACKBAR]()
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
