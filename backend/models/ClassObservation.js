const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ClassObservationFormSchema = new Schema({
    studentTeacher: {
        type:Schema.Types.ObjectId,
        ref:'studentTeacher'
    },
    student: {
      type:Schema.Types.ObjectId,
        ref:'students'
    },
    imageURL: {
      type: String,
      required: false,
    },
    leadership: {
      classPresence : {
        type: Number,
        required: true,
        min:1,
        max:5
      },
      
      initiative: {
        type: Number,
        required: true,
        min:1,
        max:5
      },

      confidence: {
        type: Number,
        required: true,
        min:1,
        max:5
      },

      notes: {
        type: String,
        required: false
      }
    
    },
    mentorship: {
        preparation : {
          type: Number,
          required: true,
          min:1,
          max:5
        },
        
        helpingTeams: {
          type: Number,
          required: true,
          min:1,
          max:5
        },

        notes: {
          type: String,
          required: false
        }
      
      }

});

module.exports = ClassObservation = mongoose.model("classObservationForm", ClassObservationFormSchema);