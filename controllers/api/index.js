const router = require('express').Router();
const userRoutes = require('./userRoutes');
const routineRoutes = require('./routineRoutes');
const workoutInfoRoute = require('./workoutInfoRoute')
router.use('/users', userRoutes);
router.use('/routines', routineRoutes);
router.use('/workoutInfo', workoutInfoRoute);

module.exports = router;
