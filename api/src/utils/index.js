import util from 'util'



//TODO: change to declared functions and regular export
export default {
  parseError: function(err, msg) {
    return Object.assign({}, {err:err, message:msg})
  },
  formatObject: function(data, handler) {
    let object = data.toObject()
    object.id = undefined
    if(object.hasOwnProperty('__v')) {
      object.__v = undefined
    }
    //TODO: remove mongoose fields if hasOwnProperty
    return object
  }
}
