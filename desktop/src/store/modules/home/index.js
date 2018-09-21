import { apiUrl } from '../../constants'
import { OK } from 'http-status-code'

/* TODO : mettre ça côté API
{
  name: 'Histoires',
  description: "Venez découvrir les divers recueils de nouvelles provenant de la galaxie d'Elem et des écrivains de la communauté de Stories.",
  routerSrc: '/stories'
},
{
  name: 'Les Chroniques de Saturn',
  description: "Saturn, le Dieu de la Mort exerçant dans la galaxie d'Elem, adopte un rôle de narrateur pour nous raconter quelques contes d'Elem.",
  routerSrc: '/chronicles'
},
{
  name: 'Blog',
  description: "De nombreux articles aux sujets variés sont disponibles sur le blog d'ExoSoft : littérature, informatique, Antilles et autres.",
  routerSrc: '/blog'
},
{
  name: 'ExoMag',
  description: "Magazine mensuel d'ExoSoft. On peut y retrouver les meilleurs posts du mois et des articles exclusivement dédiés au Mag.",
  routerSrc: '/mag'
} */

// state
const state = {
  news: [],
  latestPosts: [],
  categories: []
}

// getters
const getters = {}

// actions
const actions = {
  getHomeInfos ({ commit }) {
    this.$http.get(apiUrl + '/home')
      .then(res => {
        if (res.status === OK) {
          let {news, posts, categories} = res.data
          commit('setHomeNews', news)
          commit('setLatestPosts', posts)
          commit('setCategories', categories)
        } else {
          // TODO
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}

// mutations
const mutations = {
  setHomeNews (state, news) {
    state.news = news
  },
  setLatestPosts (state, posts) {
    state.latestPosts = posts
  },
  setCategories (state, categories) {
    state.categories = categories
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
