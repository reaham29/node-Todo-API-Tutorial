const MongoClient = require ('mongodb').MongoClient;

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log ('Connection Failed!!');
    };

    console.log ('Connection Succeeded..');

    // db.collection('ToDos').insertOne({
    //     text : 'Some Text',
    //     Completed : false
    // }, (err, results) => {
    //     if (err) {
    //         return console.log ('Error in Insert ToDo');
    //     };

    //     console.log (JSON.stringify(results.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name : 'Reaham',
        age : 30,
        location : 'Cairo'
    }, (err, results) => {
        if (err) {
            console.log ('Error in Insert Users');
        };

        console.log (JSON.stringify(results.ops, undefined, 2));
    });

    db.close();
});