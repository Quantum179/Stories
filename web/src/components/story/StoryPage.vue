<template>
  <div id="story_page">
    <router-view></router-view>
  </div>
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
    this.addExtension('story-tabs')
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
