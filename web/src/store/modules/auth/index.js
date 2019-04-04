import $http from '../../../services/http'
import { actionTypes, mutationTypes } from './types'
import { createUserModel } from '../../../factories';

const { REQUEST_LOGIN, REQUEST_REGISTER, REQUEST_SUBSCRIPTION, REQUEST_LOGOUT } = actionTypes
const { SET_USER, SET_TOKEN, REMOVE_TOKEN } = mutationTypes

// https://blog.sqreen.io/authentication-best-practices-vue/

// state
const state = {
  user: createUserModel(),
  token: null,
  status: null
}


// actions
const actions = {
  [REQUEST_LOGIN] ({ commit }, payload) {
    return $http.post(`/auth/login`, { payload })
      .then(res => {
        if (res.status === 200) {
          let { token, user } = res.data
          commit(SET_USER, user)
          commit(SET_TOKEN, token)
          localStorage.setItem('token', token)
          return user
        } else {
          // TODO
        }
      })
      .catch(() => {
        /* throw err */
      })
  },
  [REQUEST_REGISTER] (payload) {
    return this.$http.post(`/auth/register`, { payload })
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
    return this.$http.post(`/auth/subscribe`, { payload })
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
      commit(SET_USER, createUserModel())
      resolve()
    })
  }
}

// mutations
const mutations = {
  [SET_USER] (state, user) {
    state.user = user
  },  
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
