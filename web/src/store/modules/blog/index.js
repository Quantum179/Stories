import qs from 'qs'
import $http from '../../../services/http'
import { actionTypes, mutationTypes } from './types'

// state
const state = {
  news: [],
  topics: [],
  selectedTopicID: null,
  topicDetails: {},
  trendingArticles: [],
  latestArticles: [],
  selectedArticleID: null,
  articleDetails: {}
}

const { 
  FETCH_BLOG_INFOS, 
  FETCH_TOPIC_DETAILS,
  FETCH_ARTICLE_DETAILS
} = actionTypes
const { 
  SET_BLOG_NEWS, 
  SET_TOPICS, 
  SET_TOPIC_DETAILS,
  SET_TRENDING_ARTICLES, 
  SET_LATEST_ARTICLES, 
  SET_ARTICLE_DETAILS,
  SET_SELECTED_ARTICLE
} = mutationTypes

// actions
const actions = {
  [FETCH_BLOG_INFOS] ({ commit }, params) {
    return $http.get(`/blog/articles?${qs.stringify(params)}`)
      .then(res => {
        if (res.status === 200) {
          // TODO : sanitize api response data
          let { latestArticles } = res.data
/*           commit(SET_BLOG_NEWS, news)
          commit(SET_TOPICS, topics)
          commit(SET_TRENDING_ARTICLES, trendingArticles) */
          commit(SET_LATEST_ARTICLES, latestArticles)
          return 200
        } else {
          // TODO
          if (res.status === 500) {
            // TODO: pop-up error state
            // commit(DISPLAY_ERROR)
          }
        }
      })
      .catch(() => {
        //todo
      })
  },
  [FETCH_TOPIC_DETAILS]({ commit }, params) {
    return $http.get(`blog/topics/${state.selectedTopicID}?${qs.stringify(params)}`)
    .then(res => {
      if(res.status === 200) {
        let { topic } = res.data
        commit(SET_TOPIC_DETAILS, topic)
      }
    })
  },
  [FETCH_ARTICLE_DETAILS] ({ commit, state }, params) {
    return $http.get(`blog/articles/${state.selectedArticleID}?${qs.stringify(params)}`)
      .then(res => {
        if (res.status === 200) {
          let { article } = res.data
          commit(SET_ARTICLE_DETAILS, article)
        } else {
          // TODO
        }
        return res.status
      })
  }
}

// mutations
const mutations = {
  [SET_BLOG_NEWS] (state, news) {
    state.news = news
  },
  [SET_TOPICS] (state, topics) {
    state.topics = topics
  },
  [SET_TOPIC_DETAILS] (state, topic) {
    state.topicDetails = topic
  },
  [SET_TRENDING_ARTICLES] (state, articles) {
    state.trendingArticles = articles
  },
  [SET_LATEST_ARTICLES] (state, articles) {
    state.latestArticles = articles
  },
  [SET_ARTICLE_DETAILS] (state, article) {
    state.articleDetails = article
  },
  [SET_SELECTED_ARTICLE] ( state, articleID) {
    state.selectedArticleID = articleID
  }

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
