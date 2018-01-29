var express = require ('express');
var bodyparser = require ('body-parser');
var {ObjectID} = require ('mongodb');

var {mongoose} = require ('./mongoose.js');
var {Todo} = require ('./models/todo.js');
var {User} = require ('./models/user.js');

var app = express();
const port = process.env.PORT || 3000;

app.use (bodyparser.json());

app.post ('/todos', (req, res) => {
    // var newTodo = new Todo ({
    //     TDName : req.body.TDName
    // });
    
    // newTodo.save().then((doc) => {
    //     res.send (doc);
    // }, (err) => {
    //     res.status(400).send(err);
    // }); 

    var newUser = new User ({
        Name : "req.body.Name",
        Email : "req.body.Email"
    });

  //  res.send(req.body.Name, req.body.Email);
    
    newUser.save().then((doc) => {
        res.send (doc);
    }, (err) => {
        res.status(400).send(err);
    }); 
});

app.get ('/todos', (req, res) => { 
    User.find().then((doc) => {
        if (!doc) {
            return res.status(404).send ('Users not found');
        };
        res.send(doc);
    }).catch((err) => {
        res.status(400).send ('System error', err);
    });
});

app.get ('/todos/:id', (req, res) => { 
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(404).send ('Invalid User ID');
    };

    User.findById(req.params.id).then((doc) => {
        if (!doc) {
            return res.status(404).send ('User not found');
        };
        res.send(doc);
    }).catch((err) => {
        res.status(400).send ('System error', err);
    });
});

app.listen (port, () => {
    console.log (`Port up at ${port}`);
});

module.exports = {app};



