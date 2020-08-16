const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
    school: {
        type:Schema.Types.ObjectId,
        ref:'schools'
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
    password: {
        type: String,
        required: true,
    },
    aadharCard: {
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