const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    school: {
        type:Schema.Types.ObjectId,
        ref:'schools'
    },
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
    students: [{
        type:Schema.Types.ObjectId,
        ref:'students'
    }],
    enabled: {
        type:Boolean,
        default: true,
        required: false
    }

});

module.exports = Teacher = mongoose.model("teachers", TeacherSchema);