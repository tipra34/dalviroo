const Dish = require('../models/dish-model.js')

/*
*@param query condition to get orders
*
*
*/

module.exports = function getDishes(query){
  return Dish.find(query).exec()
}
