const db = require("../models");
const Demande = db.demande;
const Stock = db.stock;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  if (!req.body.type || !req.body.qte) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  Demande.create(req.body).then((demande) => {
    return res.send(demande);
  });
};

exports.findAll = (req, res) => {
  const { type } = req.query;
  let condition = type ? { type: { [Op.like]: `%${type}%` } } : null;
  Demande.findAll({ where: condition })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Demandes.",
      });
    });
};
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
  const id = req.params.id;
  Demande.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Demande with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Demande with id=" + id,
      });
    });
};
exports.update = (req, res) => {
  const id = req.params.id;
  Demande.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Demande was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Demande with id=${id}. Maybe Demande was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Demande with id=" + id,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;
  Demande.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Demande was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Demande with id=${id}. Maybe Demande was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Demande with id=" + id,
      });
    });
};
exports.deleteAll = (req, res) => {
  Demande.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Demandes were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Demandes.",
      });
    });
};

exports.findByIdUser = (req, res) => {
  const userId = req.params.userId;
  Demande.findAll({
    where: {
      iduser: userId,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          `Some error occurred while retrieving Demandes for user with id = ${userId}`,
      });
    });
};

exports.validerDemande = (req, res) => {
  const id = req.params.id;
  Demande.findByPk(id)
    .then((demande) => {
      if (demande.etat == 0) {
        demande.update({ etat: 1 });
        console.log(demande)
        Stock.findByPk(demande.idstock)
          .then((stock) => {
            if (stock.quantite_total - demande.qte >= 0){
              stock.update({
                quantite_total: stock.quantite_total - demande.qte,
              });
            }
            else {
              stock.update({
                quantite_total: 0,
              });
            }
          })
          .then(() => {
            res.send({ message: "validated etat" });
          });
      } else {
        res.send({ message: "demande already valide!" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error validating demande with id=" + id,
      });
    });
};
