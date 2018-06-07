// Detail view consists of a card and displays extra information about the clicked on character
var getAvengers = require('../web-components/marvelapi')
var Nav = require('../web-components/nav')
var AvengerDetail = function(router) {
  Nav(router)
  getAvengers(router)
  
}

module.exports = AvengerDetail