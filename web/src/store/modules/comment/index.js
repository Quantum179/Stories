import $http from '../../../services/http'
import { actionTypes } from './types'

const { 
  ADD_COMMENT
} = actionTypes

const state = {
  newComment: {}
}

const actions = {
  [ADD_COMMENT] ({ commit }, comment) {
    debugger
    return $http.post(`/comments?`, { comment })
      .then(res => {
        if (res.status === 200) {
          commit('success')
          // TODO commit
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
  success () {
    //todo
  }
}
  
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
