const db = require("../models");
const Don = db.don;
const Stock = db.stock;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  if (!req.body.type || !req.body.qte) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  Don.create(req.body).then((don) => {
    return res.send(don);
  });
};

exports.findAll = (req, res) => {
  const { type } = req.query;
  let condition = type ? { type: { [Op.like]: `%${type}%` } } : null;
  Don.findAll({ where: condition })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving dons.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Don.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Don with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Don with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Don.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Don was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Don with id=${id}. Maybe Don was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Don with id=" + id,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;
  Don.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Don was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Don with id=${id}. Maybe Don was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Don with id=" + id,
      });
    });
};
exports.deleteAll = (req, res) => {
  Don.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Don were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all Don.",
      });
    });
};

exports.findByUserId = (req, res) => {
  iduser = req.params.iduser;
  Don.findAll({
    where: {
      iduser: iduser,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          `Some error occurred while retrieving dons for user with id=${id}`,
      });
    });
};

exports.DonStats = (req, res) => {
  const mois = req.params.mois;
  let lastday = mois in ["01", "03", "05", "07", "08", "10", "12"] ? 31 : 30;
  console.log(mois);
  let condition = mois
    ? {
        createdAt: {
          [Op.between]: [`2022-${mois}-01`, `2022-${mois}-${lastday}`],
        },
      }
    : null;
  Don.findAndCountAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          `Some error occurred while retrieving dons for user with id=${id}`,
      });
    });
};

exports.validerDon = (req, res) => {
  const id = req.params.id;
  Don.findByPk(id)
    .then((don) => {
      if (don.etat == 0) {
        don.update({ etat: 1 });
        Stock.findByPk(don.idstock)
          .then((stock) => {
            stock.update({ quantite_total: stock.quantite_total + don.qte });
          })
          .then(() => {
            res.send({ message: "validated etat" });
          });
      } else {
        res.send({ message: "Don already valide!" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error validating Don with id=" + id,
      });
    });
};



