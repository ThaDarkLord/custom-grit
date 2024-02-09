const router = require('express').Router();
const homePage = require('./homepage');
const apiRoutes = require("./api");
// we will need to add for all of our pages here
// ./api to get into the api folder which will hold all data


router.use('/', homePage);
router.use('/api', apiRoutes);




module.exports = router;