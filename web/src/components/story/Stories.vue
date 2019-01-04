<template>
  <div  id="stories" grid-list-md text-xs-center>
    <v-flex xs12 justify-center>
      <h1>Histoires</h1>
    </v-flex>
    <v-container>
      <v-layout xs12 row wrap>
        <v-flex class="story-card pointer" @click="openStoryPreface(story)" v-for="(story, i) in stories" :key="i" 
        xs12 sm6 md4>
          <story-card :story="story" ></story-card>
        </v-flex>
      </v-layout>
    </v-container>
    <preface-dialog ref="preface"></preface-dialog>
  </div>
</template>

<script>
import PrefaceDialog from '../shared/dialogs/PrefaceDialog'
import StoryCard from './StoryCard'
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
    // todo: define defaultParams in vuex store
    let params = {
      populate: [{ path: 'author', select: 'authorName' }, { path: 'preface', select: 'sentences' }]
    }

    this[FETCH_STORIES_INFOS](params)
  },
  computed: {
    ...mapState(['news', 'stories', 'collections'])
  },
  methods: {
    ...mapActions([FETCH_STORIES_INFOS]),

    openStoryPreface (story) {
      let that = this
      let callback = () => {
        that[SET_SELECTED_STORY](story.id)   
        that.updateRoute('story', story.title)
      }
      this.$refs.preface.openDialog(story, callback)
    },
    openCollectionPreface (collection) {
      let that = this
      let callback = () => {
        that[SET_SELECTED_COLLECTION](collection.id)   
        that.updateRoute('collection', collection.title)
      }
      this.$refs.preface.openDialog(collection, callback)
    }
  },
  components: {
    PrefaceDialog,
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
