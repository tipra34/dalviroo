const Dish = require('./dish-model')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//check quantity is non-negative or zero
function validQuantity(value, res){
  res(value>0)
}

//valid dish
function validDish(value, res){
  Dish.findById(value, (err, dish)=>{
    if(dish) res(true)
    else res(false)
  })
}

const orderSchema = new Schema({
  dishId: {type: Schema.Types.ObjectId, ref:'dish', validate:{validator: validDish, message: 'invalid dish id'}, required: true},
  quantity: {type: Number, validate:{validator: validQuantity, message: 'quantity cannot be 0'}, required: true}
})

module.exports = mongoose.model('order', orderSchema)
