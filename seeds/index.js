const sequelize = require("../config/connection");
// const seedRoutines = require("./routinesData");
const seedUsers = require('./userData');
const seedWorkoutInfo = require('./workoutInfo')
const seedAll = async () => {
  await sequelize.sync({ force: true });
    await seedUsers();
    await seedWorkoutInfo();
  // await seedRoutines();
  

  process.exit(0);
};

seedAll();
