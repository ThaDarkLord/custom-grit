const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Muscular extends model{}
Muscular.init({
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
  },
  exercises: {
    type: DataTypes.TEXT,
  },
    rep_range: {
    type: DataTypes.RANGE
  },
  sets: {
    type: DataTypes.RANGE
  },
  rest: {
    type: DataTypes.NUMBER
  },
  liftPercentage: {
    type: DataTypes.FLOAT
  },
   routine_id: {
    type: DataTypes.TEXT,
    allowNull: false,

    references{
      model: 'Routine',
      key: 'id',
    },
  },
});


module.exports = Muscular;