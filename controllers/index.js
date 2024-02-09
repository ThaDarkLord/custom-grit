const router = require('express').Router();
const homePage = require('./homepage');

// we will need to add for all of our pages here
// ./api to get into the api folder which will hold all data


router.use('/', homePage);





module.exports = router;