<template>
  <v-tabs>
    <v-tab ripple @click="toggleDrawer()">
      <v-icon>view_list</v-icon>
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
