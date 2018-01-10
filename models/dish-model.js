const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dishSchema = new Schema({
  name: {type: String, unique:true, required: true},
  createdTillNow: {type: Number, default: 0},
  predicted: {type: Number, default: 0}
})

module.exports = mongoose.model('dish', dishSchema)
