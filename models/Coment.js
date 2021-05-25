const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const Coment = dbConnection.define("Coment", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  Content: {
    type: DataTypes.TEXT,
  },
});
module.exports = Coment;
