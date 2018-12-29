// Main variables
import express from 'express'
const app = express()
import http from 'http';
const server = http.Server(app)
import middlewares from './src/middlewares'
import { getStatusText } from 'http-status-codes'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import passport from './src/passport'
import { initDB, closeDB } from './src/db'
import SocketIO from 'socket.io'
import router from './src/router'


//Settings
app.use(cors())
app.use(bodyParser.json())

// Security
app.use(helmet())
app.use(middlewares.sanitizer)

// Auth
app.use(passport.initialize())

// Database Configuration
initDB()

// Router and formatters
app.use(middlewares.requestFormatter)
app.use('/api/v1', router)
app.use(middlewares.responseFormatter)

// Error handler
app.use(function (err, req, res, next) {
  res.status(err.code)
  return res.json(err.hasOwnProperty('err') ? err.err : getStatusText(err.code))
})

// Environment Configuration
const env = process.env
const IPADDR = env.IP
const PORT = env.PORT || 5000

// Run App
server.listen(5000, () =>
  console.log('Server is currently running at port 5000...')
)

// Web Sockets Configuration
var io = new SocketIO(server)

server.on('close', function() {
  console.log(' Stopping ...')
})

process.on('SIGINT', function() {
  closeDB()
  server.close()
})

//Test export
export default app



