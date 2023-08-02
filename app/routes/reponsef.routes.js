const router = require('express').Router()

const reponsefs = require('../controllers/reponsef.controller.js')
//const upload = require('../middleware/upload')

// Create a new associations
router.post('/create', reponsefs.create)

// Retrieve all associationss
router.get('/', reponsefs.findAll)

// Retrieve all promoted produit
//router.get('/promoted', produit.findAllPromoted)

// Retrieve a single associations with id
router.get('/:id', reponsefs.findOne)

// Update a associations with id
router.put('/:id', reponsefs.update)

// Delete a associations with id
router.delete('/:id', reponsefs.delete)

// Delete all associationss
router.delete('/', reponsefs.deleteAll)

module.exports = router
