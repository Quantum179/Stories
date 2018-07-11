import models from '../../db/models'
import utils from '../../utils'
import { BAD_REQUEST, SERVER_ERROR, NOT_VALID, NOT_FOUND } from '../../constants'
import router from '../story';
let GET_USERS = 'get-users',
    GET_USER = 'get-user',
    POST_USER = 'post-user',
    PATCH_USER = 'patch-user'

//Helpers
function formatResponse(payload, handler) {
    let data = {}

    try {
        switch(handler) {
            case GET_USERS:
                data.message = `${payload.length} user(s) found` //TODO: create global function to format dynamic messages for handles
                data.users = payload.map(u => {
                    return formatUser(u)
                })
                break
            case GET_USER:
                data.message = `User ${payload.username} found` //TODO : use fullName virtual property for a better message
                data.user = formatUser(payload)
                break
            case POST_USER:
                console.log('post-user')
                break
            case PATCH_USER:
                data.message = `User ${payload.username} correctly updated`
                data.user = formatUser(payload)
                break
        }  
    }
    catch(err) {
        data.err = err
    }

    return data
}
function formatPayload(data) {
    let user = utils.formatObject(data)
    user.password = undefined
    user.email = undefined
    return user
}

//Handlers methods
function requestMiddleware(req, res, next) {
    //TODO: use javascript composition to have a general middleware for derived middlewares routers.
    next()

    
}
function responseMiddleware(err, req, res, next) {
    if(err) {
        next(err)
    } else {

        next()
    }
}
function getUsers(req, res) {
    let {formatErr, query, fields, ...out} = req.data
    
    if(formatErr) {
        return res.status(400).json(parseError(formatErr, BAD_REQUEST))
    } else {
        models.User.getMany(query, fields)
            .then(function(users) {
            if (!users || users.length == 0) {
                return res.status(404).json(utils.parseError(true, "No user found"))
            } else {
                return res.status(200).json(formatResponse(users, GET_USERS)) //TODO : try to refactor this
            }
            })
            .catch(function(err) {
            //TODO: differenciate server error (mongo, etc) and bad requests
            return res.status(400).json(utils.parseError(err, BAD_REQUEST))
            })  
    }
}
function getUser(req, res, next) {
    let {formatErr, id, fields, ...out} = formatRequest(req, GET_USER) 
  
    if(formatErr) {
        res.status(400)
        next(formatErr)      
    } else {
        models.User.getById(id, fields)
            .then(function(user) {
            if (!user) {
                next(404,)
                return res.status(404).json(utils.parseError(true, NOT_FOUND))
            } else {
                return res.status(200).json(formatResponse(user, GET_USER))
            }
            })
            .catch(function(err) {
                return res.status(400).json(utils.parseError(err, BAD_REQUEST))
            })        
    }
}
function getProfile(req, res) {

}
function postUser(req, res) {
    let {user, fields, ...out} = formatRequest(req, POST_USER)
  
    if(formatErr) {
      return res.status(400).json(utils.parseError(formatErr, BAD_REQUEST))
    } else {
      models.User.create(user)
        .then(savedUser => {
            return res.status(201).json(formatResponse(savedUser, POST_USER))
        })
        .catch(err => {
            if(err === NOT_VALID) {
                return res.status(400).json(utils.parseError(err, BAD_REQUEST))
            } else {
                return res.status(500).json(utils.parseError(err, SERVER_ERROR))        
            }
        })
    }
}
function patchUser(req, res) {
    let {user, fields, ...out} = formatRequest(req, PATCH_USER)

    if(formatErr) {
        
    } else {
        models.User.updateUser(user, fields)
            .then(updatedUser => {
                return res.status(200).json(formatResponse(updatedUser, PATCH_USER))
            })
            .catch(err => {

            })
    }
}
function deleteUser(req, res) {

}

router.use((err, req, res, next) => {
    if(err) {
        next(err)
    }

    next()
})

//Export handlers
export  {
    userRequest,
    userResponse,
    getUsers,
    getUser,
    getProfile,
    postUser,
    patchUser,
    deleteUser
}