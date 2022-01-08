const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }
        }
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password') || value.toLowerCase().includes('123'))
            throw new Error ('password is invalid')
        }
    }
})


const User = mongoose.model('User', userSchema);
module.exports = User;