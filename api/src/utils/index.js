import util from 'util'
import sanitizer from 'sanitizer'
import jwt from 'jsonwebtoken'
import {SECRET} from '../constants'






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
  }
}
