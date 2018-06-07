var Nav = require('../web-components/nav')
var getAvengers = require('../web-components/marvelapi')

var Home = function() {
  document.getElementById('content').innerHTML = ''
  Nav()
}

module.exports = Home