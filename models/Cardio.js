const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Cardio extends Model {}

Cardio.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    intensity: {
      type: DataTypes.CHAR,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    modality: {
      type: DataTypes.CHAR,
    },
    routine_id: {
      type: DataTypes.INTEGER,
      allowNull: false,

      references: {
        model: "routine",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "cardio",
  }
);

module.exports = Cardio;