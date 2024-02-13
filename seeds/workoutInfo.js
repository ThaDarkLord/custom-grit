const { workoutInfo } = require("../models");

const workoutInfoData = [
  {
    experience: 1,
    muscularGoal: 1,
    cardioGoal: 1,
    availability: 1,
    user_id: 1
  },
];
const seedWorkoutInfo = () =>
  workoutInfo.bulkCreate(workoutInfoData, {
    individualHooks: true,
    returning: true,
  });
module.exports = seedWorkoutInfo;
