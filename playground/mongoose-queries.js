const {ObjectID} = require ('mongodb');
const {Todo} = require ('./../server/models/todo.js');
const {mongoose} = require ('./../server/mongoose.js');
const {User} = require ('./../server/models/user.js');

var id = '5a65a4706d1ffa7815281a9d';

// if (!ObjectID.isValid(id)) {
//     console.log ('Invalid ID');
// } else {
//     Todo.findById(id).then((doc) => {
//         if (!doc) {
//             console.log('User not found');
//         } else {
//             console.log(doc);
//         };
//     }).catch((err) => {
//         console.log ('System error', err);
//     });
// };

if (!ObjectID.isValid(id)) {
    console.log ('Invalid User ID');
} else {
    User.findById(id).then((doc) => {
        if (!doc) {
            console.log('User not found');
        } else {
            console.log(doc);
        };
    }).catch((err) => {
        console.log ('System error', err);
    });
};


