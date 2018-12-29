<template>
  <div  id="stories" grid-list-md text-xs-center>
    <v-flex xs12 justify-center>
      <h1>Histoires</h1>
    </v-flex>
    <v-container>
      <v-layout xs12 row wrap>
        <v-flex class="story-card pointer" v-for="(story, i) in stories" :key="i" 
        xs12 sm4>
          <story-card :story="story" @click="openDialog(story, false)"></story-card>
        </v-flex>
      </v-layout>
    </v-container>
    <preface-dialog ref="preface"></preface-dialog>
  </div>
</template>

<script>
import PrefaceDialog from '../shared/dialogs/PrefaceDialog'
import StoryCard from './StoryCard'
/* import CollectionCard from './CollectionCard' */

import { createNamespacedHelpers } from 'vuex'
import { actionTypes, mutationTypes } from '../../store/modules/story/types'

const { mapState, mapActions } = createNamespacedHelpers('story')
const { FETCH_STORIES_INFOS } = actionTypes
const { SET_SELECTED_STORY, SET_SELECTED_COLLECTION } = mutationTypes

export default {
  data () {
    return {
    }
  },
  mounted () {
    this[FETCH_STORIES_INFOS]()
  },
  computed: {
    ...mapState(['news', 'stories', 'collections'])
  },
  methods: {
    ...mapActions([FETCH_STORIES_INFOS]),

    openDialog (post, isCollection) {
      let handler = () => {
        if(isCollection) {
          this[SET_SELECTED_COLLECTION](post.id)
        } else {
          this[SET_SELECTED_STORY](post.id)   
        }
        this.updateRoute(post.title) //todo : add router context
      }

      this.$refs.preface.openDialog(post, handler)
    }
  },
  components: {
    PrefaceDialog,
    StoryCard
/*     CollectionCard */
  }
}
</script>

<style lang="stylus" scoped>
h1
  text-align center

.story-card
  padding 20px

.v-card__text
  min-height 120px
</style>
