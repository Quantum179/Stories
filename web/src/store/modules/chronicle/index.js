import qs from 'qs'
import $http from '../../../services/http'
import { actionTypes, mutationTypes } from './types'

const { 
  FETCH_CHRONICLES_INFOS, 
  FETCH_CHRONICLE_DETAILS 
} = actionTypes
const { 
  SET_CHRONICLES_NEWS, 
  SET_CHRONICLES,
  SET_CHRONICLE_DETAILS, 
  SET_SELECTED_CHRONICLE
} = mutationTypes

const state = {
  news: [],
  chronicles: [],
  selectedChronicleID: null,
  chronicleDetails: {}
}

const actions = {
  [FETCH_CHRONICLES_INFOS] ({ commit }, params = null) {
    return $http.get(`/chronicles?${qs.stringify(params)}`)
      .then(res => {
        if (res.status === 200) {
          let { chronicles } = res.data
          commit(SET_CHRONICLES, chronicles)
        } else {
          // TODO
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  [FETCH_CHRONICLE_DETAILS] ({ commit, state, rootState }, params = null) {
    return $http.get(`/chronicles/${state.selectedChronicleID}?${qs.stringify(params)}`, 
    { headers: { Authorization: `JWT ${rootState.auth.token}` } })
      .then(res => {
        if (res.status === 200) {
          let { chronicle } = res.data
          commit(SET_CHRONICLE_DETAILS, chronicle)
        }
        
        return res.status
      })
      .catch(err => {
        return err.response.status
      })
  }
}

const mutations = {
  [SET_CHRONICLES_NEWS] (state, news) {
    state.news = news
  },
  [SET_CHRONICLES] (state, chronicles) {
    state.chronicles = chronicles
  },
  [SET_SELECTED_CHRONICLE] (state, chronicleID) {
    state.selectedChronicleID = chronicleID
  },
  [SET_CHRONICLE_DETAILS] (state, chronicle) {
    state.chronicleDetails = chronicle
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
