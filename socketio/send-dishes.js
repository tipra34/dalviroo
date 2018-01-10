/*
*function to send dishes to socket
*
*/
const getDishes = require('../services/get-dishes')
module.exports = (socket)=>{
  getDishes().then((dishes)=>{
    socket.emit('dishes', dishes)
  })
}
