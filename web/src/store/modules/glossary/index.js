import qs from 'qs'
import $http from '../../../services/http'
import { actionTypes, mutationTypes } from './types'

const { 
  FETCH_GLOSSARY_INFOS, 
  FETCH_DEFINITION_DETAILS 
} = actionTypes
const { 
  SET_GLOSSARY_NEWS, 
  SET_DEFINITIONS,
  SET_DEFINITION_DETAILS, 
  SET_SELECTED_DEFINITION
} = mutationTypes

const state = {
  news: [],
  definitions: [],
  selectedDefinitionID: null,
  definitionDetails: {}
}

const actions = {
  [FETCH_GLOSSARY_INFOS] ({ commit }, params = null) {
    return $http.get(`/definitions?${qs.stringify(params)}`)
      .then(res => {
        if (res.status === 200) {
          let { definitions } = res.data
          commit(SET_DEFINITIONS, definitions)
        } else {
          // TODO
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  [FETCH_DEFINITION_DETAILS] ({ commit, state, rootState }, params = null) {
    return $http.get(`/definitions/${state.selectedDefinitionID}?${qs.stringify(params)}`, 
    { headers: { Authorization: `JWT ${rootState.auth.token}` } })
      .then(res => {
        if (res.status === 200) {
          let { definition } = res.data
          commit(SET_DEFINITION_DETAILS, definition)
        } else {
          // TODO
        }
      })
      .catch(err => {
        return err.response.status
      })
  }
}

const mutations = {
  [SET_GLOSSARY_NEWS] (state, news) {
    state.news = news
  },
  [SET_DEFINITIONS] (state, definitions) {
    state.definitions = definitions
  },
  [SET_SELECTED_DEFINITION] (state, definitionID) {
    state.selecteddefinitionID = definitionID
  },
  [SET_DEFINITION_DETAILS] (state, definition) {
    state.definitionDetails = definition
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
