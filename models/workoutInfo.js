const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class workoutInfo extends model{}

workoutInfo.init({
      id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
    fitnessLevel: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
    fitnessGoal: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    availability: {
        type: DataTypes.NUMBER,
        validate {
            min: 1,
            max: 7,
        }
    },
    cardioType: {
        type:DataTypes.CHAR
    },
     User_id: {
    type: DataTypes.TEXT,
    allowNull: false,

    references{
      model: 'User',
      key: 'id',
    },

})

module.exports = workoutInfo;