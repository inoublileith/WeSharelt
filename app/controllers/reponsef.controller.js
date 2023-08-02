const fs = require('fs')
const db = require('../models')
const config = require('../config/auth.config')
const Reponsef = db.reponsef
const Op = db.Sequelize.Op
const getPagination = (page, size) => {
  const limit = size ? +size : 3
  const offset = page ? page * limit : 0
  return { limit, offset }
}
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: reponsefs } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, reponsefs, totalPages, currentPage }
}

exports.create = async (req, res) => {
  if (!req.body.reponse) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  Reponsef.create({
    reponse: req.body.reponse,
   
  }).then((reponsef) => {
    return res.send(reponsef)
  })
}
exports.findAll = (req, res) => {
  const { page, size, reponse } = req.query
  let condition = reponse ? { reponse: { [Op.like]: `%${reponse}%` } } : null
  const { limit, offset } = getPagination(page, size)
  Reponsef.findAndCountAll({ where: condition, limit, offset })
    .then((data) => {
      const response = getPagingData(data, page, limit)
      console.log(response)
      res.send(response.reponsefs)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Reponses.',
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
  Reponsef.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find reponse with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving reponse with id=' + id,
      })
    })
}
exports.update = (req, res) => {
  const id = req.params.id
  Reponsef.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Reponse was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Reponse with id=${id}. Maybe Reponse was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Reponse with id=' + id,
      })
    })
}
exports.delete = (req, res) => {
  const id = req.params.id
  Reponsef.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Reponse was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Reponse with id=${id}. Maybe Reponse was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Reponse with id=' + id,
      })
    })
}
exports.deleteAll = (req, res) => {
  Reponsef.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Reponses were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Reponses.',
      })
    })
}
