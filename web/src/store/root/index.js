import { getterTypes, actionTypes, mutationTypes } from './types'
const { GET_DRAWER_VALUE, GET_DIALOG_VALUE } = getterTypes
const { TOGGLE_DRAWER_ACTION, OPEN_DIALOG_ACTION } = actionTypes
const { TOGGLE_DRAWER, OPEN_DIALOG } = mutationTypes

export const state = {
  drawer: false,
  dialog: false
}

export const getters = {
  [GET_DRAWER_VALUE] (state) {
    return state.drawer
  },
  [GET_DIALOG_VALUE] (state) {
    return state.dialog
  }
}

export const actions = {
  [TOGGLE_DRAWER_ACTION] ({commit}) {
    commit(TOGGLE_DRAWER)
  },
  [OPEN_DIALOG_ACTION] ({commit}) {
    commit(OPEN_DIALOG)
  }
}

export const mutations = {
  [TOGGLE_DRAWER] (state) {
    state.drawer = !state.drawer
  },
  [OPEN_DIALOG] (state) {
    state.dialog = !state.dialog
  }
}
