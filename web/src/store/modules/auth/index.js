import axios from 'axios'
import { apiUrl } from '../../../constants'

import { actionTypes, mutationTypes } from './types'

// state
const state = {
  user: null
}

const { REQUEST_LOGIN, REQUEST_REGISTER, REQUEST_SUBSCRIPTION } = actionTypes
const { SET_USER } = mutationTypes

// actions
const actions = {
  [REQUEST_LOGIN] ({ commit }, payload) {
    return axios.post(`${apiUrl}/auth/login`, { payload })
      .then(res => {
        if (res.status === 200) {
          let { user } = res.data
          commit(SET_USER, user)
        } else {
          // TODO
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  [REQUEST_REGISTER] ({ commit }, payload) {
    return axios.post(`${apiUrl}/auth/register`, { payload })
      .then(res => {
        if (res.status === 200) {
          let { user } = res.data
          commit(SET_USER, user)
        } else {
          // TODO
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  [REQUEST_SUBSCRIPTION] ({ commit }, payload) {
    return axios.post(`${apiUrl}/auth/subscribe`, { payload })
      .then(res => {
        if (res.status === 200) {
          if(this.user === null) {
            let { user } = res.data
            commit(SET_USER, user)          
          }
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
  [SET_USER] (state, user) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
