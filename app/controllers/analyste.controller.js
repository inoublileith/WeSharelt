const fs = require("fs");
const db = require("../models");
const config = require("../config/auth.config");
const Analyste = db.analyste;

const Association = db.association;
const Benevole = db.benevole;
const Demande = db.demande;
const Don = db.don;
const Evenement = db.evenement;
const Forum = db.forum;
const Livraison = db.livraison;
const Organisme = db.organisme;
const Recommandation = db.recommandation;
const SDF = db.sdf;
const Sondage = db.sondage;
const Stock = db.stock;

const Op = db.Sequelize.Op;
const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: analystes } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, analystes, totalPages, currentPage };
};

exports.create = async (req, res) => {
  if (!req.body.specialite || !req.body.mission) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  Analyste.create({
    specialite: req.body.specialite,
    mission: req.body.mission,
    salaire: req.body.salaire,
    date_ins: req.body.date_ins,
  }).then((analyste) => {
    return res.send(analyste);
  });
};
exports.findAll = (req, res) => {
  const { page, size, specialite } = req.query;
  let condition = specialite
    ? { specialite: { [Op.like]: `%${specialite}%` } }
    : null;
  const { limit, offset } = getPagination(page, size);
  Analyste.findAndCountAll({ where: condition, limit, offset })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      console.log(response);
      res.send(response.analystes);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Analystes.",
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
  Analyste.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Analyste with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Analyste with id=" + id,
      });
    });
};
exports.update = (req, res) => {
  const id = req.params.id;
  Analyste.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Analyste was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Analyste with id=${id}. Maybe Analyste was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Analyste with id=" + id,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;
  Analyste.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Analyste was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Analyste with id=${id}. Maybe Analyste was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Analyste with id=" + id,
      });
    });
};
exports.deleteAll = (req, res) => {
  Analyste.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Analystes were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Analystes.",
      });
    });
};

exports.GetStats = (req, res) => {
  let associations,
    benevoles,
    demandes,
    dons,
    evenements,
    forums,
    livraisons,
    organisations,
    sdfs,
    recommandations,
    sondages,
    stocks;

  Association.findAndCountAll().then((data) => {
    associations = data.count;
  });
  Benevole.findAndCountAll().then((data) => {
    benevoles = data.count;
  });
  Demande.findAndCountAll().then((data) => {
    demandes = data.count;
  });
  Don.findAndCountAll().then((data) => {
    dons = data.count;
  });
  Evenement.findAndCountAll().then((data) => {
    evenements = data.count;
  });
  Forum.findAndCountAll().then((data) => {
    forums = data.count;
  });
  Livraison.findAndCountAll().then((data) => {
    livraisons = data.count;
  });
  Organisme.findAndCountAll().then((data) => {
    organisations = data.count;
  });
  Recommandation.findAndCountAll().then((data) => {
    recommandations = data.count;
  });
  SDF.findAndCountAll().then((data) => {
    sdfs = data.count;
  });
  Sondage.findAndCountAll().then((data) => {
    sondages = data.count;
  });
  Stock.findAndCountAll()
    .then((data) => {
      stocks = data.count;
    })
    .then(() => {
      res.send({
        associations,
        benevoles,
        demandes,
        dons,
        evenements,
        forums,
        livraisons,
        organisations,
        recommandations,
        sdfs,
        sondages,
        stocks,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving all Statistics.",
      });
    });
};
