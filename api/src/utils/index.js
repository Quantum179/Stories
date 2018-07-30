import util from 'util'
import sanitizer from 'sanitizer'
import jwt from 'jsonwebtoken'
import {secret, defaultMongooseFields} from '../constants'




function removeDefaultFields(object) {
  defaultMongooseFields.forEach(f => {
    if(object.hasOwnProperty(f)) {
      object[f] = undefined
    }
  })
  return object
}

//TODO: change to declared functions and regular export
export default {
  escapeRequest: function(data) {
    // TODO Quantum : validate request with routing params
    // TODO Quantum : R&D in mongoose validations and how to use it with validator module
    sanitizer.escape(data)
    return Object.assign({}, data)
  },
  parseError: function(err, msg) {
    return Object.assign({}, {err:err, message:msg})
  },
  formatMongooseItem: function(item) {
    if(Array.isArray(item)) {
      return item.map(i => {
        let _i = i.toObject()
        return removeDefaultFields(_i)
      })
    } else {
      return removeDefaultFields(item.toObject())
    }
  },
  createToken: function(user) {
    return jwt.sign({email:user.email, idUser:user._id}, SECRET, { expiresIn: '1h' }) //TODO : add env variables (hash and jwt secrets)
  },
  isMongoData: function(item) {
    //TODO: simplify
    return Array.isArray(item) ? 
      item[0].constructor.name === 'model' : 
      item.constructor.name === 'model'
  }
}
