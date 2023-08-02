const fs = require('fs')
const db = require('../models')
const config = require('../config/auth.config')
const Sondage = db.sondage
const Op = db.Sequelize.Op
const getPagination = (page, size) => {
  const limit = size ? +size : 3
  const offset = page ? page * limit : 0
  return { limit, offset }
}
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: sondages } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, sondages, totalPages, currentPage }
}

exports.create = async (req, res) => {
  if (!req.body.question ) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  Sondage.create({
    question: req.body.question,
    proposition1: req.body.proposition1,
    proposition2: req.body.proposition2,
    proposition3: req.body.proposition3,
    date_ins:req.body.date_ins,
    etat: req.body.etat ? req.body.etat : 0,
  }).then((sondage) => {
    return res.send(sondage)
  })
}
exports.findAll = (req, res) => {
  const { page, size, question } = req.query
  let condition = question ? { question: { [Op.like]: `%${question}%` } } : null
  const { limit, offset } = getPagination(page, size)
  Sondage.findAndCountAll({ where: condition, limit, offset })
    .then((data) => {
      const response = getPagingData(data, page, limit)
      console.log(response)
      res.send(response.sondages)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Sondages.',
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
  Sondage.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Sondage with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Sondage with id=' + id,
      })
    })
}
exports.update = (req, res) => {
  const id = req.params.id
  Sondage.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Sondage was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Sondage with id=${id}. Maybe Sondage was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Sondage with id=' + id,
      })
    })
}
exports.delete = (req, res) => {
  const id = req.params.id
  Sondage.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Sondage was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Sondage with id=${id}. Maybe Sondage was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Sondage with id=' + id,
      })
    })
}
exports.deleteAll = (req, res) => {
  Sondage.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Sondages were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Sondages.',
      })
    })
}
