import axios from 'axios'
import { apiUrl } from '../../../constants'
/* import { OK } from 'http-status-code' */

import { actionTypes, mutationTypes } from './types'

const { FETCH_STORIES_INFOS, FETCH_STORY_DETAILS } = actionTypes
const { SET_STORIES_NEWS, SET_STORIES, SET_STORY_DETAILS, SET_SELECTED_STORY } = mutationTypes

const state = {
  news: [],
  stories: [],
  selectedStoryID: null,
  storyDetails: null
}

const actions = {
  [FETCH_STORIES_INFOS] ({ commit }) {
    axios.get(`${apiUrl}/stories`)
      .then(res => {
        if (res.status === 200) {
          let {stories} = res.data
          /* commit(SET_STORIES_NEWS, news) */
          commit(SET_STORIES, stories)
        } else {
          // TODO
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  [FETCH_STORY_DETAILS] ({commit, state}) {
    axios.get(`${apiUrl}/stories/${state.selectedStoryID}`)
      .then(res => {
        if (res.status === 200) {
          let {story} = res.data
          commit(SET_STORY_DETAILS, story)
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
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
