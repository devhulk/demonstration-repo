// we need a button to click
// we need a function to go and hit me jarvis-api - using XMLHttpRequest
//<button onclick="myFunction()">Click me</button>
// HTTP Verbs GET = Read Data, POST = Give You Some Data (Write Data), PUT = Update Data, DELETE = Deletes Data
var root = 'http://localhost:3000/#'
var Home = require('./web-pages/home-page')
var AvengerDetailPage = require('./web-pages/detail-page')
var router = new Navigo(root,true,'#');

router
  .on(function() {
    document.getElementById('content').innerHTML = ''
    Home()
  })
  .on({
    'avengers': function() {
      document.getElementById('content').innerHTML = ''
      AvengerDetailPage(router)
    },
    'hulk/detail': function() {
      let content = document.getElementById('content')
      content.innerHTML = 'hello from hulk detail page'
    },
    'thor/detail': function() {
      let content = document.getElementById('content')
      content.innerHTML = 'hello from thor detail page'
    },
    'spiderman/detail': function() {
      let content = document.getElementById('content')
      content.innerHTML = 'hello from spidey detail page'
    },
    'captains/detail': function() {
      let content = document.getElementById('content')
      content.innerHTML = 'hello from caps detail page'
    },
    'vision/detail': function() {
      let content = document.getElementById('content')
      content.innerHTML = 'hello from visions detail page'
    }



  })
  .resolve()