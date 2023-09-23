const mongoose = require("mongoose");

// Student schema to store student details in mongodb atlas.
const student_schema = mongoose.Schema({
  r: {
    type: Number,
    unique: true,
  },
  name: String,
  dob: {
    type: Date,
  },
  score: Number,
});

const student_data = mongoose.model("student_data", student_schema);
module.exports = student_data;
