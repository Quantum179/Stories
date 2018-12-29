import sanitizer from 'sanitizer'
import validator from 'validator'
import utils from '../utils'
import util from 'util'
import {isMongoData, toPlainObject} from '../db'


// ========== Export variables ==========

export default {
    sanitizer: function(req, res, next) {
      // TODO Quantum : validate request with routing params
      // TODO Quantum : R&D in mongoose validations and how to use it with validator module
      sanitizer.escape(req)
      next()
    },
    requestFormatter: function(req, res, next) {
        let data = {}
        data.options = {}

        for(let key in req.body) {
          data[key] = req.body[key]      
        }

        if(req.query.hasOwnProperty('query')) {
            data.options.query = req.query.query || {}
        }
        if(req.query.hasOwnProperty('fields')) {
            data.options.fields = req.query.fields
        }
        
        req.data = data
        next()
    },
    responseFormatter: function(req, res, next) {
      //We assume the status is already set in the endpoint handler
      let data = {}
      let payload = res.locals //TODO : make sure res.locals only contains requested informations.

      if(payload == {} || payload == null) {
        return res.end()
      } else {
        for(let key in payload) {
          if(Object.prototype.hasOwnProperty.call(res.locals, key)) { //TODO: make global wrapper
              let item = payload[key]
              if(isMongoData(item)) {
                  data[key] = toPlainObject(item)
              } else {
                  data[key] = item
              }
          }
        }
      
        return res.json(data)      
      }
    }
}