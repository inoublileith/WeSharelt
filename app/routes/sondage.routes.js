const router = require('express').Router()

const sondages = require('../controllers/sondage.controller.js')
//const upload = require('../middleware/upload')

// Create a new associations
router.post('/create', sondages.create)

// Retrieve all associationss
router.get('/', sondages.findAll)

// Retrieve all promoted produit
//router.get('/promoted', produit.findAllPromoted)

// Retrieve a single associations with id
router.get('/:id', sondages.findOne)

// Update a associations with id
router.put('/:id', sondages.update)

// Delete a associations with id
router.delete('/:id', sondages.delete)

// Delete all associationss
router.delete('/', sondages.deleteAll)

module.exports = router
