import mongoose from 'mongoose'
import { loadModels } from './models'
import queryPlugin from './models/schemas/plugins/queryPlugin'
import { defaultMongooseFields } from '../constants'
import { init } from './migrations'

const mongoDB = 'mongodb://localhost/stories'
let db

function removeFields(object, fields) {
  fields.forEach(field => {
    if(object.hasOwnProperty(field)) {
      object[field] = undefined
    }
  })
  return object
}

function toPlainItem(item, fields) {
  let plainItem = item.toObject()
  removeFields(plainItem, defaultMongooseFields)
  removeFields(plainItem, fields)

  return plainItem
}

// === EXPORTS ===

export const initDatabase = () => {
  mongoose.connect(mongoDB)
  mongoose.Promise = global.Promise
  db = mongoose.connection
  mongoose.plugin(queryPlugin)
  loadModels()

  db.once('open', function() {
    console.log('open db')    
    init()
  })
  db.on('error', console.error.bind(console, 'MongoDB connection error:'))
  // Todo Quantum : close database on disconnect
}

export const closeDatabase = () => {
  db.close()
}

export const toPlainObject = (item, fields = []) => {
  if(Array.isArray(item)) {
    return item.map(i => {
      return toPlainItem(i, fields)
    })
  } else {
    return toPlainItem(item, fields)
  }
}

export const isMongoData = (item) => {
  if(!item) {
    return false
  } else {
    return Array.isArray(item) ? 
      item[0].constructor.name === 'model' : 
      item.constructor.name === 'model'
  }
}
