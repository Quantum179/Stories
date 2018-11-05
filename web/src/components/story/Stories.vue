<template>
  <div  id="stories" grid-list-md text-xs-center>
    <v-flex xs12 justify-center>
      <h1>Histoires</h1>
    </v-flex>
    <v-container>
      <v-layout xs12 row wrap>
        <v-flex class="story-card pointer" v-for="(story, i) in stories" :key="`story-${i}`" xs12 sm4>
          <story-card :story="story" @click="openDialog(story)"></story-card>
        </v-flex>
      </v-layout>
    </v-container>
    <preface-dialog ref="preface"></preface-dialog>
  </div>
</template>

<script>
import ExoCarousel from '../shared/primitives/ExoCarousel'
import PrefaceDialog from '../shared/dialogs/PrefaceDialog'
import StoryList from './StoryList'
import StoryCard from './StoryCard'

import { createNamespacedHelpers } from 'vuex'
import { actionTypes, mutationTypes } from '../../store/modules/story/types'

const { mapState, mapActions } = createNamespacedHelpers('story')
const { FETCH_STORIES_INFOS } = actionTypes
const { SET_SELECTED_STORY } = mutationTypes

export default {
  data () {
    return {
    }
  },
  mounted () {
    /* this[FETCH_STORIES_INFOS]() */
  },
  computed: {
    ...mapState(['news', 'stories'])
  },
  methods: {
    ...mapActions([FETCH_STORIES_INFOS]),

    openDialog (story) {
      let handler = () => {
        this[SET_SELECTED_STORY](story.id)
        this.updateRoute(story.title)
      }

      this.$refs.preface.openDialog(story, "Lire 'l'histoire", handler)
    }
  },
  components: {
    ExoCarousel,
    PrefaceDialog,
    StoryList,
    StoryCard
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
