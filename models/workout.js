const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: true,
      },
      name: {
        type: String,
        trim: true,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

// WorkoutSchema.virtual(totalDuration).get(function () {
//   let total = 0;
//   for (let i = 0; i < this.exercises.length; i++) {
//     const element = this.exercises[i].duration;
//     total += element;
//   }
//   return total;
// });

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.length
    ? this.exercises.reduce((total, { duration }) => total + duration, 0)
    : 0;
});

const Workout = model("Workout", WorkoutSchema);

module.exports = Workout;
