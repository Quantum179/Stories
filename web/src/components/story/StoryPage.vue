<template>
  <div id="story_page">
    <story-nav></story-nav>
    <router-view></router-view>
  </div>
</template>
<script>
import StoryNav from './StoryNav'
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
  },
  components: {
    StoryNav
  }
}
</script>

<style lang="stylus" scoped>

</style>
