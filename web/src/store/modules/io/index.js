import axios from 'axios'
import { actionTypes, mutationTypes } from './types'

// https://blog.sqreen.io/authentication-best-practices-vue/

// state
const state = {
  token: null,
  status: null,
  chatrooms: [],
  currentChatID: null,
  chatDetails: {}
}

const { REQUEST_LOGIN, REQUEST_LOGOUT } = actionTypes
const { SET_TOKEN, REMOVE_TOKEN } = mutationTypes

// actions
const actions = {
  test({commit}) {
    commit(SET_TOKEN, null)
  },
  [REQUEST_LOGIN] ({ commit }, payload) {
    return axios.post(`/io/login`, { payload })
      .then(res => {
        if (res.status === 200) {
          let { token, user } = res.data
          commit(SET_TOKEN, token)
          return user
        } else {
          // TODO
        }
      })
      .catch(err => {
        throw err
      })
  },
  [REQUEST_LOGOUT] ({ commit }) {
    return this.$http.post(`/io/logout`)
      .then(res => {
        if (res.status === 200) {
          let { token, user } = res.data
          commit(SET_TOKEN, token)
          return user
        } else {
          // TODO
        }
      })
      .catch(err => {
        throw err
      })
  }
}

// mutations
const mutations = {
  [SET_TOKEN] (state, token) {
    state.token = token
  },
  [REMOVE_TOKEN] (state) {
    state.token = null
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
