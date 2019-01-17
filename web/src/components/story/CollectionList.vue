<template>
  <div id="collections" text-xs-center>
    <v-flex xs12 justify-center>
      <h1>Collections d'histoires</h1>
    </v-flex>
    <v-container grid-list-md>
      <v-layout xs12 row wrap>
        <v-flex class="collection-flex pointer pa-2" @click="openPreface(collection)" v-for="(collection, i) in collections" :key="i" 
        xs12 sm4 md4 lg4
        :class="offset(i)">
          <collection-card class="collection-card" :collection="collection"></collection-card>
        </v-flex>
      </v-layout>
    </v-container>
    <preface-dialog ref="preface"></preface-dialog>
  </div>
</template>

<script>
import PrefaceDialog from '../shared/dialogs/PrefaceDialog'
import CollectionCard from './CollectionCard'
import { createNamespacedHelpers } from 'vuex'
import { actionTypes, mutationTypes } from '../../store/modules/story/types'

const { mapState, mapActions, mapMutations } = createNamespacedHelpers('story')
const { FETCH_COLLECTIONS_INFOS } = actionTypes
const { SET_SELECTED_COLLECTION } = mutationTypes


export default {
  data () {
    return {
      params = {
        populate: [
          { path: 'author', select: 'authorName' }, 
          { path: 'preface', select: 'sentences' }
        ]
      }
    }
  },
  mounted () {
    // todo: define defaultParams in vuex store

    this[FETCH_STORIES_INFOS](params)
  },
  computed: {
    ...mapState(['news', 'stories', 'collections'])
  },
  methods: {
    ...mapActions([FETCH_STORIES_INFOS]),
    ...mapMutations([SET_SELECTED_STORY, SET_SELECTED_COLLECTION]),

    openPreface (collection) {
      let that = this
      let callback = () => {
        that[SET_SELECTED_COLLECTION](collection.id)   
        that.updateRoute('collection', {id: collection.id})
      }
      this.$refs.preface.openDialog(collection, callback)
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
    CollectionCard
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
