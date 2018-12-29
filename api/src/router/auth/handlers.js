import bcrypt from 'bcryptjs'
import {OK, CREATED, BAD_REQUEST, NOT_FOUND} from 'http-status-codes'
import UserModel from '../../db/models/userModel'
import { checkPass } from '../../utils'
import { createToken } from '../../passport'

export const postLogin = (req, res, next) => {
  let { email, password } = req.data
  //TODO : Redirection when already logged (checks token in list)
  UserModel._getOne(email)
    .then(user => {
      if (!user) {
        next({code: NOT_FOUND})
      } else {
        checkPass(password, user.password)
          .then((passErr, result) => {
            if(passErr || !result) {
              next({code: NOT_FOUND})
            } else {
              //check connexion status 
                res.status(OK)
                res.locals.token = createToken(user)
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
    let { user, wantsNews } = req.data
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
