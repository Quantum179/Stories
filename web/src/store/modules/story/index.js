import qs from 'qs'
import $http from '../../../services/http'
import { actionTypes, mutationTypes } from './types'

const { FETCH_STORIES_INFOS, FETCH_STORY_DETAILS, FETCH_COLLECTION_DETAILS } = actionTypes
const { 
  SET_STORIES_NEWS, 
  SET_STORIES, 
  SET_COLLECTIONS,
  SET_STORY_DETAILS, 
  SET_COLLECTION_DETAILS,
  SET_SELECTED_STORY,
  SET_SELECTED_COLLECTION,
  OPEN_DRAWER,
  CLOSE_DRAWER,
  TOGGLE_DRAWER
} = mutationTypes

const state = {
  news: [],
  stories: [],
  selectedStoryID: null,
  storyDetails: {},
  collection: [],
  selectedCollectionID: null,
  collectionDetails: {}
}

const actions = {
  [FETCH_STORIES_INFOS] ({ commit }, params = null) {
    return $http.get(`/stories?${qs.stringify(params)}`)
      .then(res => {
        if (res.status === 200) {
          let { stories } = res.data
          commit(SET_STORIES, stories)
        } else {
          // TODO
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  [FETCH_STORY_DETAILS] ({ commit, state, rootState }, params = null) {
    return $http.get(`/stories/${state.selectedStoryID}?${qs.stringify(params)}`, 
    { headers: { Authorization: `JWT ${rootState.auth.token}` } })
      .then(res => {
        if (res.status === 200) {
          let { story } = res.data
          commit(SET_STORY_DETAILS, story)
        } else {
          // TODO
        }
        return res.status
      })
      .catch(err => {
        return err.response.status
      })
  },
  [FETCH_COLLECTION_DETAILS] ({ commit, state }, params = null) {
    return $http.get(`/collections/${state.selectedCollectionID}?${qs.stringify(params)}`)
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
  },
  [OPEN_DRAWER] (state) {
    state.drawer = true
  },
  [CLOSE_DRAWER] (state) {
    state.drawer = false
  },
  [TOGGLE_DRAWER] (state) {
    state.drawer = !state.drawer
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
