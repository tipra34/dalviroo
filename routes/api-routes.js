const newOrder = require('../services/new-order')
const newDish = require('../services/new-dish')
const updateDish = require('../services/update-dish')
const completeOrder = require('../services/complete-order')
const getOrders = require('../services/get-orders')
const getDishes = require('../services/get-dishes')
const getReport = require('../services/get-report')
const dberror = require('../helpers/dberror')

let router = require('express').Router()

router.post('/set-predicted', (req, res)=>{
  let data = req.body
  updateDish(data.dishId, null, data.prediction).then((dish)=>{
    res.send({code: 200, dish})
    req.socketio.emit('update-prediction', dish)
  }).catch((err)=>{
    errText = dberror(err)
    res.status(500).send({code:500, errText})
  })
})

router.post('/new-order', (req, res)=>{
  let data = req.body
  newOrder(data.dishId, data.quantity).then((order)=>{
    res.send({code:200, order})
    req.socketio.emit('new-order', order)
  }).catch((err)=>{
    errText = dberror(err)
    res.status(500).send({code:500, errText})
  })
})

router.post('/new-dish', (req, res)=>{
  let name = req.body.name
  newDish(name).then((dish)=>{
    res.send({code:200, dish})
    req.socketio.emit('new-dish', dish)
  }).catch((err)=>{
    errText = dberror(err)
    res.status(500).send({code: 500, errText})
  })
})

router.post('/complete-order', (req, res)=>{
  let order = req.body
  completeOrder(order).then(()=>{
    res.send({code:200})
  }).catch((err)=>{
    errText = dberror(err)
    res.status(500).send({code: 500, errText})
  })
})


router.get('/report', (req, res)=>{
  getReport().then((report)=>{
    res.send(report)
  }).catch((err)=>{
    errText = dberror(err)
    res.status(500).send({code: 500, errText})
  })
})

router.get('/dishes', (req, res)=>{
  getDishes({}).then((dishes)=>{
    res.send({code: 200, dishes})
  }).catch((err)=>{
    errText = dberror(err)
    res.status(500).send({code: 500, errText})
  })
})
module.exports = router
