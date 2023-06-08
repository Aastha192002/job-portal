import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, "Password length should be greater than 6 character"],
        select: true
    },
    location: {
        type: String,
        default: "Delhi"
    }
},
    { timestamps: true }
)

export default mongoose.model('Users', userSchema)