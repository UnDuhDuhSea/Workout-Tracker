const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", function (req, res) {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
      console.log(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
});

module.exports = router;
