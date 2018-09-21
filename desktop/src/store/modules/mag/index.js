import { apiUrl } from '../../../constants'
import { OK } from 'http-status-code'

const state = {
  news: [],
  magNumbers: [],
  selectedMagNumber: {}
}

const getters = {}

const actions = {
  getMagInfos ({ commit }) {
    this.$http.get(apiUrl + '/mag')
      .then(res => {
        if (res.status === OK) {
          let {news, magNumbers} = res.data
          commit('setMagNews', news)
          commit('setMagNumbers', magNumbers)
        } else {
          // TODO
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  getMagNumber ({commit}, id) {
    this.$http.get(apiUrl + '/mag' + id)
      .then(res => {
        if (res.status === OK) {
          let {magNumber} = res.data
          commit('setMagNumber', magNumber)
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
  setMagNews (state, news) {
    state.news = news
  },
  setMagNumbers (state, magNumbers) {
    state.magNumbers = magNumbers
  },
  setMagNumber (state, magNumber) {
    state.selectedMagNumber = magNumber
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
