// Main variables
import express from 'express'
import http from 'http';
const app = express()
const server = http.Server(app)

// Auth Middleware
import auth from './src/auth'
import cors from 'cors'
import bodyParser from 'body-parser'
app.use(cors)
app.use(bodyParser.json())
app.use(auth.initialize())
//app.use(auth.session())

// Security Middleware
import helmet from 'helmet'
app.use(helmet())

// Router Middleware
import Router from './src/router'
new Router(app)

// Database Configuration
import mongoose from 'mongoose'
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/stories')

// Web Sockets Configuration
import SocketIO from 'socket-io'
var io = new SocketIO(server)

// Environment Configuration
const env = process.env
const IPADDR = process.env.IP || "locahost"
const PORT = process.env.PORT || 1337

// Run App
server.listen(3000, () =>
  console.log('Server is currently running at port 3000...')
)

// Todo Quantum : close database on disconnect
