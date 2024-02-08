const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class LISS extends model {}

LISS.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  duration: {
    type: DataTypes.NUMBER,
    allowNull: false 
  },
  modality: {
    type: DataTypes.CHAR
  }
});

module.exports= LISS;
