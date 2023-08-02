const fs = require('fs')
const db = require('../models')
const config = require('../config/auth.config')
const Benevole = db.benevole
const Op = db.Sequelize.Op
const getPagination = (page, size) => {
  const limit = size ? +size : 3
  const offset = page ? page * limit : 0
  return { limit, offset }
}
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: benevoles } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, benevoles, totalPages, currentPage }
}

exports.create = async (req, res) => {
  if (!req.body.nom || !req.body.prenom) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  Benevole.create({
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    facebook: req.body.facebook,
    linkedin: req.body.linkedin,
    context: req.body.context,
    tel: req.body.tel,
    retenu: req.body.retenu,
    etat: req.body.etat ? req.body.etat : 0,
    date_ins: req.body.date_ins,
    idlivaison: req.idlivraison,
    iduser: req.iduser,
  }).then((benevole) => {
    return res.send(benevole)
  })
}
exports.findAll = (req, res) => {
  const { nom } = req.query
  let condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null
  Benevole.findAll({ where: condition })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Benevoles.',
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
  Benevole.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Benevole with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Benevole with id=' + id,
      })
    })
}
exports.update = (req, res) => {
  const id = req.params.id
  Benevole.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Benevole was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Benevole with id=${id}. Maybe Benevole was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Benevole with id=' + id,
      })
    })
}
exports.delete = (req, res) => {
  const id = req.params.id
  Benevole.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Benevole was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Benevole with id=${id}. Maybe Benevole was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Benevole with id=' + id,
      })
    })
}
exports.deleteAll = (req, res) => {
  Benevole.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Benevoles were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Benevoles.',
      })
    })
}
