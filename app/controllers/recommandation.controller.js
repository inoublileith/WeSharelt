const fs = require('fs')
const db = require('../models')
const config = require('../config/auth.config')
const Recommandation = db.recommandation
const Op = db.Sequelize.Op
const getPagination = (page, size) => {
  const limit = size ? +size : 3
  const offset = page ? page * limit : 0
  return { limit, offset }
}
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: recommandations } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, recommandations, totalPages, currentPage }
}

exports.create = async (req, res) => {
  if (!req.body.titre || !req.body.description) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  Recommandation.create({
    titre: req.body.titre,
    description: req.body.description,
    domaine: req.body.domaine,
    specification: req.body.specification,
    date_ins: req.body.date_ins,
    retenu: req.body.retenu,
    etat: req.body.etat ? req.body.etat : 0,
  
  }).then((recommandation) => {
    return res.send(recommandation)
  })
}
exports.findAll = (req, res) => {
  const { titre } = req.query
  let condition = titre ? { titre: { [Op.like]: `%${titre}%` } } : null
  Recommandation.findAll({ where: condition })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Recommandation.',
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
  Recommandation.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Recommandation with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Recommandation with id=' + id,
      })
    })
}
exports.update = (req, res) => {
  const id = req.params.id
  Recommandation.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Recommandation was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Recommandation with id=${id}. Maybe Recommandation was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Recommandation with id=' + id,
      })
    })
}
exports.delete = (req, res) => {
  const id = req.params.id
  Recommandation.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Recommandation was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Recommandation with id=${id}. Maybe Recommandation was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Recommandation with id=' + id,
      })
    })
}
exports.deleteAll = (req, res) => {
  Recommandation.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Recommandations were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Recommandations.',
      })
    })
}
