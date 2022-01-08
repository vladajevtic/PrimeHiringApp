const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');

const developersShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: false
    },
    pricePerHour:{
        type: Decimal128,
        required: true
    },
    technology:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    yearsOfExperience: {
        type: String,
        required: true
    },
    nativeLanguage: {
        type: String,
        required: true
    },
    LinkedInProfileLink: {
        type: String,
        required: false
    },
    hired:{
        type: Boolean,
        default: false
    },
  
});

const Developer = mongoose.model('Developer', developersShema)

module.exports = Developer;