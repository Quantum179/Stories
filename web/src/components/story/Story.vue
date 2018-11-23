<template>
<div>
  <v-container>
    <h1 class="title-story">{{story.title}}</h1>
    <h2 class="subtitle-story">{{story.description}}</h2>
  </v-container>
  <v-container fluid>
    <v-layout row>
      <v-flex xs3>
        <reading-nav :post="story"></reading-nav>
      </v-flex>
      <v-flex xs9>
        <v-container fluid class="story-body">
          <v-flex>
            <chapter v-for="chapter in story.chapters" :key="chapter.title" :chapter="chapter"></chapter>
          </v-flex>
        </v-container>
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
    // todo : https://stackoverflow.com/questions/16670931/hide-scroll-bar-but-while-still-being-able-to-scroll
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

.story-body
  overflow-y scroll
</style>
