const router = require("express").Router();
const { workoutInfo } = require("../../models");
const { route } = require("../homepage");

// router.get("/routine/:id", async (req, res) => {
//   try {
//     const routineData = await Routines.findByPk(req.params.id);
//     console.log(routineData);

//     res.status(200).json(routineData);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });
// router.get("/routines", (req, res) => {
//   res.render("routine");
// });

router.post("/", async (req, res) => {
  try {
    const newRoutine = await workoutInfo.create({...req.body, user_id: req.session.user_id });
    res.status(200).json(newRoutine);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// will need a delete path
module.exports = router;
