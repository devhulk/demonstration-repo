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
          let profile = new Profile({name:character.data[0].name,description: character.data[0].description})
          avengers.push(profile.createProfile())
        })
        console.log('Avengers Assemble!!!')
        console.log(avengers)
        cb(JSON.stringify(avengers))
      })
    }
  }

module.exports = Avengers
