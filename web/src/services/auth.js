import jwt from 'jsonwebtoken'

export const checkAuthorization = () => {
  //TODO 
  return true
}

export const authGuard = function(token = null, user, permission = null) {
  if(token === null || jwt.decode(token).exp < Date.now() / 1000) {
    return false
  } else if (permission && !checkAuthorization(permission, user.roles)) {
    return false
  } else {
    return true
  }
}

export const authHeader = () => {
  return { headers : { Authorization: `JWT ${localStorage.getItem('token')}`} }
}