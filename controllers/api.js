const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", async (req, res) => {
  try {
    const lastWorkout = await db.Workout.find({});
    res.status(200).json(lastWorkout);
  } catch (error) {
    res.status(500);
  }
});

router.post("/api/workouts", async (req, res) => {
  try {
    const newWorkout = await db.Workout.create(req.body);
    res.status(200).json(newWorkout);
  } catch (error) {
    res.status(500);
  }
});

router.put("/api/workouts/:id", async (req, res) => {
  try {
    const workoutById = await db.Workout.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    });
    res.status(200).json(workoutById);
  } catch (error) {}
});

router.get("/api/workouts/range", async (req, res) => {
  try {
    const lastWorkout = await db.Workout.find({}).limit(7).sort({ _id: -1 });
    const reverseWeekWorkout = lastWorkout.reverse();
    res.status(200).json(reverseWeekWorkout);
  } catch (error) {
    res.status(500);
  }
});

module.exports = router;
