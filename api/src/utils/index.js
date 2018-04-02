import validator from 'validator'

export default {

  validateRequest: function(req) {
    // TODO Quantum : validate request with routing params
    // TODO Quantum : R&D in mongoose validations and how to use it with validator module
    return Object.assign({}, req)
  },
  parseError: function(err, msg) {
    return Object.assign({}, {err:err, message:msg})
  },
  parsePayload: function(key, msg, data) {
    return Object.assign({}, {message:msg, [key]: data})
  }
}
