const router = require('express').Router()

const dons = require('../controllers/don.controller.js')
//const upload = require('../middleware/upload')

// Create a new dons
router.post('/create', dons.create)

// Retrieve all donss
router.get('/', dons.findAll)

// Retrieve all promoted produit
//router.get('/promoted', produit.findAllPromoted)

// Retrieve a single dons with id
router.get('/:id', dons.findOne)

// Update a dons with id
router.put('/:id', dons.update)

// Delete a dons with id
router.delete('/:id', dons.delete)

// Delete all donss
router.delete('/', dons.deleteAll)

router.get('/user/:iduser', dons.findByUserId)

router.get('/charte/:mois', dons.DonStats)

router.put('/valider/:id', dons.validerDon)

module.exports = router
