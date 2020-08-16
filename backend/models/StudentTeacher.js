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
    required: false,
  },
  class: {
    type: String,
    required: true,
  },
  teacher:{
      type: Schema.Types.ObjectId,
      ref:'teachers'
  },
  classObservation: [{
    type:Schema.Types.ObjectId,
    ref:'classObservationForm'
  }],
  enabled: {
    type: Boolean,
    default:true,
    required:false,
  },
});

module.exports = StudentTeacher = mongoose.model("StudentTeacher", StudentTeacherSchema);