const fs = require('fs')
const db = require('../models')
const config = require('../config/auth.config')
const Association = db.association
const Op = db.Sequelize.Op
const getPagination = (page, size) => {
  const limit = size ? +size : 3
  const offset = page ? page * limit : 0
  return { limit, offset }
}
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: associations } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, associations, totalPages, currentPage }
}

exports.create = async (req, res) => {
 
    if (!req.body.nom || !req.body.description) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }

    Association.create({
      nom: req.body.nom,
      description: req.body.description,
      nature: req.body.nature,
      objectif: req.body.objectif,
      mission: req.body.mission,
      logo: req.body.logo,
      date_fondation: req.body.date_fondation,
      president: req.body.president,
      SG: req.body.SG,
      RT: req.body.RT,
      vice_president: req.body.vice_president,
      contrat: req.body.contrat,
      tel_association: req.body.tel_association,
     
    }).then((association) => {
      return res.send(association)
    })

}
exports.findAll = (req, res) => {
  const { page, size, nom } = req.query
  let condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null
  const { limit, offset } = getPagination(page, size)
  Association.findAndCountAll({ where: condition, limit, offset })
    .then((data) => {
      const response = getPagingData(data, page, limit)
      console.log(response)
      res.send(response.associations)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Associations.',
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
  Association.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Association with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Association with id=' + id,
      })
    })
}
exports.update = (req, res) => {
  const id = req.params.id
  Association.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Association was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Association with id=${id}. Maybe Association was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Association with id=' + id,
      })
    })
}
exports.delete = (req, res) => {
  const id = req.params.id
  Association.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Association was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Association with id=${id}. Maybe Association was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Association with id=' + id,
      })
    })
}
exports.deleteAll = (req, res) => {
  Association.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Associations were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Associations.',
      })
    })
}
