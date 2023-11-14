// models/DB -> controllers -> routers -> app -> localhost:3000/insects
// localhost:3000/insects -> app -> routers -> controllers -> models/DB
const Insect = require('../models/Insect')
const index = (req, res) => {
  const insects = Insect.getAll()
  res.status(200).send({ data: insects })
}
const show = (req, res) => {
  try {
    const insectId = parseInt(req.params.id)
    const insect = Insect.findById(insectId)
    res.status(200).send({ data: insect })
  } catch (err) {
    res.status(404).send({ error: err.message })
  }
}
const create = (req, res) => {
  try {
    const data = req.body
    console.log(" server/controllers/insects.js/ - line25", data)
    const newInsect = Insect.create(data)
    res.status(201).send({ data: newInsect })
  } catch (err) {
    res.status(400).send({ error: err.message })
  }
}
// models/DB -> controllers -> routers -> app -> localhost:3000/insects
const update = (req, res) => {
  try {
    const { id } = req.params
    const insectToUpdate = Insect.findById(parseInt(id))
    const updatedInsect = insectToUpdate.update(req.body)
    res.status(200).send({ data: updatedInsect })
  } catch (err) {
    res.status(400).send({ error: err.message })
  }
}

const destroy = (req, res) => {
  try {
    const { id } = req.params
    const insectToDelete = Insect.findById(parseInt(id))

    insectToDelete.destroy()
    res.status(204).end()
  } catch (error) {
    res.status(404).send({ error: error.message })
  }
}
module.exports = {
  index, show, create, update,destroy
}
