<template>
  <div id="stories" text-xs-center>
    <v-flex xs12 justify-center>
      <h1>Histoires</h1>
    </v-flex>
    <v-container grid-list-md>
      <v-layout xs12 row wrap>
        <v-flex class="story-flex pointer pa-2" @click="openStoryPreface(story)" v-for="(story, i) in stories" :key="i" 
        xs12 sm4 md4 lg4
        :class="offset(i)">
          <story-card class="story-card" :story="story"></story-card>
        </v-flex>
      </v-layout>
    </v-container>
    <preface-dialog ref="preface"></preface-dialog>
  </div>
</template>

<script>
import PrefaceDialog from '../shared/dialogs/PrefaceDialog'
import StoryCard from './StoryCard'
import { mapState, mapActions, mapMutations } from 'vuex'
import { actionTypes, mutationTypes } from '../../store/modules/story/types'
import * as rootTypes from '../../store/root/types.js'

const { FETCH_STORIES_INFOS } = actionTypes
const { SET_SELECTED_STORY } = mutationTypes

const { CLOSE_DIALOG } = rootTypes.mutationTypes

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
  mounted () {
    // todo: define defaultParams in vuex store
    this[FETCH_STORIES_INFOS]()
  },
  computed: {
    ...mapState('story', ['news', 'stories', 'collections'])
  },
  methods: {
    ...mapActions('story', [FETCH_STORIES_INFOS]),
    ...mapMutations([CLOSE_DIALOG]),
    ...mapMutations('story', [SET_SELECTED_STORY]),

    openStoryPreface (story) {
      let that = this
      let callback = () => {
        that[SET_SELECTED_STORY](story.id)
        that[CLOSE_DIALOG]()
        that.updateRoute('story', {id: story.id})
      }
      this.$refs.preface.openDialog(story, callback)
    },
    offset (i) {
      let offset = {}
      if(i%2 === 0) {
          offset["offset-sm2"] = this.$vuetify.breakpoint.smOnly
          // todo: add others brakpoints   
      }
    }
  },
  components: {
    PrefaceDialog,
    StoryCard
  }
}
</script>

<style lang="stylus" scoped>

.story-flex:before
  content ''
  float left
  padding-top 80%

.v-card
  height 100%
  width 100%
  margin 0
</style>
