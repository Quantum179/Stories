import sanitizer from 'sanitizer'
import validator from 'validator'
import utils from '../utils'
import { getStatusText } from 'http-status-codes'
import util from 'util'


// ========== Export variables ==========

export default {
    sanitizer: function(req, res, next) {
        req = utils.escapeRequest(req)
        next()
    },
    requestFormatter: function(req, res, next) {
        let data = {}
        data.options = {}
        let keys = Object.keys(req.body) //TODO : use for in

        if(keys.length > 0) {
            keys.forEach(k => {data[k] = req.body[k]})
        }
/*         if(req.params.hasOwnProperty('id')) {
            data.id = req.params.id
        } */
        if(req.query.hasOwnProperty('query')) {
            data.options.query = req.query.query || {}
        }
        if(req.query.hasOwnProperty('fields')) {
            data.options.fields = req.query.fields
        }
        
        req.data = data
        next()
    },
    responseFormatter: function(req, res) {
      //We assume the status is already set in the endpoint handler
      let data = {}
      let payload = res.locals //TODO : make sure res.locals only contains requested informations.

      if(payload == {} || payload == null) {
        return res.end()
      } else {
        for(let key in payload) {
          if(Object.prototype.hasOwnProperty.call(res.locals, key)) { //TODO: make global wrapper
              let item = payload[key]

              if(utils.isMongoData(item)) {
                  data[key] = utils.formatMongooseItem(item)
              } else {
                  data[key] = item
              }
          }
        }
      
        return res.json(data)      
      }
    },
    errorHandler: function(err, req, res) {
      res.status(err.code)
      return res.json(err.hasOwnProperty('err') ? err.err : getStatusText(err.code))
    }
}