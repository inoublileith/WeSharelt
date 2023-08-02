const fs = require('fs')
const db = require('../models')
const config = require('../config/auth.config')
const Admin = db.admin
const Op = db.Sequelize.Op
const getPagination = (page, size) => {
  const limit = size ? +size : 3
  const offset = page ? page * limit : 0
  return { limit, offset }
}
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: admins } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, admins, totalPages, currentPage }
}

exports.create = async (req, res) => {
  if (!req.body.url ) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  Admin.create({
    nom_app: req.body.nom_app,
    url: req.body.url,
    date_publication: req.body.date_publication,
    provider: req.body.provider,
    provider_SGBD: req.body.provider_SGBD,
    date_ins: req.body.date_ins,
    date_lastup: req.body.date_lastup,

  }).then((admin) => {
    return res.send(admin)
  })
}
exports.findAll = (req, res) => {
  const { page, size, url } = req.query
  let condition = url ? { url: { [Op.like]: `%${url}%` } } : null
  const { limit, offset } = getPagination(page, size)
  Admin.findAndCountAll({ where: condition, limit, offset })
    .then((data) => {
      const response = getPagingData(data, page, limit)
      console.log(response)
      res.send(response.admins)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Admins.',
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
  Admin.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Admin with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Admin with id=' + id,
      })
    })
}
exports.update = (req, res) => {
  const id = req.params.id
  Admin.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Admin was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Admin with id=${id}. Maybe Admin was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Admin with id=' + id,
      })
    })
}
exports.delete = (req, res) => {
  const id = req.params.id
  Admin.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Admin was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Admin with id=${id}. Maybe Admin was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Admin with id=' + id,
      })
    })
}
exports.deleteAll = (req, res) => {
  Admin.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Admins were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Admins.',
      })
    })
}
