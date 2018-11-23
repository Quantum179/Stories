import {OK, CREATED, BAD_REQUEST, NOT_FOUND} from 'http-status-codes'
import MagNumberModel from '../../db/models/magNumberModel'

export const getMag = (req, res, next) => {
    //TODO: get latest MagNumber, mag news, top trendings mag numbers and authors

    //carousel informations : news, must read
    //magNumbers list
    //side nav with top trendings and others
    next()
}

export const getMagNumbers = (req, res, next) => {
  let {params, options, ...out} = req.data
  MagNumberModel._getMany(params, options)
    .then(magNumbers => {
      res.status(200)
      res.locals.magNumbers = magNumbers
      next()
    })
    .catch(err => {
      next({err: err, code:NOT_FOUND})
    })
}

export const getMagNumber = (req, res, next) => {
    let {id, options, ...out} = req.data
    MagNumberModel._getById(id, fields)
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
  let id = req.params.id
  let {options} = req.data
  MagNumberModel._getById(id, options)
      .then()
      .catch()
}

export const postMagNumber = (req, res, next) => {
    let {magNumber} = req.data
    MagNumberModel._create(magNumber)
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
    MagNumberModel._updateOne(id, magNumber)
      .then(updatedMagNumber => {

      })
      .catch(err => {
        next({err: err, code: BAD_REQUEST})
      })
}

export const deleteMagNumber = (req, res, next) => {
    
}