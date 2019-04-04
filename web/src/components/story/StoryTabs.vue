<template>
  <v-tabs>
    <v-tab ripple>

    </v-tab>
  </v-tabs>
</template>
<script>
import { mapMutations } from 'vuex'
import { mutationTypes } from '../../store/modules/story/types'

const { TOGGLE_DRAWER } = mutationTypes

export default {
  methods: {
    ...mapMutations({
      toggleDrawer: TOGGLE_DRAWER
    })
  }
}
</script>

<style lang="stylus" scoped>

</style>
