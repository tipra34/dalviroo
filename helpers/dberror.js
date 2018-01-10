/*
*mongoose err parser to send readable error text
*
*/
module.exports = function dberror(err){
  let errorText = ''
  for(errField in err.errors)
    errorText += `${err.errors[errField]}\n`
  return errorText
}
