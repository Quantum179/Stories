// Main variables
import express from 'express'
const app = express()
import http from 'http';
const server = http.Server(app)

//Settings Middleware
import cors from 'cors'
import bodyParser from 'body-parser'
app.use(cors())
app.use(bodyParser.json())

// Security Middlewares
import helmet from 'helmet'
import {sanitizerMiddleware} from './src/middlewares'
app.use(helmet())
app.use(sanitizerMiddleware)

// Auth Middleware
import passport from './src/passport'
app.use(passport.initialize())

// Database Configuration
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost/stories';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.once('open', function() {
  console.log('open db')
})
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Router Middleware
 import Router from './src/router'
new Router(app) 

// Web Sockets Configuration
import SocketIO from 'socket.io'
var io = new SocketIO(server)

// Environment Configuration
const env = process.env
const IPADDR = env.IP
const PORT = env.PORT || 5000




// Run App
server.listen(5000, () =>
  console.log('Server is currently running at port 5000...')
)

server.on('close', function() {
  console.log(' Stopping ...')
})

process.on('SIGINT', function() {
  console.log('bye')
  db.close()
  server.close()
})

//Test export
export default app


// Todo Quantum : close database on disconnect