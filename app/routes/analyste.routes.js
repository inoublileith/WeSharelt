const router = require('express').Router()

const analystes = require('../controllers/analyste.controller.js')
//const upload = require('../middleware/upload')

// Create a new associations
router.post('/create', analystes.create)

// Retrieve all associationss
router.get('/', analystes.findAll)

// Retrieve all promoted produit
//router.get('/promoted', produit.findAllPromoted)

// Retrieve a single associations with id
router.get('/:id', analystes.findOne)

// Update a associations with id
router.put('/:id', analystes.update)

// Delete a associations with id
router.delete('/:id', analystes.delete)

// Delete all associationss
router.delete('/', analystes.deleteAll)

router.get('/stats/get', analystes.GetStats)

module.exports = router
