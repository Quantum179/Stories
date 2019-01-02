import { getterTypes, actionTypes, mutationTypes } from './types'
const { GET_DRAWER_VALUE, GET_DIALOG_VALUE } = getterTypes
const { TOGGLE_DRAWER_ACTION, OPEN_DIALOG_ACTION, CLOSE_DIALOG_ACTION } = actionTypes
const { TOGGLE_DRAWER, OPEN_DIALOG, CLOSE_DIALOG } = mutationTypes

export const state = {
  drawer: false,
  dialog: false,
  navCategories: [
    { title: 'Histoires', icon: 'dashboard', src: 'stories' },
    { title: 'Chroniques de Saturn', icon: 'dashboard', src: 'chronicles' },
    { title: 'Blog', icon: 'dashboard', src: 'blog' },
    { title: 'ExoMag', icon: 'dashboard', src: 'mag' }
  ],
  navOptions: [
    { title: 'A Propos', icon: 'dashboard', src: 'aboutus' },
    { title: 'Nous Contacter', icon: 'dashboard', src: 'contact' },
    { title: 'Paramètres', icon: 'dashboard', src: 'settings' }
  ]
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
  },
  [CLOSE_DIALOG_ACTION] ({commit}) {
    commit(CLOSE_DIALOG)
  },

}

export const mutations = {
  [TOGGLE_DRAWER] (state) {
    state.drawer = !state.drawer
  },
  [OPEN_DIALOG] (state) {
    state.dialog = true
  },
  [CLOSE_DIALOG] (state) {
    state.dialog = false
  }
}
