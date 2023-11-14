
const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const insectRoutes = require('./routers/insects')

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.use('/insects', insectRoutes)

app.get('/', (req, res) => {
  res.send({
    message: "welcome",
    description: "INSECTS API",
    endpoints: [
      "GET    /"
    ]
  })
})

module.exports = app
