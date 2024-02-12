const router = require("express").Router();
const { Routines , User} = require('../models')


router.get('/', (req, res) => {
    res.render('homepage')
  })
  
  router.get('/login', (req, res) => {
    res.render('login')
  })
  
  router.get('/routine', (req, res) => {
    res.render('routine')
  })
  
  router.get('/signUp', (req, res) => {
    res.render('signUp')
  })
  
  router.get('/userInput', (req, res) => {
    res.render('userInput')
  })
  
  router.get('/profile', (req, res) =>{
    res.render('profile')
  })


module.exports = router;
