import { getterTypes, actionTypes, mutationTypes } from './types'

const { 
  GET_DRAWER_VALUE, 
  GET_DIALOG_VALUE, 
  GET_SNACKBAR_VALUE 
} = getterTypes
const { 
  SHOW_DRAWER_ACTION, 
  CLOSE_DRAWER_ACTION, 
  OPEN_DIALOG_ACTION, 
  CLOSE_DIALOG_ACTION, 
  SHOW_SNACKBAR_ACTION,
  CLOSE_SNACKBAR_ACTION
} = actionTypes
const { 
  TOGGLE_DRAWER,
  SHOW_DRAWER, 
  CLOSE_DRAWER,
  OPEN_DIALOG, 
  CLOSE_DIALOG, 
  SHOW_SNACKBAR, 
  CLOSE_SNACKBAR,
  SET_SNACKBAR_TEXT,
  CLEAR_SNACKBAR_TEXT ,
  ADD_EXTENSION,
  REMOVE_EXTENSION
} = mutationTypes

export const state = {
  drawer: false,
  dialog: false,
  snackbar: false,
  snackbarText: '',
  isSearching: false,
  extension: '',
  navCategories: [
    { title: 'Histoires', icon: 'dashboard', src: 'stories' },
    { title: 'Chroniques', icon: 'dashboard', src: 'chronicles' },
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
  },
  [GET_SNACKBAR_VALUE] (state) {
    return state.snackbar
  }
}

export const actions = {
  [SHOW_DRAWER_ACTION] ({ commit }) {
    commit(SHOW_DRAWER)
  },
  [CLOSE_DRAWER_ACTION] ({ commit }) {
    commit(CLOSE_DRAWER)
  },
  [OPEN_DIALOG_ACTION] ({ commit }) {
    commit(OPEN_DIALOG)
  },
  [CLOSE_DIALOG_ACTION] ({ commit }) {
    commit(CLOSE_DIALOG)
  },
  [SHOW_SNACKBAR_ACTION] ({ commit }, text) {
    commit(SET_SNACKBAR_TEXT, text)
    commit(SHOW_SNACKBAR)
  },
  [CLOSE_SNACKBAR_ACTION] ({ commit }) {
    commit(CLEAR_SNACKBAR_TEXT)
    commit(CLOSE_SNACKBAR)
  }

}

export const mutations = {
  [TOGGLE_DRAWER] (state) {
    state.drawer = !state.drawer
  },
  [SHOW_DRAWER] (state) {
    state.drawer = true
  },
  [CLOSE_DRAWER] (state) {
    state.drawer = false
  },
  [OPEN_DIALOG] (state) {
    state.dialog = true
  },
  [CLOSE_DIALOG] (state) {
    state.dialog = false
  },
  [SHOW_SNACKBAR] (state) {
    state.snackbar = true
  },
  [CLOSE_SNACKBAR] (state) {
    state.snackbar = false
  },
  [SET_SNACKBAR_TEXT] (state, text) {
    state.snackbarText = text
  },
  [CLEAR_SNACKBAR_TEXT] (state) {
    state.snackbarText = ''
  },
  [ADD_EXTENSION] (state, name) {
    state.extension = name
  },
  [REMOVE_EXTENSION] (state) {
    state.extension = ''
  },
}
