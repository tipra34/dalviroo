const Order = require('../models/order-model.js')

/*
*@param query condition to get orders
*
*
*/

module.exports = function getOrder(query){
  return Order.find(query).exec()
}
