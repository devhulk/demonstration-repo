var Menu = function() {
  var content = document.getElementById('content')
    //Navigation Menu
    let nav = document.createElement('div')
    nav.className = 'w3-bar w3-blue'
    //Home Navigation Item
    let home = document.createElement('a')
    home.className = 'w3-bar-item w3-button'
    home.href = '#'  
    home.innerHTML = 'Home'
    nav.append(home)
    //Avengers Navigation Item
    let av_nav = document.createElement('a')
    av_nav.className = 'w3-bar-item w3-button'
    av_nav.href = '#/avengers' 
    av_nav.innerHTML = 'Avengers'
    nav.append(av_nav)
    content.append(nav)
}
module.exports = Menu
