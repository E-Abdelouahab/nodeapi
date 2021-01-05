const mongoose = require('mongoose');


const Schema = mongoose.Schema;

// Create Schema model

const UserSchema = new Schema({
    name : {
        type:String,
        required:[true,"Name filed is requires"]
    },
    rank : {
        type:String
    },
    available : {
        type:Boolean,
        default: false,
    },

    // Geo location 
    //age
});

const User = mongoose.model("User", UserSchema);

module.exports = User;