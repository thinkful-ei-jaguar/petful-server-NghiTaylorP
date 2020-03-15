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
    let cat=[];
    let dog=[];

    if(pets.cats.show() !== null) {
      cat.push(pets.cats.all())
    }
    if(pets.dogs.show() !== null) {
      dog.push(pets.dogs.all())
    }
    return { cat, dog };
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
