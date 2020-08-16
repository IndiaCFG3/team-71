const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
    inquilab: {
        type:Schema.Types.ObjectId,
        ref:'inquilab'
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type:String,
        required: false,
    },
    email: {
        type: String,
        required: true,
      },
    principalName: {
        type: String,
        required: false,
    },
    teachers: [{
        type:Schema.Types.ObjectId,
        ref:'teachers'
    }],
    enabled: {
        type:Boolean,
        default: true,
        required: false
    }

});

module.exports = School = mongoose.model("schools", SchoolSchema);