import axios from 'axios'
import { apiUrl } from '../../../constants'
/* import { OK } from 'http-status-code' */

import { actionTypes, mutationTypes } from './types'

const { FETCH_STORIES_INFOS, FETCH_STORY_DETAILS, FETCH_COLLECTION_DETAILS } = actionTypes
const { 
  SET_STORIES_NEWS, 
  SET_STORIES, 
  SET_COLLECTIONS,
  SET_STORY_DETAILS, 
  SET_COLLECTION_DETAILS,
  SET_SELECTED_STORY,
  SET_SELECTED_COLLECTION
} = mutationTypes

const state = {
  news: [],
  stories: [],
  selectedStoryID: null,
  storyDetails: null,
  collection: [],
  selectedCollectionID: null,
  collectionDetails: null
}

const actions = {
  [FETCH_STORIES_INFOS] ({ commit }) {
    axios.get(`${apiUrl}/stories`)
      .then(res => {
        if (res.status === 200) {
          let { stories, collections } = res.data
          /* commit(SET_STORIES_NEWS, news) */
          commit(SET_STORIES, stories)
          commit(SET_COLLECTIONS, collections)
        } else {
          // TODO
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  [FETCH_STORY_DETAILS] ({ commit, state }) {
    axios.get(`${apiUrl}/stories/${state.selectedStoryID}`)
      .then(res => {
        if (res.status === 200) {
          let { story } = res.data
          commit(SET_STORY_DETAILS, story)
        } else {
          // TODO
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  [FETCH_COLLECTION_DETAILS] ({ commit, state }) {
    axios.get(`${apiUrl}/collections/${state.selectedCollectionID}`)
      .then(res => {
        if (res.status === 200) {
          let { collection } = res.data
          commit(SET_COLLECTION_DETAILS, collection)
        } else {
          // TODO
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const mutations = {
  [SET_STORIES_NEWS] (state, news) {
    state.news = news
  },
  [SET_STORIES] (state, stories) {
    state.stories = stories
  },
  [SET_SELECTED_STORY] (state, storyID) {
    state.selectedStoryID = storyID
  },
  [SET_STORY_DETAILS] (state, story) {
    state.storyDetails = story
  },
  [SET_COLLECTIONS] (state, collections) {
    state.collections = collections
  },
  [SET_SELECTED_COLLECTION] (state, collectionID) {
    state.selectedCollectionID = collectionID
  },
  [SET_COLLECTION_DETAILS] (state, collection) {
    state.collectionDetails = collection
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
