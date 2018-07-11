import models from '../../db/models'
import utils from '../../utils'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {BAD_REQUEST, SERVER_ERROR, NOT_VALID, SECRET} from '../../constants'
let LOGIN = 'login',
    REGISTER = 'register',
    SUBSCRIBE = 'subscribe'


//Helpers

function formatResponse(payload, handler) {
    let data = {}

    try {
        switch(handler) {
            case LOGIN:
                data.message = 'User is now connected'
                data.token = utils.createToken(payload)
                data.user = utils.formatObject(payload)
                //TODO : check if no others properties are needed by clients
                break
            case REGISTER:
                data.message = "Registration succeeds"
                data.token = utils.createToken(payload)
                let user = utils.formatObject(payload)
                user.password = undefined
                data.user = user
                //TODO : check is registration don't need more logic
                break
        }
    }
    catch(err) {
        data.err = err
    }

    return data
}

//Handlers methods
function authMiddleware(req, res, next) {
    next()
}
function login(req, res) {
    let {formatErr, email, password, fields, ...out} = req.data

    if(formatErr) {
        return res.status(400).json(utils.parseError(err, BAD_REQUEST))        
    } else {
    //TODO : Redirection when already logged (checks token in list)
    models.User.getOne(email, fields)
      .then(function(user) {
        if (!user) {
          return res.status(404).json(utils.parseError(true, NOT_FOUND))
        } else {
          bcrypt.compare(password, user.password, (passErr, result) => {
            if(passErr || !result) {
              return res.status(404).json(utils.parseError(true, NOT_FOUND))
            } else {
              return res.status(200).json(formatResponse(user, LOGIN)) //TODO : try to refactor this
            }
          })
        }
      })
      .catch(function(err){
        return res.status(400).json(utils.parseError(err, BAD_REQUEST))
      })        
    }
}
function register(req, res) {
    let {user, fields, wantsNews, ...out} = req.data
  
    if(formatErr) {
      return res.status(400).json(parseError(formatErr, BAD_REQUEST))
    } else {
      models.User.create(user)
        .then(savedUser => {
            if(wantsNews) {
                models.News.addSubscriber(savedUser)
                    .then(function() {
                        //TODO : send newsletter email
                    })
                    .catch(function(err) {
                        savedUser["errNews"] = err
                    })
            }
            return res.status(201).json(formatResponse(savedUser, REGISTER))
        })
        .catch(err => {
          if(err.message === NOT_VALID) { //TODO: match mongoose error return to constant value
            return res.status(400).json(parseError(err, BAD_REQUEST))
          } else {
            return res.status(500).json(parseError(err, SERVER_ERROR))        
          }
        })
    }
}
function subscribe(req, res) {
    //TODO: handle payment
    res.send('ok')
}



export {
    authMiddleware,
    login,
    register,
    subscribe
}






