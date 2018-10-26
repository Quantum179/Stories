import { actionTypes, mutationTypes } from './types'
const { TOGGLE_DRAWER_ACTION } = actionTypes
const { TOGGLE_DRAWER } = mutationTypes

export const state = {
  drawer: false
}

export const actions = {
  [TOGGLE_DRAWER_ACTION] ({commit}) {
    commit(TOGGLE_DRAWER)
  }
}

export const mutations = {
  [TOGGLE_DRAWER] (state) {
    console.log('TOGGLE DRAWER')
    state.drawer = !state.drawer
  }
}
