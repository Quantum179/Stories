<template>
<div>
  <v-container>
    <div class="title-story"><h1>{{story.title}}</h1></div>
    <div class="subtitle-story">{{story.description}}</div>
  </v-container>
  <v-container fluid>
    <v-layout row>
      <v-flex xs3>
        <reading-nav :post="story"></reading-nav>
      </v-flex>
      <v-flex xs9>
        <div class="story-body">
          <chapter v-for="chapter in story.chapters" :key="chapter.title" :chapter="chapter"></chapter>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row></v-layout>
  </v-container>
</div>

</template>

<script>
import ReadingNav from '../shared/ReadingNav'
import { actionTypes, mutationTypes } from '../../store/modules/story/types.js'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions, mapMutations } = createNamespacedHelpers('story')
const { FETCH_STORY_DETAILS } = actionTypes
const { SET_SELECTED_STORY } = mutationTypes

export default {
  data () {
  },
  computed: {
    ...mapState({
      story: state => state.storyDetails
    })
  },
  mounted () {
    this[FETCH_STORY_DETAILS]()
  },
  methods: {
    ...mapActions([FETCH_STORY_DETAILS]),
    ...mapMutations([SET_SELECTED_STORY])
  },
  components: {
    ReadingNav
  }
}
</script>

<style lang="stylus">

</style>
