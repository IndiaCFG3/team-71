const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TeamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  students: [{
    type: Schema.Types.ObjectId,
    ref:'students',
  }],
  unitEvaluation: [{
      type: Schema.Types.ObjectId,
      ref:'unitEvaluationForm'
  }],
});

module.exports = Team = mongoose.model("team", TeamSchema);