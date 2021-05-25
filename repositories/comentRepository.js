const Coment = require("../models/Coment");

exports.findComentById = async (id) => {
  return await Coment.findByPk(id);
};

exports.insertComent = async (coment) => {
  return await Coment.create(coment);
};
