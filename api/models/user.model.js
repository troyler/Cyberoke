import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{type: String, required: true, unique: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    profilePicture: {type: String, default:"https://static.vecteezy.com/system/resources/previews/024/766/959/non_2x/default-female-avatar-profile-icon-social-media-chatting-online-user-free-vector.jpg"},
}, {timestamps: true});


const User = mongoose.model('User', userSchema);

export default User;