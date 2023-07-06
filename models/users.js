const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    username:{
        type: String,
        unique: true
    },
    email:{
        type: String,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    profilePic:{
        type: String,
        default: "",
    },
    coverPic:{
        type: String,
        default: "",
    },
    city: String,
    website: String
});


module.exports = mongoose.model("User",userSchema);

