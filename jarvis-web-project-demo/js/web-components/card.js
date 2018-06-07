var createCard = function(arr,router) {
  for (var x=0; x<arr.length; x++){
              var content = document.getElementById('content')
              var card = document.createElement('div')
              card.style.width = '25%'
              card.className = 'w3-card-4'
              var img = document.createElement('img')
              var cbutton = document.createElement('button')
              cbutton.innerHTML = 'Get Details'
              cbutton.className = 'w3-button w3-black'
              if(arr[x].name == 'Hulk') {
                img.src = '/assets/littlehulk.png'
                cbutton.onclick = function() {
                  router.navigate('hulk/detail')
                }

              }
              else if(arr[x].name == 'Captain America') {
                img.src = '/assets/capminion.png'
                cbutton.onclick = function() {
                  router.navigate('captains/detail')
                }
              }
              else if(arr[x].name == 'Spider-Man') {
                img.src = '/assets/buffspider.jpg'
                cbutton.onclick = function() {
                  router.navigate('spiderman/detail')
                }
              }
              else if(arr[x].name == 'Vision') {
                img.src = '/assets/vision.jpg'
                cbutton.onclick = function() {
                  router.navigate('vision/detail')
                }
              }
              else if(arr[x].name == 'Thor') {
                img.src = '/assets/thorpic.jpg'
                cbutton.onclick = function() {
                  router.navigate('thor/detail')
                }
              }
              card.append(img)
              var cardContainer = document.createElement('div')
              cardContainer.className = 'w3-container w3-center'
              card.append(cardContainer)
              var note = document.createElement('p')
              note.innerHTML = arr[x].description
              cardContainer.append(note)
              card.append(cbutton)
            
              content.append(card)

  }

}

module.exports = createCard