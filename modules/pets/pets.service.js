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

let extraCats =[
  {
    age: 12,
    breed: "Ragamuffin",
    description: "Older feline friend that's very mild mannered and loving.",
    gender: "Female",
    imageURL:
      "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Cher",
    story: "Owner passed."
  },

  {
    age: 1,
    breed: "white cat",
    description: "White cat",
    gender: "Male",
    imageURL:
      "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "David Meowie",
    story: "Thrown to the stars"
  },

  {
    age: 4,
    breed: "Maine Coon",
    description: "Striped cat",
    gender: "Female",
    imageURL:
      "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Stephan",
    story: "Thrown on the street"
  },

  {
    age: 2,
    breed: "Mixed-ish",
    description: "Orange 'cat'",
    gender: "Male",
    imageURL:
      "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Simba",
    story: "Chased away from home"
  }
]

let extraDogs = [
  {
    age: 3,
    breed: "Chihuahua",
    description:
      "Barks as big as his name.",
    gender: "Male",
    imageURL:
      "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Hercules",
    story:
      "Thrown on the street."
  },

  {
    age: 2,
    breed: "Hound",
    description: "A smiling golden-brown dog",
    gender: "Male",
    imageURL:
      "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Tod",
    story:
      "Has a fox best friend, fox sold seperatly"
  },

  {
    imageURL:
      "https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Black Lab",
    name: "Jack",
    gender: "Male",
    age: 3,
    breed: "Labrador",
    story:
      "Owner abandoned Jack at the park."
  },

  {
    age: 3,
    breed: "Collie",
    description: "Border collie.",
    gender: "Female",
    imageURL:
      "https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Ikora",
    story: "Ran away from home, found in a parking lot."
  }
]

// --------------------

module.exports = {
  getAllPetsAvailable() {
    // Return the pets next in line to be adopted.
    let cat;
    let dog;

    if(pets.cats.show() !== null) {
      cat = pets.cats.all()
    }
    if(pets.dogs.show() !== null) {
      dog = pets.dogs.all()
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
  },

  addRandom(type) {

    if(type === 'cat') {
      pets.cats.enqueue(extraCats[Math.floor(Math.random()*extraCats.length)])
    } else {
      pets.dogs.enqueue(extraDogs[Math.floor(Math.random()*extraDogs.length)])
    }
  }
}
