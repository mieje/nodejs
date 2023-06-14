import mongoose  from 'mongoose';

const userSchema = new mongoose.Schema({
    id:{
        type: String,
        unique
    },
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

