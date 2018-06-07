var root = 'http://localhost:3000/#';
var useHash = true; 
var hash = '#'; 
var router = new Navigo(root, useHash, hash);
var HomePage = require('./web-pages/home-page')
var AvengersPage = require('./web-pages/avengers-page')
var HulkDetailPage = require('./web-pages/hulk-detail-page')

router
  .on(function () {
    document.getElementById('content').innerHTML = ''
    HomePage()
  })
  .on({
    'avengers': function () {
      document.getElementById('content').innerHTML = ''
      AvengersPage()
    },
    'avengers/hulk': function () {
      document.getElementById('content').innerHTML = ''
      HulkDetailPage()
    }

  })
  .resolve();
