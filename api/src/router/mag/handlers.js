import {OK, CREATED, BAD_REQUEST, NOT_FOUND} from 'http-status-codes'
import models from '../../db/models'

export const getMag = (req, res, next) => {
    //TODO: get latest MagNumber, mag news, top trendings mag numbers and authors

    //carousel informations : news, must read
    //magNumbers list
    //side nav with top trendings and others
    next()
}

export const getMagNumber = (req, res, next) => {
    let {id, fields, ...out} = req.data
    models.MagNumber.getById(id, fields)
        .then(magNumber => {
            if(!magNumber) {
                next({code: NOT_FOUND})
            } else {
              res.status(200)
              res.locals.magNumber = magNumber
              next()
            }
        })
        .catch(err => {
          next({err: err, code: NOT_FOUND})
        })
}

export const getMagNumberPreview = (req, res, next) => {
    let {id} = req.data
    models.MagNumber.getById(id)
        .then()
        .catch()
}

export const postMagNumber = (req, res, next) => {
    let {magNumber} = req.data
    models.MagNumber.create(magNumber)
      .then(savedMagNumber => {
        res.status(CREATED)
        res.locals.magNumber = savedMagNumber
        next()
      })
      .catch(err => {
        next({err: err, code: BAD_REQUEST})
      })
}

export const patchMagNumber = (req, res, next) => {
    let {id, magNumber} = req.data
    models.MagNumber.update(id, magNumber)
      .then(updatedMagNumber => {

      })
      .catch(err => {
        next({err: err, code: BAD_REQUEST})
      })
}

export const deleteMagNumber = (req, res, next) => {
    
}


export default routes