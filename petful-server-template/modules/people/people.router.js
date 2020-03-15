const express = require('express')
const json = require('body-parser').json()

const PeopleService = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  //console.log({people:PeopleService.get()})
  res.status(200).json(PeopleService.get())
  // console.log(PeopleService.get())
})

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
   const { name } = req. body
   if(!name){
     res.status(400).send('Name Required')
   }
   PeopleService.enqueue(name)
   res.status(204).json()
  //  console.log(PeopleService.get()) --> confirms post by calling get all people in line
})

module.exports = router
