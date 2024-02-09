const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Muscular extends Model{}
Muscular.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
    type: {
    type: DataTypes.CHAR,
    allowNull: false
  },
  intensity: {
    type: DataTypes.CHAR
  },
  exercises: {
    type: DataTypes.TEXT,
  },
    rep_range: {
    type: DataTypes.INTEGER
  },
  sets: {
    type: DataTypes.INTEGER
  },
  rest: {
    type: DataTypes.INTEGER
  },
  liftPercentage: {
    type: DataTypes.FLOAT
  },
   routine_id: {
    type: DataTypes.INTEGER,
    allowNull: false,

    references: {
      model: 'routine',
      key: 'id',
    },
  },
}, 
{
      sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'muscular',
}

);


module.exports = Muscular;