var api = require('marvel-api')
var Profile = require('./avengerProfile')


class Avengers {
    constructor(config) {
      this.marvel = api.createClient({
        publicKey : config.publicKey,
        privateKey : config.privateKey
      });

    }


    assemble(cb) {
      Promise.all([this.marvel.characters.findByName('Thor'),this.marvel.characters.findByName('Hulk'),this.marvel.characters.findByName('Vision'),this.marvel.characters.findByName('spider-man'),this.marvel.characters.findByName('Captain America')]).then(function (responses) {
        let avengers = []
        responses.forEach(function(character)  {
          let profile = new Profile({name:character.data[0],description: character.data[0].description})
          avengers.push(character.data[0])
        })
        console.log('Avengers Assemble!!!')
        console.log(avengers)
        cb(JSON.stringify(avengers))
      })
    }
  }
let av = new Avengers(
{
    publicKey : '3ffd0da969c4817bd34a1fb7219d0707',
    privateKey : '89bafbb9d7e4b778f536edd16e8a96ff74bb9508'
}
)
av.assemble(function(avengers) {
  console.log(avengers)
})

module.exports = Avengers
