import axios from 'axios'
import { apiUrl } from '../../../constants'
/* import { OK } from 'http-status-code' */

import { actionTypes, mutationTypes } from './types'

const { FETCH_STORIES_INFOS, FETCH_STORY_DETAILS } = actionTypes
const { SET_STORIES_NEWS, SET_STORIES, SET_STORY_DETAILS, SET_SELECTED_STORY } = mutationTypes

const state = {
  news: [],
  stories: [
    {
      title: 'Test story 1',
      content: "Voici la premiere histoire de test que l'on va retrouver sur le site de Stories"
    },
    {
      title: 'Test story 2',
      content: "Voici la premiere histoire de test que l'on va retrouver sur le site de Stories"
    },
    {
      title: 'Test story 3',
      content: "Voici la premiere histoire de test que l'on va retrouver sur le site de Stories"
    }
  ],
  selectedStory: null,
  storyDetails: null
}

const actions = {
  [FETCH_STORIES_INFOS] ({ commit }) {
    console.log('heeeeey')
    debugger
    axios.get(apiUrl + '/stories?home=true')
      .then(res => {
        if (res.status === 200) {
          let {news, stories} = res.data
          commit(SET_STORIES_NEWS, news)
          commit(SET_STORIES, stories)
        } else {
          // TODO
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  [FETCH_STORY_DETAILS] ({commit}, id) {
    axios.get(apiUrl + '/stories/' + id)
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
  [SET_SELECTED_STORY] (state, story) {
    state.selectedStory = story
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
