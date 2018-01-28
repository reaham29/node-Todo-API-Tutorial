const expect = require ('expect');
const request = require ('supertest');

// var {ObjectID} = require ('mongodb');

const {mongoose} = require ('./../mongoose.js');
const {Todo} = require ('./../models/todo.js');
const {User} = require ('./../models/user.js');
const {app} = require ('./../server.js');

var id="5a65a4706d1ffa7815281a9d";

describe ('GET /todos Test', () => {
    it('Should return all User obj',(done) => {
        request(app)
            .get(`/todos`)
            .expect(200)
            .expect((res) => {
               expect(res.body.length).toBe(2);
             //   expect(res.body[0].Name).toBe('Reaham Badr');
            })
            .end(done);
    });
});

describe ('GET /todos/:id Test', () => {
    it('Should return User obj with passed id',(done) => {
        request(app)
            .get(`/todos/${id}`)
            .expect(200)
            .expect((res) => {
             //   expect(res.body).toBeNotNull();
                expect(res.body.Name).toBe('Reaham Badr');
            })
            .end(done);
    });
});

