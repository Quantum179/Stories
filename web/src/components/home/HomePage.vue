<template>
  <router-view></router-view>
</template>

<script>
import { mapMutations } from 'vuex'
import { mutationTypes } from '../../store/root/types'

const { 
  ADD_EXTENSION, 
  REMOVE_EXTENSION 
} = mutationTypes

export default {
  mounted () {
    this.addExtension('home-tabs')
  },
  methods: {
    ...mapMutations({
      addExtension: ADD_EXTENSION,
      removeExtension: REMOVE_EXTENSION
    })
  },
  beforeRouteLeave (to, from, next) {
    this.removeExtension()
    next()
  }
}
</script>

<style lang="stylus" scoped>

</style>
