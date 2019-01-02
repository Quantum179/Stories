<template>
  <v-container fluid>
    <v-layout row>
      <h1 class="title-story">{{story.title}}</h1>
      <h2 class="subtitle-story">{{story.description}}</h2>
    </v-layout>
    <v-layout row>
      <v-flex sm3>
        <reading-nav :post="story"></reading-nav>
      </v-flex>
      <v-flex xs12 sm9>
        <v-layout column class="story-body">
          <v-flex xs12>
            <chapter v-for="chapter in story.chapters" :key="chapter.title" :chapter="chapter"></chapter>
          </v-flex>
        </v-layout>
      </v-flex>    
    </v-layout>
  </v-container>
</template>

<script>
import ReadingNav from '../shared/ReadingNav'
import Chapter from '../shared/Chapter'
import { actionTypes } from '../../store/modules/story/types.js'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('story')
const { FETCH_STORY_DETAILS } = actionTypes

export default {
  data () {
  },
  computed: {
    ...mapState({
      story: state => state.storyDetails
    })
  },
  mounted () {
    let params = {
      
    }
    this[FETCH_STORY_DETAILS]()
    // todo : https://stackoverflow.com/questions/16670931/hide-scroll-bar-but-while-still-being-able-to-scroll
    // todo : togglable reading nav
  },
  methods: {
    ...mapActions([FETCH_STORY_DETAILS])
  },
  components: {
    ReadingNav,
    Chapter
  }
}
</script>

<style lang="stylus">

.story-body
  overflow-y scroll
</style>
