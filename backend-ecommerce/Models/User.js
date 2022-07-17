const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
const insertUser =()=>{
    const newUser = new User();
        newUser.username = "Madan";
        newUser.email = "madan@gmail.com";
        newUser.password="111",
        newUser.role=1
        newUser.save();
}
// insertUser();
module.exports = User;
