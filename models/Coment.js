const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const Coment = dbConnection.define("Coment", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
  },
});
module.exports = Coment;
