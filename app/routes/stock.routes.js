const router = require('express').Router()

const stocks = require('../controllers/stock.controller.js')
//const upload = require('../middleware/upload')

// Create a new associations
router.post('/create', stocks.create)

// Retrieve all associationss
router.get('/', stocks.findAll)

// Retrieve all promoted produit
//router.get('/promoted', produit.findAllPromoted)

// Retrieve a single associations with id
router.get('/:id', stocks.findOne)

// Update a associations with id
router.put('/:id', stocks.update)

// Delete a associations with id
router.delete('/:id', stocks.delete)

// Delete all associationss
router.delete('/', stocks.deleteAll)

module.exports = router
