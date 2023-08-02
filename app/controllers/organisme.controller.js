const fs = require('fs')
const db = require('../models')
const config = require('../config/auth.config')
const Organisme = db.organisme
const Op = db.Sequelize.Op
const getPagination = (page, size) => {
  const limit = size ? +size : 3
  const offset = page ? page * limit : 0
  return { limit, offset }
}
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: organismes } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, organismes, totalPages, currentPage }
}

exports.create = async (req, res) => {
  if (!req.body.nom || !req.body.description) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  Organisme.create({
    nom: req.body.nom,
    description: req.body.description,
    domaine: req.body.domaine,
    mission: req.body.mission,
    logo: req.body.logo,
    date_fondation: req.body.date_fondation,
    president: req.body.president,
    contact: req.body.contact,
    adresse: req.body.adresse,
    tel: req.body.tel,
    evenement: req.body.evenement,
    stock_global: req.body.stock_global,
  }).then((organisme) => {
    return res.send(organisme)
  })
}
exports.findAll = (req, res) => {
  //const { page, size, nom } = req.query
  //let condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null
  //const { limit, offset } = getPagination(page, size)
  Organisme.findAll({ req, res })
    .then((data) => {
      //const response = getPagingData(data, page, limit)
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Organismes.',
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
  Organisme.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Organisme with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Organisme with id=' + id,
      })
    })
}
exports.update = (req, res) => {
  const id = req.params.id
  Organisme.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Organisme was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Organisme with id=${id}. Maybe Organisme was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Organisme with id=' + id,
      })
    })
}
exports.delete = (req, res) => {
  const id = req.params.id
  Organisme.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Organisme was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Organisme with id=${id}. Maybe Organisme was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Organisme with id=' + id,
      })
    })
}
exports.deleteAll = (req, res) => {
  Organisme.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Organismes were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Organismes.',
      })
    })
}
