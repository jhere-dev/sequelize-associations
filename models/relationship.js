const dbConnection = require("../config/db");
const User = require("./User");
const Post = require("./Post");
const Coment = require("./Coment");

const loadModels = () => {
  User.hasMany(Post, {
    foreignKey: {
      allowNull: false,
    },
  });
  Post.belongsTo(User);

  Post.hasMany(Coment, {
    foreignKey: {
      allowNull: true,
    },
  });
  Coment.belongsTo(User);
  Coment.belongsTo(Post);

  dbConnection.sync().then(() => console.log("All models loaded"));
};

module.exports = loadModels;
