import sanitizer from 'sanitizer'
import validator from 'validator'
import utils from 'utils'
import url from 'url'

let GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    DELETE = 'DELETE'

//Methods


function formatUserRequest(req, data, param) {
    switch(req.method) {
        case GET: 
            if(param && validator.isMongoId(param)) {
                data.id = req.params.idUser.toString()
            } else {
                data.query = Object.assign({}, req.query.query)
            }
            break
        case POST:

            break
        case PATCH:

            break
    }
    data.fields = req.query.fields
}
function formatStoryRequest(req, data, param) {
    switch(req.method) {
        case GET:
        data.query = Object.assign({}, req.query.query)
        data.fields = req.query.fields
        break
      case POST:
        data.id = req.params.idStory
        data.fields = req.query.fields
        break
    }
}


// ========== Export variables ==========

export default {
    sanitizer: function(req, res, next) {
        req = utils.escapeRequest(req)
        next()
    },
    requestFormatter: function(req, res, next) {
        let endpoint = req.baseUrl.split("/")[1]
        let param = req.baseUrl.split("/")[2]
        let data = {}
    
        try {
            switch(req.method) {
                case GET: 
                    if(param && validator.isMongoId(param)) {
                        data.id = param
                    } else {
                        data.query = Object.assign({}, req.query.query)
                    }
                    data.fields = req.query.fields
                    break
                case POST:
                    if(endpoint == AUTH) {
                        switch(param) {
                            case LOGIN:
                              data.email = req.body.email
                              data.password = req.body.password
                              break
                            case REGISTER:
                              data.user = req.body
                              data.wantsNews = req.query.wantsNews
                              break
                            case SUBSCRIBE:
                              console.log('test')
                              break
                        }
                    } else {
                        let key = Object.keys(req.body.payload)[0]
                        data[key] = req.body.payload[key]                
                    }
                    break
                case PATCH:
                    data.id = param
                    let key = Object.keys(req.body.payload)[0]
                    data[key] = req.body.payload[key]
                    break
                case DELETE:
                    data.id = param
                    break
            }
        } catch(err) {
            data.formatErr = err
        }
    
        req.data = data
        next()
    },
    responseFormatter: function(err, req, res, next) {
        if(err) {  
            return res.json(utils.parseError(res.payload))
        } else {
            let endpoint = req.baseUrl.split("/")[1]
            let param = req.baseUrl.split("/")[2]
            let data = {}

            switch(endpoint) {
                case USERS:
                    switch(req.method) {
                        case GET:
                            data.message = `${payload.length ? payload.length + "User(s)" : payload.username} found`
                            let key = Object.keys(req.body.payload)[0]
                            data[key] = utils.formatPayload(req.body.payload[key])     
                            break  
                        case POST:
                            data.message = `${payload.username} correctly added`
                            break
                        case PATCH:
                            data.message = `User ${payload.username} correctly updated`
                            data.user = formatUser(payload)
                            break
                    }
                    let key = Object.keys(req.body.payload)[0]
                    data[key] = utils.formatPayload(req.body.payload[key])  
                    break
                case STORIES:

                    break
            }        
        }
    }
}