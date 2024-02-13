const router = require('express').Router();
const homePage = require('./homepage');
const apiRoutes = require("./api");



router.use('/', homePage);
router.use('/api', apiRoutes);




module.exports = router;