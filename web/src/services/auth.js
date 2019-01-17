import store from '../store'

export const authGuard = () => {
}

export const authHeader = () => {
  return { headers : { Authorization: `JWT ${store.auth.token}`} }
}