import axios from 'axios'
import { apiUrl } from '../../../constants'
/* import { OK, INTERNAL_SERVAL_ERROR } from 'http-status-code' */

import { actionTypes, mutationTypes } from './types'

/* TODO : mettre ça côté API
{
  name: 'Histoires',
  label: 'Histoires',
  description: "Venez découvrir les divers recueils de nouvelles provenant de la galaxie d'Elem et des écrivains de la communauté de Stories.",
  routerSrc: '/stories'
},
{
  name: 'Les Chroniques de Saturn',
  label: 'Chroniques'
  description: "Saturn, le Dieu de la Mort exerçant dans la galaxie d'Elem, adopte un rôle de narrateur pour nous raconter quelques contes d'Elem.",
  routerSrc: '/chronicles'
},
{
  name: 'Blog',
  label: 'Blog',
  description: "De nombreux articles aux sujets variés sont disponibles sur le blog d'ExoSoft : littérature, numériques, Antilles et autres.",
  routerSrc: '/blog'
},
{
  name: 'ExoMag',
  label: 'Mag'
  description: "Magazine mensuel d'ExoSoft. On peut y retrouver les meilleurs posts du mois et des articles exclusivement dédiés au Mag.",
  routerSrc: '/mag'
} */

// state
const state = {
  news: [],
  latestPosts: [],
  categories: [],
  selectedCategory: null
}

const { FETCH_HOME_INFOS } = actionTypes
const { SET_HOME_NEWS, SET_LATEST_POSTS, SET_CATEGORIES, SET_SELECTED_CATEGORY } = mutationTypes

// actions
const actions = {
  [FETCH_HOME_INFOS] ({ commit }) {
    /*     let news = ['hey', 'lol', 'test']
    let posts = ['hey', 'lol', 'test']
    let categories = ['hey', 'lol', 'test']
    commit(SET_HOME_NEWS, news)
    commit(SET_LATEST_POSTS, posts)
    commit(SET_CATEGORIES, categories) */
    axios.get(apiUrl + '/home')
      .then(res => {
        if (res.status === 200) {
          // TODO : sanitize api response data
          let {news, posts, categories} = res.data
          commit(SET_HOME_NEWS, news)
          commit(SET_LATEST_POSTS, posts)
          commit(SET_CATEGORIES, categories)
        } else {
          // TODO
          if (res.status === 500) {
            // TODO: pop-up error state
            // commit(DISPLAY_ERROR)
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}

// mutations
const mutations = {
  [SET_HOME_NEWS] (state, news) {
    state.news = news
  },
  [SET_LATEST_POSTS] (state, posts) {
    state.latestPosts = posts
  },
  [SET_CATEGORIES] (state, categories) {
    state.categories = categories
  },
  [SET_SELECTED_CATEGORY] (state, category) {
    if (state.selectedCategory.name !== category.name) {
      state.selectedCategory = category
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
