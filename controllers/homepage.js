const router = require("express").Router();
const { Routines, User, workoutInfo } = require("../models");
const withAuth = require('../utils/auth')
router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/routine", (req, res) => {
  res.render("routine");
});

router.get("/signUp", (req, res) => {
  res.render("signUp");
});

router.get("/userInput", (req, res) => {
  res.render("userInput");
});

router.get("/profile", withAuth ,async (req, res) => {
    try{
  const userData = await User.findByPk(req.session.user_id, {
    include: [
      {
        model: workoutInfo,
      },
      {
        model: Routines,
      },
    ],
  });
  console.log(userData);
  const user = userData.get({plain : true})
  res.render("profile", {
    ...user,
     logged_in: req.session.logged_in});
    } catch(err){
        console.log(err)
        res.status(500).json(err)
     }
});

module.exports = router;
