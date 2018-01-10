const mongoose = require('mongoose')
const Promise = require('bluebird')
const apiRoutes = require('./routes/api-routes')
const keys = require('./config/keys')
const bodyParser = require('body-parser')
const allowCrossDomain = require('./config/allow-cross-domain')
const Dish = require('./models/dish-model')
const ioConfig = require('./socketio/config')
const express = require('express')

let app = express()
const http = require('http').Server(app)
let io = require('socket.io')(http)

/*
* Config
*/
mongoose.Promise = Promise
mongoose.connect(keys.mongodb.dbURI,{useMongoClient: true},()=>{
  console.log("connected to db")
})

ioConfig(io)

//making io object available for routes to emit changes
app.use((req,res, next)=>{
  req.socketio = io
  next()
})

app.use(allowCrossDomain)

app.use(bodyParser.urlencoded({ extended: false }))

/*
* Routes
*/
app.use('/api', apiRoutes)

app.use(express.static('public'))

http.listen(process.env.PORT||3000,()=>{
  console.log('listening on 3000')
})
