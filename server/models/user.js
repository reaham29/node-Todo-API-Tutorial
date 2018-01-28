var mongoose = require ('mongoose');

var User = mongoose.model('User', {
    Name : {
        type : String,
        required : true,
        minlength : 1,
        trim : true
    },
    Email : {
        type : String,
        required : true,
        minlength : 1,
        trim : true
    }
});

module.exports = {User};