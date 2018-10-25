<template>
  <div id="stories">
    <v-container>
      <exo-carousel :slides="news"></exo-carousel>
      <story-list :stories="stories"></story-list>
    </v-container>
  </div>
</template>

<script>
import ExoCarousel from '../shared/primitives/ExoCarousel'
import StoryList from './StoryList'
import { mapState, mapActions } from 'vuex'

import { actionTypes } from '../../store/modules/stories/types.js'
const { FETCH_STORIES_INFOS } = actionTypes

export default {
  data () {
    return {
    }
  },
  mounted () {
    /* this[FETCH_STORIES_INFOS]() */
  },
  computed: {
    ...mapState('stories', ['news', 'stories', 'selectedStory'])
  },
  methods: {
    ...mapActions('stories', [FETCH_STORIES_INFOS])
  },
  components: {
    ExoCarousel,
    StoryList
  }
}
</script>

<style lang="stylus">

</style>
