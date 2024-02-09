const router = require("express").Router();
const { Routines } = require ('../../models');


router.post('/', async (req, res) => {
    try {
        const newRoutine = await Routines.create({
            
            // if HIIT Protocol include HIIT, if LISS include LISS protocol
            // will need to have custom routines made for each selected drop box
            // suggested option would be a custom routine generator (draggable assignment in form)



        })
    }
})


// will need a delete path