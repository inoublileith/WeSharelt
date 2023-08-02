const router = require('express').Router()

const reponsesons = require('../controllers/reponseson.controller.js')
//const upload = require('../middleware/upload')

// Create a new associations
router.post('/create', reponsesons.create)

// Retrieve all associationss
router.get('/', reponsesons.findAll)

// Retrieve all promoted produit
//router.get('/promoted', produit.findAllPromoted)

// Retrieve a single associations with id
router.get('/:id', reponsesons.findOne)

// Update a associations with id
router.put('/:id', reponsesons.update)

// Delete a associations with id
router.delete('/:id', reponsesons.delete)

// Delete all associationss
router.delete('/', reponsesons.deleteAll)

module.exports = router
