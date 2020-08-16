const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    
    roll : {
        type : String,
        required : true,
    },

    team : {
        type : Number, 
        required : true,
    },

    teacher: {
        type : mongoose.Schema.Types.ObjectId,
        ref:'teachers',
        
    },

    /*
    class : {
        type : Number,
        required : true,
    },
*/
    enabled: {
        type:Boolean,
        default: true,
        required: false
    },

});

module.exports = Student = mongoose.model("Student", StudentSchema)