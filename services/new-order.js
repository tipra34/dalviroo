const mongoose = require('mongoose')
const Order = require('../models/order-model.js')
/*
*@param dishId: id of dish
*@param quantity: quantity
*@return a Promise
*/
function newOrder(dishId, quantity){
  dishId = dishId?mongoose.Types.ObjectId(dishId):null
   return new Order({
    dishId,
    quantity
  }).save()
}

module.exports = newOrder
