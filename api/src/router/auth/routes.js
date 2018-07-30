import {OK, CREATED, BAD_REQUEST, NOT_FOUND} from 'http-status-codes'
import models from '../../db/models'

let routes = []
//Helpers

/* function formatResponse(payload, handler) {
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
} */

function formatLoginResponse(user, locals) {
  locals.token = utils.createToken(user)
  locals.user = user
}


routes.push({
  action: 'post',
  endpoint: '/login',
  needsAuth: false,
  handler: function(req, res, next) {
    let {email, password, fields, ...out} = req.data

    //TODO : Redirection when already logged (checks token in list)
    models.User.getOne(email)
      .then(user => {
        if (!user) {
          next({code: NOT_FOUND})
        } else {
          bcrypt.compare(password, user.password, (passErr, result) => {
            if(passErr || !result) {
              next({code: NOT_FOUND})
            } else {
              res.status(OK)
              formatLoginResponse(user, fields, res.locals)
              next()
            }
          })
        }
      })
      .catch(err => {
        next({err: err, code: BAD_REQUEST})
      })   
  }
})


routes.push({
  action: 'post',
  endpoint: '/register',
  needsAuth: false,
  handler: function(req, res, next) {
    let {user, wantsNews, ...out} = req.data
  
    models.User.create(user)
    .then(savedUser => {
        if(wantsNews) {
            models.News.addSubscriber(savedUser)
                .then(function() {
                    //TODO : send initial newsletter email and register to email scheduler
                })
                .catch(function(err) {
                    savedUser["errNews"] = err
                })
        }
        res.status(CREATED)
        res.locals.user = savedUser
        next()
    })
    .catch(err => {
      //TODO: match mongoose error return to constant value (invalid form or duplicated unique fields)
      next({err: err, code: BAD_REQUEST})
    })
  }
})


routes.push({
  action: 'post',
  endpoint: '/subscribe',
  needsAuth: true,
  handler: function(req, res, next) {

  }
})

export default routes






