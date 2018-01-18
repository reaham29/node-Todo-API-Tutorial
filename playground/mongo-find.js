//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log ('Connection Failed!!');
    };

    console.log ('Connection Succeeded..');

    // db.collection('Users').find({_id : 123}).toArray().then ((docs) => {
    //     console.log('User with id 123 is');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log ('Error find ID');
    // });

    db.collection('Users').find().toArray().then ((docs) => {
        console.log('Users:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log ('Error find ID');
    });


    // db.close();
});