var createCard = require('./card')

var getAvengers = function(router) {
  var req = new XMLHttpRequest()
  req.onreadystatechange = function() {
    if(this.readyState == 4) {
          createCard(JSON.parse(this.responseText),router)
        }
    }
  req.open('Get','http://localhost:4000')
  req.send()
}
module.exports = getAvengers