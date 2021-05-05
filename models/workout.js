const mongoose = require("mongoose");

const { Schema } = mongoose;

const WorkoutSchema = new Schema({
  Date: {
    type: Date,
  },
  Exercises: [
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
    },
  ],
});

// WorkoutSchema.methods.nameOfMethod = function () {
//     this.fullName = `${this.firstName} ${this.lastName}`;

//     return this.fullName;
//   };

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;