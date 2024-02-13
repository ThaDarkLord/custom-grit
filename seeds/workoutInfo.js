const { workoutInfo } = require("../models");

const workoutInfoData = [
  {
    experience: 1,
    muscularGoal: 1,
    cardioGoal: 1,
    availability: 1,
    user_id: 1,
  },
  {
    experience: 1,
    muscularGoal: 1,
    cardioGoal: 1,
    availability: 1,
    user_id: 2,
  },
  {
    experience: 3,
    muscularGoal: 3,
    cardioGoal: 1,
    availability: 1,
    user_id: 3,
  },
  {
    experience: 2,
    muscularGoal: 2,
    cardioGoal: 1,
    availability: 1,
    user_id: 4,
  }
];
const seedWorkoutInfo = () =>
  workoutInfo.bulkCreate(workoutInfoData, {
    individualHooks: true,
    returning: true,
  });
module.exports = seedWorkoutInfo;
