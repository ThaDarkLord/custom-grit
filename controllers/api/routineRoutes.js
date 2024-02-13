const router = require("express").Router();
const { Routines } = require ('../../models');
const { route } = require("../homepage");

router.get('/routine/:id', async (req, res) => {
    try {
        const routineData = await Routines.findByPk(req.params.id);
        console.log(routineData)
     
        res.status(200).json(routineData)
    } catch (error) {
        res.status(500).json(error)
    }
});
router.get('/routines', (req, res) => {
    res.render('routine')
  })
  

router.post('/routine', async (req, res) => {
    try {
        const newRoutine = await Routines.create({
            
            // if HIIT Protocol include HIIT, if LISS include LISS protocol
            // will need to have custom routines made for each selected drop box
            // suggested option would be a custom routine generator (draggable assignment in form)

        });
        res.status(200).json(newRoutine)
    } catch (err) {
        res.status(400).json(err);
    }
});


// will need a delete path
module.exports = router ;