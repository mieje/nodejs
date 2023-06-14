import mongoose  from 'mongoose';

const userSchema = new mongoose.Schema({
    id:{
        type: Int16Array,
        unique
    },
    desc: String,
    img: String,
    userId: Int16Array,
    createdAt: String
});


module.exports = mongoose.model("Post",postSchema);

