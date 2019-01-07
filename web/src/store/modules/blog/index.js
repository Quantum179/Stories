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
    this.$http.get(`/blog`)
      .then(res => {
        if (res.status === 200) {
          // TODO : sanitize api response data
          let { news, articles, categories } = res.data
          commit(SET_BLOG_NEWS, news)
          commit(SET_TRENDING_ARTICLES, categories)
          commit(SET_LATEST_ARTICLES, articles)
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
  },
  [FETCH_ARTICLE_DETAILS] ({ commit, state }) {
    this.$http.get(`/articles/${state.selectedArticleID}`)
      .then(res => {
        if (res.status === 200) {
          let { article } = res.data
          commit(SET_ARTICLE_DETAILS, article)
        } else {
          // TODO
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
