const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UnitEvaulationFormSchema = new Schema({
    team: {
        type:Schema.Types.ObjectId,
        ref:'team'
    },
    ideas: {
      attempted : {
        type: Number,
        required: true,
        min:1,
        max:3
      },
      showcase: {
          type: Boolean,
          required: true
      }
    },
    plan: {
        type: Number,
        required: true,
        min:1,
        max:3
      },
    makeTest:{
        type: Number,
        required: true,
        min:1,
        max:3
    },
    presentation: {
        type: Number,
        required: true,
        min:1,
        max:3
    },
    present: {
        type: Boolean,
        required: true,
        default: false
    },
    comments: {
        type: String,
        required: false
    }

});

module.exports = UnitEvaulation = mongoose.model("unitEvaluationForm", UnitEvaulationFormSchema);