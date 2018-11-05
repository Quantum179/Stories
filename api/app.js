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
import {passport} from './src/passport'
app.use(passport.initialize())

// Database Configuration
import {initDB, closeDB} from './src/db'
initDB()

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
  closeDB()
  server.close()
})

//Test export
export default app



