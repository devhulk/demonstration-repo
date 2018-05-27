var api = require('marvel-api')
var Profile = require('./avengerProfile')


class Avengers {
    constructor(config) {
      this.marvel = api.createClient({
        publicKey : config.publicKey,
        privateKey : config.privateKey
      });

    }

    assemble() {
      Promise.all([ this.marvel.characters.findByName('Vision'),
                    this.marvel.characters.findByName('Hulk'),
                    this.marvel.characters.findByName('Captain America'),
                    this.marvel.characters.findByName('spider-man'),
                    this.marvel.characters.findByName('Thor')])
        .then((responses) => {
        let heroProfiles = []
        responses.forEach((character) => {
          let profile = new Profile({name:character.data[0].name,description: character.data[0].description})
          heroProfiles.push(profile.createProfile())
        })
        console.log(heroProfiles)
      })
    }
  }

module.exports = Avengers
