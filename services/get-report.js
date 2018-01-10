const getDishes = require('../services/get-dishes')
/*
*@return promise that return to report html
*
*
*/
module.exports = function getReport(){
  let report = '<html><head></head><body><table><thead><tr><th>Dish name</th><th>Produced</th><th>Predicted<th></tr></thead><tbody>'
  return getDishes({}).then((dishes)=>{
    dishes.forEach((dish)=>{
      report +=  `<tr><td>${dish.name}</td><td>${dish.createdTillNow}</td><td>${dish.predicted}</td></tr>`
    })
    report += '</tbody></table></body></html>'
    return report
  })
}
