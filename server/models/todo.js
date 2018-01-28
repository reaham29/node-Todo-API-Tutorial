var mongoose = require ('mongoose');

var Todo = mongoose.model('TodoMongoose', {
    TDName : {
        type : String,
        required : true,
        minlength : 1
    },
    Completed : {
        type : Boolean,
        default : false
    },
    CompletedAt : {
        type : Number,
        default : null
    }
});

module.exports = {Todo};