const router = require('express').Router()

const demandes = require('../controllers/demande.controller.js')
//const upload = require('../middleware/upload')

// Create a new demandes
router.post('/create', demandes.create)

// Retrieve all demandess
router.get('/', demandes.findAll)

// Retrieve all promoted produit
//router.get('/promoted', produit.findAllPromoted)

// Retrieve a single demandes with id
router.get('/:id', demandes.findOne)

// Update a demandes with id
router.put('/:id', demandes.update)

// Delete a demandes with id
router.delete('/:id', demandes.delete)

// Delete all demandess
router.delete('/', demandes.deleteAll)

router.get('/user/:userId', demandes.findByIdUser)

router.put('/valider/:id', demandes.validerDemande)

module.exports = router
