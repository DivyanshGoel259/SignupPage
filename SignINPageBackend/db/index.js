const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://mahekb099:mahekb099@hacklockfirstdatabase.7p10krz.mongodb.net/SigninDB")

const UserSchema = mongoose.Schema({
    FirstName : String,
    LastName : String,
    password : String,
    email : String
}) 

const User = mongoose.model("User",UserSchema)

module.exports = User