import data from './init-data'
import models from './models'
import Mongoose from 'mongoose'
import queryPlugin from './schemas/plugins/queryPlugin'
var mongoDB = 'mongodb://localhost/stories'
var db

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

export const mongoose = Mongoose