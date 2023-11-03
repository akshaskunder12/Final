const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    Coursename:{
        type: String,
        required: true
    },
    Coursecode:{
        type: String,
        required: true,
        Unique: true,
    },
},
{timestamps: true}
);

module.exports = new mongoose.model("course",courseSchema)
