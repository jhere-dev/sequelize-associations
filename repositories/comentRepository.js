const Coment = require("../models/Coment");
const Post = require("../models/Post");
const user = require("../models/User");

exports.findComentById = async (id) => {
  return await Coment.findByPk(id);
};

exports.insertComent = async (coment) => {
  return await Coment.create(coment);
};

exports.deleteComent = async (id) => {
  return await Coment.destroy({ where: { id } });
};
