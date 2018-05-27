import validator from 'validator'
import sanitizer from 'sanitizer'
import util from 'util'

export default {

  escapeRequest: function(data, method) {
    // TODO Quantum : validate request with routing params
    // TODO Quantum : R&D in mongoose validations and how to use it with validator module
    sanitizer.escape(data)

    return Object.assign({}, data)
  },
  parseError: function(err, msg) {
    return Object.assign({}, {err:err, message:msg})
  },
  parsePayload: function(key, msg, data) {
    //TODO : use key to format message and data (ex : login and sign-up will create token)
    return Object.assign({}, {message:msg, [key]: data})
  }
}
