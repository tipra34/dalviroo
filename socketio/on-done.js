/*
* function to handle done event emitted by socket
*
*/
const completeOrder = require('../services/complete-order')

module.exports = (socket, io)=>{
  socket.on('done', (order)=>{
    completeOrder(order).then(()=>{
      io.emit('done', order._id)
    })
  })
}
