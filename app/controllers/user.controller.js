const db = require('../models')
const User = db.user

const Op = db.Sequelize.Op

const getPagination = (page, size) => {
  const limit = size ? +size : 3
  const offset = page ? page * limit : 0
  return { limit, offset }
}
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: users } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, users, totalPages, currentPage }
}
exports.create = async (req, res) => {
  if (!req.body.nom) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }
  User.create({
    civil: req.body.civil,
    nom: req.body.nom,
    prenom: req.body.prenom,
    date_naissance: req.body.date_naissance,
    cin: req.body.cin,
    tel: req.body.tel,
    email: req.body.email,
    gouvernorat: req.body.gouvernorat,
    adresse: req.body.adresse,
    cpostal: req.body.cpostal,
    delegation: req.body.delegation,
    login: req.body.login,
    password: req.body.password,
    profil: req.body.profil,
    permissions: req.body.permissions,
    etat: req.body.etat,
    avatar: req.body.avatar,
  }).then((user) => {
    return res.send(user)
  })
}

exports.findById = (req, res) => {
  const id = req.params.id
  User.findByPk(id)
    .then((user) => {
      if (user) {
        res.send(user)
      } else {
        res.status(404).send({
          message: `Cannot find user with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving user with id: ' + id,
      })
    })
}

exports.findAll = (req, res) => {
  const { nom } = req.query
  let condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null
  User.findAll({ where: condition })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.',
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  User.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'User was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update user with id=${id}. Maybe User was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating user with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  User.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'User was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete User with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Users were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all Users.',
      })
    })
}

exports.allAccess = (req, res) => {
  res.status(200).send('dghj dfh jdghj d.')
}
exports.userBoard = (req, res) => {
  res.status(200).send('User Content.')
}
exports.adminBoard = (req, res) => {
  res.status(200).send('Admin Content.')
}
exports.analysteBoard = (req, res) => {
  res.status(200).send('Analyste Content.')
}
exports.associationBoard = (req, res) => {
  res.status(200).send('association Content.')
}
exports.organismeBoard = (req, res) => {
  res.status(200).send('organisme Content.')
}
