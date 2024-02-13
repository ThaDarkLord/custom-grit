const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class workoutInfo extends Model{}

workoutInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    experience: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    muscularGoal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cardioGoal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    availability: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 7,
      },
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,

      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "workoutInfo",
  }
);

module.exports = workoutInfo;