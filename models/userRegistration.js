const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/Hackathonarena")
const user = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    psw:{
        type:String,
        required:true
    },
    dob:
    {
        type:String,
        required:true
    },
    city:
    {
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    pin:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("User",user)