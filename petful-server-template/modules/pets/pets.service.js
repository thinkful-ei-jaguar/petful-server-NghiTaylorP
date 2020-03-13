const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  getAllPetsAvailable() {
    // Return the pets next in line to be adopted.
    let result = [];
    if(pets.cats.show() !== null) {
      result.push(pets.cats.dequeue())
    }
    if(pets.dogs.show() !== null) {
      result.push(pets.dogs.dequeue())
    }
    return { result };
  },

  dequeue(type) {
    // Remove a pet from the queue.
   if(type === 'cat'){
    return pets.cats.dequeue()
   } else {
     return pets.dogs.dequeue()
   }
  }
}
