const express = require("express");
const json = require("body-parser").json();

const PeopleService = require("./people.service");

const router = express.Router();

router.get("/", (req, res) => {
  // Return all the people currently in the queue.
  res.status(200).json(PeopleService.get());
});

router.post("/", json, (req, res) => {
  // Add a new person to the queue.
  const { name } = req.body;
  if (!name) {
    res.status(400).send("Name Required");
  }
  PeopleService.enqueue(name);
  res.status(204).json();
});

router.delete("/", (req, res) => {
  // Return all the people currently in the queue.
  PeopleService.dequeue();
  res.status(204).end();
});

module.exports = router;
