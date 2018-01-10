const getOrders = require('../services/get-orders')

/*
*function to send orders to socket
*
*/
module.exports = (socket)=>{
  getOrders({}).then((orders)=>{
    socket.emit('orders', orders)
  })
}
