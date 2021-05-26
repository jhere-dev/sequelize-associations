const comentRepository = require("../repositories/comentRepository");

exports.getComent = async (id) => {
  const coment = await comentRepository.findComentById(id);
  return coment.toJSON();
};

exports.createComent = async (coment) => {
  if (!coment.content) {
    throw new Error("You must provide content");
  }
  await comentRepository.insertComent(coment);
};

exports.deleteComent = async (id) => {
  return await comentRepository.deleteComent(id);
};
