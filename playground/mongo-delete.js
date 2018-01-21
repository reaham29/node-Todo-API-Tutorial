//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log ('Connection Failed!!');
    };

    console.log ('Connection Succeeded..');

    db.collection('Users').deleteMany({name : 'Reaham'}).then((result) => {
        console.log (result);
    }, (err) => {
        console.log ('Error in deleteMany');
    });

   var obj = new ObjectID ('5a5f36fccd502415b0197263');
    
    db.collection('Users').findOneAndDelete({_id : obj}).then((result) => {
        console.log (result);
    }, (err) => {
        console.log ('Error in deleteMany');
    });


    // db.close();
});