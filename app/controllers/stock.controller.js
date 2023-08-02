const fs = require('fs')
const db = require('../models')
const config = require('../config/auth.config')
const Stock = db.stock
const Op = db.Sequelize.Op
const getPagination = (page, size) => {
  const limit = size ? +size : 3
  const offset = page ? page * limit : 0
  return { limit, offset }
}
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: stocks } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, stocks, totalPages, currentPage }
}

exports.create = async (req, res) => {
  if (!req.body.titre ) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  Stock.create(
    req.body
  ).then((stock) => {
    return res.send(stock)
  })
}
exports.findAll = (req, res) => {
  const { titre } = req.query
  let condition = titre ? { titre: { [Op.like]: `%${titre}%` } } : null
  Stock.findAll({ where: condition })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Stocks.',
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
  Stock.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Stock with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Stock with id=' + id,
      })
    })
}
exports.update = (req, res) => {
  const id = req.params.id
  Stock.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Stock was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Stock with id=${id}. Maybe Stock was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Stock with id=' + id,
      })
    })
}
exports.delete = (req, res) => {
  const id = req.params.id
  Stock.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Stock was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Stock with id=${id}. Maybe Stock was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Stock with id=' + id,
      })
    })
}
exports.deleteAll = (req, res) => {
  Stock.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Stocks were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Stocks.',
      })
    })
}
