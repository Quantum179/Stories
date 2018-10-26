<template>
  <v-container  id="stories" grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 justify-center>
        <h1>Histoires</h1>
      </v-flex>
      <v-flex v-for="(story, i) in stories" :key="`story-${i}`" xs3>
        <v-card ripple class="story-card" dark color="secondary">
          <v-card-title>{{story.title}}</v-card-title>
          <v-card-text class="px-0">{{story.content}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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

<style lang="stylus" scoped>
h1
  text-align center
.story-card
  width 100px
  height 100px
  font-size 8px
</style>
