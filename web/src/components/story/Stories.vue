<template>
  <div  id="stories" grid-list-md text-xs-center>
    <v-flex xs12 justify-center>
      <h1>Histoires</h1>
    </v-flex>
    <v-container>
      <v-layout xs12 row wrap>
        <v-flex class="story-card pointer" v-for="(story, i) in stories" :key="i" 
        xs12 sm6 md3 lg4>
          <story-card :story="story" @click="openDialog(story, false)"></story-card>
        </v-flex>
      </v-layout>
    </v-container>
    <preface-dialog v-if="dialog" ref="preface"></preface-dialog>
    <div>{{viewport}}</div>
  </div>
</template>

<script>
import PrefaceDialog from '../shared/dialogs/PrefaceDialog'
import StoryCard from './StoryCard'
import { mapGetters, createNamespacedHelpers } from 'vuex'
import { actionTypes, mutationTypes } from '../../store/modules/story/types'
import * as rootTypes from '../../store/root/types'

const { mapState, mapActions } = createNamespacedHelpers('story')
const { FETCH_STORIES_INFOS } = actionTypes
const { SET_SELECTED_STORY, SET_SELECTED_COLLECTION } = mutationTypes
const { GET_DIALOG_VALUE } = rootTypes.getterTypes

export default {
  data () {
    return {
    }
  },
  mounted () {
    // todo: define defaultParams in vuex store
    let params = {
      populate: { path: 'author', select: 'authorName' }
    }

    this[FETCH_STORIES_INFOS](params)
  },
  computed: {
    ...mapState(['news', 'stories', 'collections']),
    ...mapGetters([GET_DIALOG_VALUE]),

    dialog: {
      get () {
        return this[GET_DIALOG_VALUE]
      }
    }
  },
  methods: {
    ...mapActions([FETCH_STORIES_INFOS]),

    openDialog (post, isCollection) {
      let callback = () => {
        if(isCollection) {
          this[SET_SELECTED_COLLECTION](post.id)
        } else {
          this[SET_SELECTED_STORY](post.id)   
        }
        this.updateRoute(post.title) //todo : add router context
      }

      this.$refs.preface.openDialog(post, callback)
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
