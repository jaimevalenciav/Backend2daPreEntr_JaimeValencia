const mongoose = require('mongoose')

const userCollection = "users"

const userSchema = new mongoose.Schema({
    nombre : {type: String, required: true, max: 200},
    email: {type: String, required: true, max: 100}
})

const userModel = mongoose.model(userCollection, userSchema);
module.exports = {userModel}