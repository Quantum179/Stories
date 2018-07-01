import models from '../../db/models'
import utils from '../../utils'
import { BAD_REQUEST, SERVER_ERROR, NOT_VALID, NOT_FOUND } from '../../constants'
let get_users = 'get-users',
    get_user = 'get-user',
    post_user = 'post-user'

//Helpers
function formatRequest(req, handler) {
    let data = {}
  
    try {
      switch(handler) {
        case get_users:
          data.query = Object.assign({}, req.query.query)
          break
        case get_user:
          data.id = req.params.idUser.toString()
          break
      }
      data.fields = req.query.fields ? '' + req.query.fields : null
    } 
    catch(err) {
      data.formatErr = err
    }
  
    return data
  }
  
function formatResponse(payload, handler) {
    let data = {}

    try {
        switch(handler) {
            case get_users:
                data.message = `${payload.length} user(s) found` //TODO: create global function to format dynamic messages for handles
                data.users = payload.map(u => {
                    let user = utils.formatObject(u)
                    user.password = undefined
                    return user
                })
                break
            case get_user:
                data.message = "User " + payload.username + " found" //TODO : use fullName virtual property for a better message
                let user = utils.formatObject(payload)
                user.password = undefined
                data.user = user
                break
            case post_user:
                console.log('post-user')
                break
        }  
    }
    catch(err) {
        data.err = err
    }

    return data
}

//Handlers methods
function userMiddleware(req, res, next) {
    //TODO: use javascript composition to have a general middleware for derived middlewares routers.
    next()

    
}
function getUsers(req, res) {
    let {formatErr, query, fields, ...out} = formatRequest(req, get_users) 
    
    if(formatErr) {
        return res.status(400).json(parseError(formatErr, BAD_REQUEST))
    } else {
        models.User.getMany(query, fields)
            .then(function(users) {
            if (!users || users.length == 0) {
                return res.status(404).json(utils.parseError(true, "No user found"))
            } else {
                return res.status(200).json(formatResponse(users, get_users)) //TODO : try to refactor this
            }
            })
            .catch(function(err) {
            //TODO: differenciate server error (mongo, etc) and bad requests
            return res.status(400).json(utils.parseError(err, BAD_REQUEST))
            })  
    }
}
function getUser(req, res) {
    let {formatErr, id, fields, ...out} = formatRequest(req, get_user) 
  
    if(formatErr) {
        return res.status(400).json(utils.parseError(formatErr, BAD_REQUEST))        
    } else {
        models.User.getById(id, fields)
            .then(function(user) {
            if (!user) {
                return res.status(404).json(utils.parseError(true, NOT_FOUND))
            } else {
                return res.status(200).json(formatResponse(user, get_user))
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
    let {user, fields, ...out} = formatRequest(req, post_user)
  
    if(formatErr) {
      return res.status(400).json(utils.parseError(formatErr, BAD_REQUEST))
    } else {
      models.User.create(user)
        .then(function(savedUser) {
            return res.status(201).json(formatResponse(savedUser, post_user))
        })
        .catch(function(err) {
            if(err === NOT_VALID) {
                return res.status(400).json(utils.parseError(err, BAD_REQUEST))
            } else {
                return res.status(500).json(utils.parseError(err, SERVER_ERROR))        
            }
        })
    }
}
function patchUser(req, res) {
}
function deleteUser(req, res) {
    
}

//Export handlers
export  {
    userMiddleware,
    getUsers,
    getUser,
    getProfile,
    postUser,
    patchUser,
    deleteUser
}