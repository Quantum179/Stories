<template>
  <div id="story_details">
    <v-flex>
      <v-layout row justify-center>
        <h1 class="title_story">{{story.title}}</h1>
        <h3 class="subtitle_story">{{story.description}}</h3>
      </v-layout>
    </v-flex>
    <v-container fill-height>
      <v-layout column align-center>
        <v-flex xs12>
          <chapter isNamed 
          v-for="(chapter, i) in story.chapters" :key="i" 
          :chapter="chapter"></chapter>
        </v-flex>
        <hr>  
        <v-flex xs12>
          <sharing-section></sharing-section>
        </v-flex>
        <v-flex xs12>
          <comment-section :comments="story.comments"></comment-section>  
        </v-flex> 
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Chapter from '../shared/Chapter'
import SharingSection from '../shared/sharings/SharingSection'
import CommentSection from '../shared/comments/CommentSection'
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
    this.fetchDetails(this.params)
      .then(status => {
        if(status === 401) {
          this.updateRoute('login')
        }
      })
    // todo : https://stackoverflow.com/questions/16670931/hide-scroll-bar-but-while-still-being-able-to-scroll
    // todo : togglable reading nav
  },
  methods: {
    ...mapActions({
      fetchDetails: FETCH_STORY_DETAILS
    })
  },
  components: {
    Chapter,
    SharingSection,
    CommentSection
  }
}
</script>

<style lang="stylus">

.story-body
  overflow-y scroll

hr 
  width 100%
</style>
