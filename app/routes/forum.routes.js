const router = require('express').Router()

const forums = require('../controllers/forum.controller.js')
//const upload = require('../middleware/upload')

// Create a new forums
router.post('/create', forums.create)

// Retrieve all forumss
router.get('/', forums.findAll)

// Retrieve all promoted produit
//router.get('/promoted', produit.findAllPromoted)

// Retrieve a single forums with id
router.get('/:id', forums.findOne)

// Update a forums with id
router.put('/:id', forums.update)

// Delete a forums with id
router.delete('/:id', forums.delete)

// Delete all forumss
router.delete('/', forums.deleteAll)

module.exports = router
