const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Cardio extends Model {}

Cardio.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.CHAR
    allowNull: false
  },
  intensity: {
    type: DataTypes.CHAR
  }
})