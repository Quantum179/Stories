import { apiUrl } from '../../constants'
import { OK, INTERNAL_SERVAL_ERROR } from 'http-status-code'

import { actionTypes, mutationTypes } from './types'

// state
const state = {
  news: [],
  trendingArticles: [],
  latestArticles: [],
  selectedArticleID: null,
  articleDetails: null
}

const { FETCH_BLOG_INFOS, FETCH_ARTICLE_DETAILS } = actionTypes
const { SET_BLOG_NEWS, SET_TRENDING_ARTICLES, SET_LATEST_ARTICLES, SET_ARTICLE_DETAILS } = mutationTypes

// actions
const actions = {
  [FETCH_BLOG_INFOS] ({ commit }) {
    this.$http.get(`${apiUrl}/blog`)
      .then(res => {
        if (res.status === OK) {
          // TODO : sanitize api response data
          let {news, articles, categories} = res.data
          commit(SET_BLOG_NEWS, news)
          commit(SET_TRENDING_ARTICLES, categories)
          commit(SET_LATEST_ARTICLES, articles)
        } else {
          // TODO
          if (res.status === INTERNAL_SERVAL_ERROR) {
            // TODO: pop-up error state
            // commit(DISPLAY_ERROR)
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  [FETCH_ARTICLE_DETAILS] ({commit, state}) {
    this.$http.get(`${apiUrl}/articles/${state.selectedArticleID}`)
      .then(res => {
        if (res.status === OK) {
          let {article} = res.data
          commit(SET_ARTICLE_DETAILS, article)
        } else {

        }
      })
  }
}

// mutations
const mutations = {
  [SET_BLOG_NEWS] (state, news) {
    state.news = news
  },
  [SET_TRENDING_ARTICLES] (state, articles) {
    state.trendingArticles = articles
  },
  [SET_LATEST_ARTICLES] (state, articles) {
    state.latestArticles = articles
  },
  [SET_ARTICLE_DETAILS] (state, article) {
    state.articleDetails = article
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
