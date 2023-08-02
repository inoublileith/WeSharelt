const router = require('express').Router()

const organismes = require('../controllers/organisme.controller.js')
//const upload = require('../middleware/upload')

// Create a new associations
router.post('/create', organismes.create)

// Retrieve all associationss
router.get('/', organismes.findAll)

// Retrieve all promoted produit
//router.get('/promoted', produit.findAllPromoted)

// Retrieve a single associations with id
router.get('/:id', organismes.findOne)

// Update a associations with id
router.put('/:id', organismes.update)

// Delete a associations with id
router.delete('/:id', organismes.delete)

// Delete all associationss
router.delete('/', organismes.deleteAll)

module.exports = router
