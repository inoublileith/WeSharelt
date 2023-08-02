const fs = require('fs')
const db = require('../models')
const config = require('../config/auth.config')
const Livraison = db.livraison
const Op = db.Sequelize.Op
const getPagination = (page, size) => {
  const limit = size ? +size : 3
  const offset = page ? page * limit : 0
  return { limit, offset }
}
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: livraisons } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, livraisons, totalPages, currentPage }
}

exports.create = async (req, res) => {
  if (!req.body.type ) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  Livraison.create({
    type: req.body.type,
    date_liv: req.body.date_liv,
    etat_liv: req.body.etat_liv,
  
  }).then((livraison) => {
    return res.send(livraison)
  })
}
exports.findAll = (req, res) => {
  const { type } = req.query
  let condition = type ? { type: { [Op.like]: `%${type}%` } } : null
  Livraison.findAll({ where: condition })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Livraisons.',
      })
    })
}
//exports.findAllPromoted = (req, res) => {
//const { page, size } = req.query
//const { limit, offset } = getPagination(page, size)
//Association.findAndCountAll({ where: { promoted: 1 }, limit, offset })
//.then((data) => {
// const response = getPagingData(data, page, limit)
// res.send(response)
//})
//.catch((err) => {
//   res.status(500).send({
//  message:
// err.message || 'Some error occurred while retrieving associations.',
//  })
//  })
//}
exports.findOne = (req, res) => {
  const id = req.params.id
  Livraison.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Livraison with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Livraison with id=' + id,
      })
    })
}
exports.update = (req, res) => {
  const id = req.params.id
  Livraison.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Livraison was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Livraison with id=${id}. Maybe Livraison was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Livraison with id=' + id,
      })
    })
}
exports.delete = (req, res) => {
  const id = req.params.id
  Livraison.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Livraison was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Livraison with id=${id}. Maybe Livraison was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Livraison with id=' + id,
      })
    })
}
exports.deleteAll = (req, res) => {
  Livraison.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Livraisons were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Livraisons.',
      })
    })
}
