const Dish = require('../models/dish-model.js')

/*
*@param name: name of dish
*@return a Promise
*/

function newDish(name){
  return new Dish({
    name
  }).save()
}

module.exports = newDish
