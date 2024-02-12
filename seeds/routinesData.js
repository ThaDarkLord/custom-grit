const {Routines} = require('../models');

const routinesData = [
  //   {
  //     routine_name: "Beginner",
  //     filename: ,

  //   },
  //   {
  //     routine_name: "Intermediate Strength",
  //     filename: {},
  //   },
  //   {
  //     routine_name: "Intermediate Size",
  //     filename: {},
  //   },
  //   {
  //     routine_name: "Intermediate Sharpen",
  //     filename: {},
  //   },
  {
    routine_name: "Advanced Strength",
    filename: "advancedStrength.png",
    user_id: 1,
  },
  {
    routine_name: "Advanced Size",
    filename: "advancedSize.png",
    user_id: 1,
  },
  {
    routine_name: "Advanced Sharpen",
    filename: "advancedSharpen.png",
    user_id: 1,
  },
];

const seedRoutines = () => Routines.bulkCreate(routinesData);
module.exports = seedRoutines;