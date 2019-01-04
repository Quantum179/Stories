import bcrypt from 'bcryptjs'
import {OK, CREATED, BAD_REQUEST, NOT_FOUND} from 'http-status-codes'
import UserModel from '../../db/models/userModel'
import { checkPass } from '../../utils'
import { createToken } from '../../passport'

export const postLogin = (req, res, next) => {
  //TODO : Redirection when already logged (checks token in list)
  let { email, password } = req.body.payload
  UserModel._getOne({email: email})
    .then(user => {
      if (!user) {
        next({code: NOT_FOUND})
      } else {
        checkPass(password, user.password)
          .then(result => {
            if(!result) {
              next({code: NOT_FOUND})
            } else {
              //check connexion status 
                res.status(OK)
                res.locals.token = createToken(user)
                res.locals.user = user.username
                next()
            }                
          })
      }
    })
    .catch(err => {
        next({err: err, code: BAD_REQUEST})
    })   
}

export const postRegister = (req, res, next) => {
    let { user, wantsNews } = req.body.payload
    UserModel._create(user)
      .then(savedUser => {
        if(wantsNews) {
          models.News.addSubscriber(savedUser)
            .then(newsletter => {
                //TODO : send initial newsletter email and register to email scheduler
            })
            .catch(function(err) {
              next({err: err, code: NOT_FOUND})
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

export const postSubscribe = (req, res, next) => {

}
