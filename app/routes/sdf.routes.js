const router = require('express').Router()

const sdfs = require('../controllers/sdf.controller.js')
//const upload = require('../middleware/upload')

// Create a new associations
router.post('/create', sdfs.create)

// Retrieve all associationss
router.get('/', sdfs.findAll)

// Retrieve all promoted produit
//router.get('/promoted', produit.findAllPromoted)

// Retrieve a single associations with id
router.get('/:id', sdfs.findOne)

// Update a associations with id
router.put('/:id', sdfs.update)

// Delete a associations with id
router.delete('/:id', sdfs.delete)

// Delete all associationss
router.delete('/', sdfs.deleteAll)

module.exports = router
