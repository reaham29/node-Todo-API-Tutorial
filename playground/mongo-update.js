//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log ('Connection Failed!!');
    };

    console.log ('Connection Succeeded..');

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID ("5a5f37fc0bfb742f6ca023bc")
    }, {
        $set : {name : 'Ronny'},
        $inc : {age : 1}
    }, {
        returnOriginal : false
    }).then((result) => {
        console.log (result);
    }, (err) => {
        console.log ('Error in Update');
    });


    // db.close();
});