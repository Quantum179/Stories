import {OK, CREATED, BAD_REQUEST, NOT_FOUND} from 'http-status-codes'
import models from '../../db/models'

export const getUsers = (req, res, next) => { //TODO: vérifier que la syntaxe est safe
    let {query, fields, ...out} = req.data
    models.User.getMany(query, fields)
        .then(users => {
            if (!users || users.length == 0) {
                next({code: NOT_FOUND})  
            } else {
                res.status(OK)
                res.locals.users = users
                next()
            }
        })
        .catch(err => {
            //TODO: differenciate server error (mongo, etc) and bad requests
            next({err: err, code: BAD_REQUEST})  
        }) 
}

export const getUser = (req, res, next) => {
    let {id, fields, ...out} = req.data
    models.User.getById(id, fields)
        .then(user => {
            if (!user) {
            next({code: NOT_FOUND})
            } else {
            res.status(OK)
            res.locals.user = user
            next()
            }
        })
        .catch(err => {
            next({err: err, code: BAD_REQUEST}) 
        })   
}

export const getProfile = (req, res, next) => {
    res.status(OK)
    res.locals.message = 'get profile'
    next()
}

export const postUser = (req, res, next) => {
    let {user} = req.data
    models.User.create(user)
        .then(savedUser => {
            res.status(CREATED)
            res.locals.user = savedUser
            next()
        })
        .catch(err => {
            next({err: err, code: BAD_REQUEST})
        })
}

export const patchUser = (req, res, next) => {
    let {id, user, fields, ...out} = req.data
    models.User.update(id, user, fields)
        .then(updatedUser => {
            if(!updatedUser) {
                // wrong status code ?
            next({code: NOT_FOUND})
            } else {
            res.status(OK)
            res.locals.user = updatedUser
            next()
            }
        })
        .catch(err => {
            next({err: err, code: BAD_REQUEST})
        })
}

export const deleteUser = (req, res, next) => {
    let {id} = req.data
    models.User.delete(id)
        .then(deletedUser => {
            res.status(OK)
            res.locals.message = `User ${deletedUser.name} is deleted`
            next()
        })
        .catch(err => {
            //TODO: throws error when id is not in database ?
            next({err: err, code: BAD_REQUEST})
        })
}
