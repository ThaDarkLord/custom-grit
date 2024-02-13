const {User} = require('../models');

const userData = [
  {
    username: "test",
    email: "jjwatt@gmail.com",
    password: "Test123",
    heightInches: 74,
    weightLbs: 244,
  },
  {
    username: "hiro",
    email: "hiro@gmail.com",
    password: "Password123",
    heightInches: 74,
    weightLbs: 244,
  },
  {
    username: "Austin",
    email: "austin@gmail.com",
    password: "Password123",
    heightInches: 74,
    weightLbs: 244,
  },
  {

    username: "Daniel",
    email: "daniel@gmail.com",
    password: "Password123",
    heightInches: 74,
    weightLbs: 244,
  
  }
];
const seedUsers = () => User.bulkCreate(userData, {individualHooks: true, returning: true});
module.exports = seedUsers;
