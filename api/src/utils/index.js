import util from 'util'




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
  formatObject: function(data) {
    let object = data.toObject()
    object.id = undefined
    if(object.hasOwnProperty('__v')) {
      object.__v = undefined
    }
    //TODO: remove mongoose fields if hasOwnProperty
    return object
  },
  createToken: function(user) {
    return jwt.sign({email:user.email, idUser:user._id}, SECRET, { expiresIn: '1h' }) //TODO : add env variables (hash and jwt secrets)
  }
}
