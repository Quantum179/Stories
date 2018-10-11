import bcrypt from 'bcryptjs'
import {OK, CREATED, BAD_REQUEST, NOT_FOUND} from 'http-status-codes'
import models from '../../db/models'

export const postLogin = (req, res, next) => {
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
                    //check connexion status 
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

export const postRegister = (req, res, next) => {
    let {user, wantsNews, ...out} = req.data
    models.User.create(user)
        .then(savedUser => {
            if(wantsNews) {
                models.News.addSubscriber(savedUser)
                    .then(newsletter => {
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

export const postSubscribe = (req, res, next) => {

}
