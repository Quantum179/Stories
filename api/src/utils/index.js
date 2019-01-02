import bcrypt from 'bcrypt'
import { saltRounds } from '../constants'

export const checkPass = (password, hash) => {
  return bcrypt.compare(password, hash)
}

export const hashPass = (password) => {
  bcrypt.hash(password, saltRounds, function(err, hash) {
    if(!err) {
      return hash 
    } else {
      console.log(err) // todo : handle error
    }
  })
}