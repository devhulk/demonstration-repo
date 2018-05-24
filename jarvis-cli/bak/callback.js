// Synchronous and Asyncronous
let sayHi = function() {
  console.log('hi')
}
let sayBye = function(callback) {
  setTimeout(function() {
    console.log('bye')
    callback()
  },2000)
}

sayHi()
sayBye(function() {
  console.log('...')
  
})

// Callback Functions - Higher Order Functions - Function that is passed to another function as a parameter, and then executed within that function.  Are functions that are called after the execution of a specific process.

