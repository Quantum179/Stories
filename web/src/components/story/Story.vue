<template>
  <div id="story_details">
    <v-flex>
      <v-layout row justify-center>
        <h1 class="title_story">{{story.title}}</h1>
        <h2 class="subtitle_story">{{story.description}}</h2>
      </v-layout>
    </v-flex>
    <v-container fluid>
      <v-layout row>
        <v-flex v-if="!isSmallScreen()" md2 lg2>
          <reading-nav :post="story"></reading-nav>
        </v-flex>
        <v-flex xs12 sm12 md10 lg10>
          <v-layout column class="story_body">
            <v-flex xs12>
              <chapter v-for="(chapter, i) in story.chapters" :key="i" 
              :chapter="chapter"></chapter>
            </v-flex>
          </v-layout>
        </v-flex>    
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Chapter from '../shared/Chapter'
import ReadingNav from '../shared/ReadingNav'
import { actionTypes } from '../../store/modules/story/types.js'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('story')
const { FETCH_STORY_DETAILS } = actionTypes

export default {
  data () {
    return {
      params: {
        populate: [
          { path: 'author', select: 'authorName' }
        ]
      }
    }
  },
  computed: {
    ...mapState({
      story: state => state.storyDetails
    })
  },
  mounted () {
    this[FETCH_STORY_DETAILS](this.params)
      .then(status => {
        if(status === 401) {
          // todo : open login dialog and keep context
        }
      })
    // todo : https://stackoverflow.com/questions/16670931/hide-scroll-bar-but-while-still-being-able-to-scroll
    // todo : togglable reading nav
  },
  methods: {
    ...mapActions([FETCH_STORY_DETAILS])
  },
  components: {
    Chapter,
    ReadingNav
  }
}
</script>

<style lang="stylus">

.story-body
  overflow-y scroll
</style>
