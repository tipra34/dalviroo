/*
*configuration for socketio
*
*/
const sendOrders = require('./send-orders')
const sendDishes = require('./send-dishes')

const onDone = require('./on-done')
module.exports = function(io){

  io.on('connection', (socket)=>{
    //sending initial data
    sendOrders(socket)
    sendDishes(socket)
    //configuring event handlers
    onDone(socket, io)

  });
}
