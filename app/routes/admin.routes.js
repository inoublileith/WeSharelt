const router = require('express').Router()

const admins = require('../controllers/admin.controller.js')
//const upload = require('../middleware/upload')

// Create a new associations
router.post('/create', admins.create)

// Retrieve all associationss
router.get('/', admins.findAll)

// Retrieve all promoted produit
//router.get('/promoted', produit.findAllPromoted)

// Retrieve a single associations with id
router.get('/:id', admins.findOne)

// Update a associations with id
router.put('/:id', admins.update)

// Delete a associations with id
router.delete('/:id', admins.delete)

// Delete all associationss
router.delete('/', admins.deleteAll)

module.exports = router
