var Avengers = require('./avengers')
var express = require('express')
var app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req,res) => {
  var avengers = new Avengers({
    publicKey : '3ffd0da969c4817bd34a1fb7219d0707',
    privateKey : '89bafbb9d7e4b778f536edd16e8a96ff74bb9508'
  })
  avengers.assemble(function(avengers){
    res.send(avengers)
  })
})

app.listen('4000', () => {
  console.log('listening on port 4000')
})


