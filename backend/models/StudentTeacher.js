const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StudentTeacherSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  /*
  schoolID: {
    type: Number,
    required:true,
  },
  */
  Description: {
    type: String,
  },
  class: {
    type: String,
    required: true,
  },
  enabled: {
      type: Boolean,
      default:true,
      required:false,
  },
  teacher:{
      type: Schema.Types.ObjectId,
      ref:'schools'
  }
});

module.exports = StudentTeacher = mongoose.model("StudentTeacher", StudentTeacherSchema);