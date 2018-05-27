// Main variables
import express from 'express'
const app = express()
import http from 'http';
const server = http.Server(app)

// Auth Middleware
//import auth from './src/auth'
import cors from 'cors'
import bodyParser from 'body-parser'
app.use(cors())
app.use(bodyParser.json())
//app.use(auth.initialize())
//app.use(auth.session())

// Security Middleware
import helmet from 'helmet'
app.use(helmet())

// Database Configuration
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/stories';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.once('open', function() {

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
const IPADDR = process.env.IP || "locahost"
const PORT = process.env.PORT || 1337

// Run App
server.listen(5000, () =>
  console.log('Server is currently running at port 5000...')
)

//Test export
export default app



// Todo Quantum : close database on disconnect
