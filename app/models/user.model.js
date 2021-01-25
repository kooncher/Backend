const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    student_id: String,
    student_name: String,
    username: String,
    password: String,
    faculty: String,
    major: String,
    email: String,
    tel: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
