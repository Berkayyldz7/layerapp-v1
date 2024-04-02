const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "must provide a name"],
        trim: true,
        maxlength: [20, "name cannot length 20 characters"]

    }
    
}, {timestamps:true, versionKey:false})

module.exports = mongoose.model("User",UserSchema)