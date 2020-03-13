const express = require('express')
const json = require('body-parser').json()

const petService = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(petService.getAllPetsAvailable())
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const { type } = req.body
  res.status(200).json(petService.dequeue(type))
})

module.exports = router
