const router =  require('express').Router();
const Workout = require('../models/workout.js');

router.post('/api/workouts', (req, res) => {
    Workout.create({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercise: body } },
        //"runValidators" will ensure new exercises meet our schema requirements
        { new: true, renValidators: true }
    )
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;