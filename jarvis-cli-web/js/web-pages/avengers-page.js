var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avengers-component')
var AvengersPage = function() {
  Menu()
  getAvengers({all:true})
}

module.exports = AvengersPage
