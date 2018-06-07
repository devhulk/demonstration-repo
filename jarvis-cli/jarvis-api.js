let express = require('express')
let app = express()
let Marvel = require('./avengers')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/', function(request,response) {
  var avengers = new Marvel({
    publicKey : '3ffd0da969c4817bd34a1fb7219d0707',
    privateKey : '89bafbb9d7e4b778f536edd16e8a96ff74bb9508'
  })
  avengers.assemble(function(avengers){
    response.send(JSON.parse(avengers))
  })
})


app.listen('4000', function() {
  console.log('running on port 4000')
})
