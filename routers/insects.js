// models/DB -> controllers -> routers -> app -> localhost:3000/insects
// localhost:3000/insects -> app -> routers -> controllers -> models/DB
const express = require('express')
const router = express.Router()
const insectsController = require('../controllers/insects')
router.get('/', insectsController.index)
router.get('/:id', insectsController.show)
router.post('/', insectsController.create)
router.patch('/:id', insectsController.update)
router.delete('/:id', insectsController.destroy)
module.exports = router












