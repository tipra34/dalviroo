const updateDish = require('./update-dish')
const Order = require('../models/order-model')

/*
*@param order: completed order object with id,  dishId and quantity
*@return a Promise
*/

function completeOrder(order){
  return updateDish(order.dishId, order.quantity).then(()=>{
    return Order.findOneAndRemove({_id: order._id}).exec()
  })
}

module.exports = completeOrder
