import data from './init-data'
import models from './models'
import Mongoose from 'mongoose'
import queryPlugin from './schemas/plugins/queryPlugin'
var mongoDB = 'mongodb://localhost/stories'
import {defaultMongooseFields} from '../constants'

let db

function removeFields(object, fields) {
  fields.forEach(f => {
    if(object.hasOwnProperty(f)) {
      object[f] = undefined
    }
  })
  return object
}

export const initDB = () => {
  Mongoose.connect(mongoDB);
  Mongoose.Promise = global.Promise;

  db = Mongoose.connection;
  db.once('open', function() {
    console.log('open db')
  })
  db.on('error', console.error.bind(console, 'MongoDB connection error:'))
  // Todo Quantum : close database on disconnect
  //TODO : find how to implement global plugins
}

export const closeDB = () => {
  db.close()
}

export const toPlainObject = (item, routeFields = []) => {
  if(Array.isArray(item)) {
    return item.map(i => {
      let _i = i.toObject()
      return removeFields(_i, defaultMongooseFields)
    })
  } else {
    let plainItem = item.toObject()
    removeFields(plainItem, defaultMongooseFields)
    removeFields(plainItem, routeFields)

    return plainItem
  }
}

export const isMongoData = (item) => {
  //TODO: simplify
  return Array.isArray(item) ? 
    item[0].constructor.name === 'model' : 
    item.constructor.name === 'model'
}

export const mongoose = Mongoose