import {OK, CREATED, BAD_REQUEST, NOT_FOUND} from 'http-status-codes'
import { Chronicle } from '../../db/models'


export const getHome = (req, res, next) => {

    //TODO: get news (Elem new stories, very liked stories), latest stories, most liked
}

export const getChronicles = (req, res, next) => {
  let { params, options } = req.data

  Chronicle._getMany(params, options)
    .then(chronicles => {
      if (!chronicles || chronicles.length === 0) {
        next({code: NOT_FOUND})
      } else {
        res.status(OK)
        res.locals.chronicles = chronicles
        next()
      }
    })
    .catch(err => {
      next({err: err, code: BAD_REQUEST})
    })
}

export const getChronicle = (req, res, next) => {
  let id = req.params.id
  let { options } = req.data
  
  Chronicle._getByID(id, options)
    .then(chronicle => {
      if(!chronicle)  {
        next({code: NOT_FOUND})
      } else {
        res.status(OK)
        res.locals.chronicle = chronicle
        next()
      }
    })
    .catch(err => {
        next({err: err, code: BAD_REQUEST})
    })  
}

export const postChronicle = (req, res, next) => {
  let { chronicle } = req.data
  
  Chronicle._create(chronicle)
    .then(savedChronicle => {
        res.status(CREATED)
        res.locals.chronicle = savedChronicle
        next()
    })
    .catch(err => {
        next({err: err, code: BAD_REQUEST})
    })
}

export const patchChronicle = (req, res, next) => {

}

export const deleteChronicle = (req, res, next) => {

}