const api = require('marvel-api')
const colors = require('colors')


class Avengers {
  constructor() {
    this.marvel = api.createClient({
      publicKey: '3ffd0da969c4817bd34a1fb7219d0707',
      privateKey: '89bafbb9d7e4b778f536edd16e8a96ff74bb9508'
    })
     
  }

getVision() {
    this.marvel.characters.findByName('vision')
    .then(console.log)
    .fail(console.error)
    .done()
  }

getAvengers() {
    this.marvel.characters.findByName('thor')
    .then((res) => {
      let info = res.data[0].name + ' : ' + res.data[0].description
      console.log(info.yellow)}
    )
    .fail(console.error)
    .done()
    
    this.marvel.characters.findByName('spider-man')
    .then((res) => {
      let info = res.data[0].name + ' : ' + res.data[0].description
      console.log(info.red)}
    )
    .fail(console.error)
    .done()
  }

}

let av = new Avengers()
av.getAvengers()

module.exports = Avengers
