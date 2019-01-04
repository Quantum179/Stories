import axios from 'axios'
import { apiUrl } from '../../../constants'

import { actionTypes, mutationTypes } from './types'

// https://blog.sqreen.io/authentication-best-practices-vue/

// state
const state = {
  token: null,
  status: null
}

const { REQUEST_LOGIN, REQUEST_REGISTER, REQUEST_SUBSCRIPTION, REQUEST_LOGOUT } = actionTypes
const { SET_TOKEN } = mutationTypes

// actions
const actions = {
  test({commit}) {
    commit(SET_TOKEN, null)
  },
  [REQUEST_LOGIN] ({ commit }, payload) {
    return axios.post(`${apiUrl}/auth/login`, { payload })
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
  [REQUEST_REGISTER] (payload) {
    return axios.post(`${apiUrl}/auth/register`, { payload })
      .then(res => {
        if (res.status === 200) {
          // todo
        } else {
          // TODO
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  [REQUEST_SUBSCRIPTION] (payload) {
    return axios.post(`${apiUrl}/auth/subscribe`, { payload })
      .then(res => {
        if (res.status === 200) {
          // todo
        } else {
          // TODO
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  [REQUEST_LOGOUT] ({ commit }) {
    return new Promise((resolve) => {
       // todo: api call to invalidate token
      commit(SET_TOKEN, null)
      resolve()
    })
  }
}

// mutations
const mutations = {
  [SET_TOKEN] (state, token) {
    state.token = token
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
