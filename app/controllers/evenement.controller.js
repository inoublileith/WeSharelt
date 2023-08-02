const fs = require('fs')
const db = require('../models')
const config = require('../config/auth.config')
const Evenement = db.evenement
const Op = db.Sequelize.Op
const getPagination = (page, size) => {
  const limit = size ? +size : 3
  const offset = page ? page * limit : 0
  return { limit, offset }
}
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: evenements } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, evenements, totalPages, currentPage }
}

exports.create = async (req, res) => {
  if (!req.body.titre) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  Evenement.create({
    titre: req.body.titre,
    date: req.body.date,
    adresse: req.body.adresse,
    description: req.body.description,
    public: req.body.public,
    image: req.body.image,
    iduser: req.iduser,
  }).then((evenement) => {
    return res.send(evenement)
  })
}
exports.findAll = (req, res) => {
  const { titre } = req.query
  let condition = titre ? { titre: { [Op.like]: `%${titre}%` } } : null
  Evenement.findAll({ where: condition })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Evenements.',
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
  Evenement.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Evenement with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Evenement with id=' + id,
      })
    })
}
exports.update = (req, res) => {
  const id = req.params.id
  Evenement.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Evenement was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Evenement with id=${id}. Maybe Evenement was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Evenement with id=' + id,
      })
    })
}
exports.delete = (req, res) => {
  const id = req.params.id
  Evenement.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Evenement was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Evenement with id=${id}. Maybe Evenement was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Evenement with id=' + id,
      })
    })
}
exports.deleteAll = (req, res) => {
  Evenement.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Evenements were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Evenements.',
      })
    })
}
