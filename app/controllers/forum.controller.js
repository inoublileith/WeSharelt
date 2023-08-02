const fs = require('fs')
const db = require('../models')
const config = require('../config/auth.config')
const Forum = db.forum
const Op = db.Sequelize.Op
const getPagination = (page, size) => {
  const limit = size ? +size : 3
  const offset = page ? page * limit : 0
  return { limit, offset }
}
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: forums } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, forums, totalPages, currentPage }
}

exports.create = async (req, res) => {
  if (!req.body.sujet) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  Forum.create({
    sujet: req.body.sujet,
    date_ins: req.body.date_ins,
    etat: req.body.etat,
    iduser: req.iduser,
  }).then((forum) => {
    return res.send(forum)
  })
}
exports.findAll = (req, res) => {
  const { page, size, sujet } = req.query
  let condition = sujet ? { sujet: { [Op.like]: `%${sujet}%` } } : null
  const { limit, offset } = getPagination(page, size)
  Forum.findAndCountAll({ where: condition, limit, offset })
    .then((data) => {
      const response = getPagingData(data, page, limit)
      console.log(response)
      res.send(response.forums)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Forums.',
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
  Forum.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Forum with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Forum with id=' + id,
      })
    })
}
exports.update = (req, res) => {
  const id = req.params.id
  Forum.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Forum was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Forum with id=${id}. Maybe Forum was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Forum with id=' + id,
      })
    })
}
exports.delete = (req, res) => {
  const id = req.params.id
  Forum.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Forum was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Forum with id=${id}. Maybe Forum was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Forum with id=' + id,
      })
    })
}
exports.deleteAll = (req, res) => {
  Forum.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Forums were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all Forums.',
      })
    })
}
