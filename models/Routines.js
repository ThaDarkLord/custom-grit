const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Routines extends Model {}

Routines.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  routine_name: {
    type: DataTypes.TEXT,
    allowNull: False
  }
//   make this foreign key for users id
    user_id: {
    type: DataTypes.TEXT,
    allowNull: false,

    references{
      model: 'User',
      key: 'id',
    },
  },
 
});

module.exports = Routines;