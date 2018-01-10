const Dish = require('../models/dish-model.js')

/*
*@param id: id of the dish to be updated
*@param incCreatedTillNow: value of createdTillNow to be increased
*@param predictedOrders: value of predicted orders to be updated
*@return a promise
*/

function updateDish(id, incCreatedTillNow, predictedOrders){
  return Dish.findOne({_id: id}).then((dish)=>{
    if(incCreatedTillNow)
      dish.createdTillNow += incCreatedTillNow
    if(predictedOrders)
      dish.predicted = predictedOrders
    return dish.save()
  })
}

module.exports = updateDish
