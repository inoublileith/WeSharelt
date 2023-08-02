const fs = require('fs')
const db = require('../models')
const config = require('../config/auth.config')
const Sdf = db.sdf
const Op = db.Sequelize.Op
const getPagination = (page, size) => {
  const limit = size ? +size : 3
  const offset = page ? page * limit : 0
  return { limit, offset }
}
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: sdfs } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, sdfs, totalPages, currentPage }
}

exports.create = async (req, res) => {
  if (!req.body.nom || !req.body.prenom) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  Sdf.create({
    nom: req.body.nom,
    prenom: req.body.prenom,
    genre: req.body.genre,
    age: req.body.age,
    cas_social: req.body.cas_social,
    handicape: req.body.handicape,
    maladie: req.body.maladie,
    adresse: req.body.adresse,
    local: req.body.local,
    
  }).then((sdf) => {
    return res.send(sdf)
  })
}
exports.findAll = (req, res) => {
  const { nom } = req.query
  let condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null
  Sdf.findAll({ where: condition })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Sdfs.',
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
  Sdf.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Sdf with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Sdf with id=' + id,
      })
    })
}
exports.update = (req, res) => {
  const id = req.params.id
  Sdf.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Sdf was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Sdf with id=${id}. Maybe Sdf was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Sdf with id=' + id,
      })
    })
}
exports.delete = (req, res) => {
  const id = req.params.id
  Sdf.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Sdf was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Sdf with id=${id}. Maybe Sdf was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Sdf with id=' + id,
      })
    })
}
exports.deleteAll = (req, res) => {
  Sdf.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Sdfs were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Sdfs.',
      })
    })
}
