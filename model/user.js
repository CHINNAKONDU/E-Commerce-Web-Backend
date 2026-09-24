import mongoose from 'mongoose';

const registerSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    phonenumber: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }

}, { timestamps: true });

const user = mongoose.model('user_own', registerSchema);

export default user;