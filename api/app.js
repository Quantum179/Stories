// Main variables
import express from 'express'
const app = express()
import http from 'http';
const server = http.Server(app)
import middlewares from './src/middlewares'

//Settings Middleware
import cors from 'cors'
import bodyParser from 'body-parser'
app.use(cors())
app.use(bodyParser.json())

// Security Middlewares
import helmet from 'helmet'
app.use(helmet())
app.use(middlewares.sanitizer)

// Auth Middleware
import passport from './src/passport'
app.use(passport.initialize())

// Database Configuration
import mongoose from 'mongoose';
import queryPlugin from './src/db/schemas/plugins/queryPlugin'
var mongoDB = 'mongodb://localhost/stories';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
mongoose.plugin(queryPlugin)

var db = mongoose.connection;
db.once('open', function() {
  console.log('open db')
})
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Web Sockets Configuration
import SocketIO from 'socket.io'
var io = new SocketIO(server)

// Router Middleware
import router from './src/router'
app.use(middlewares.requestFormatter)
app.use('/api/v1', router) //TODO: use function object instead of class
app.use(middlewares.responseFormatter)
app.use(middlewares.errorHandler)

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
