import qs from 'qs'
import $http from '../../../services/http'
import { authHeader } from '../../../services/auth'
import { actionTypes, mutationTypes } from './types'

const { FETCH_MAG_INFOS, FETCH_MAG_NUMBER_DETAILS } = actionTypes
const { SET_MAG_NEWS, SET_MAG_NUMBERS, SET_MAG_NUMBER_DETAILS, SET_SELECTED_MAG_NUMBER } = mutationTypes

const state = {
  news: [],
  magNumbers: [],
  selectedMagNumberID: null,
  magNumberDetails: null
}

const actions = {
  [FETCH_MAG_INFOS] ({ commit }, params) {
    return $http.get(`/mag/news?${qs.stringify(params)}`)
      .then(res => {
        if (res.status === 200) {
          let { news, magNumbers } = res.data
          commit(SET_MAG_NEWS, news)
          commit(SET_MAG_NUMBERS, magNumbers)
        } else {
          // TODO
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  [FETCH_MAG_NUMBER_DETAILS] ({ commit, state }, params) {
    return $http.get(`/mag/${state.selectedMagNumberID}?${qs.stringify(params)}`, 
    { headers: authHeader() }) // todo : simplify
      .then(res => {
        if (res.status === 200) {
          let { magNumber } = res.data
          commit(SET_MAG_NUMBER_DETAILS, magNumber)
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
  [SET_MAG_NEWS] (state, news) {
    state.news = news
  },
  [SET_MAG_NUMBERS] (state, magNumbers) {
    state.magNumbers = magNumbers
  },
  [SET_SELECTED_MAG_NUMBER] (state, magNumber) {
    state.selectedMagNumber = magNumber
  },
  [SET_MAG_NUMBER_DETAILS] (state, magNumber) {
    state.magNumberDetails = magNumber
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
