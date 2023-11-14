// models/DB -> controllers -> routers -> app -> localhost:3000/insects
// localhost:3000/insects -> app -> routers -> controllers -> models/DB
const insectsData = require('../data')
class Insect {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.species = data.species
    this.habitat = data.habitat
  }
  static getAll() {
    const insects = insectsData.map(v => new Insect(v))
    return insects
  }
  static findById(insectId) {
    try {
      const insectData = insectsData.find(v => v.id === insectId)
      const insect = new Insect(insectData)
      return insect
    } catch (error) {
      throw new Error('This insect does not exist!!!!!!')
    }
  }
  static create(data) {
    if (!data.name) throw new Error('name is missing')
    try {
      let nextId
      insectsData.length
        ? nextId = insectsData.reduce((v1, v2) => v1.id > v2.id ? v1 : v2).id + 1
        : nextId = 1
      const newInsect = new Insect({ id: nextId, name: data.name, species: data.species, habitat: data.habitat })
      insectsData.push(newInsect)
      return newInsect
    } catch (err) {
      throw new Error(err)
    }
  }

  update(data) {
    try {
      const insectData = insectsData.find(insect => insect.id === this.id)
      if (!insectData) {
        throw new Error('insect not found')
      }
      if (!data.name) {
        throw new Error('name missing')
      }
      insectData.name = data.name
      return new Insect(insectData)
    } catch (error) {
      throw new Error(err.message)
    }
  } 

  destroy() {
    const insectData = insectsData.find(insect => insect.id === this.id)

    if (insectData) {
      const insectsIndex = insectsData.indexOf(insectData)
      insectsData.splice(insectsIndex, 1)
    } else {
      throw new Error('insect not found')
    }
  }
  
  
}
module.exports = Insect
