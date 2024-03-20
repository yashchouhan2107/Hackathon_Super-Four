const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/Hackathonarena")
const feedback = mongoose.Schema({
    feed:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Feedback",feedback)