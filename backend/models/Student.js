const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    rollno : {
        type : String,
        required : true,
    },
    team : {
        type : mongoose.Schema.Types.ObjectId, 
        ref: 'teams',
    },
    teacher: {
        type : mongoose.Schema.Types.ObjectId,
        ref:'teachers',
    },
    classObservation: [{
        type:Schema.Types.ObjectId,
        ref:'classObservationForm'
    }],
    enabled: {
        type:Boolean,
        default: true,
        required: false
    },

});

module.exports = Student = mongoose.model("students", StudentSchema)