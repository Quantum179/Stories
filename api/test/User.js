import mongoose from 'mongoose'
//model user

import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../app'
let should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
    beforeEach((done) => {
        Users.remove({}, (err) => {
           done();
        });
    });
  describe('GET /users', () => {
      it('it should GET all the users', (done) => {
        chai.request(app)
            .get('/users')
            .end((err, res) => {
                res.status.should.eql(200);
                res.users.should.be.a('array');
                res.users.length.should.eql(0);
              done();
            });
      });
  });
  /*
  * Test the /POST route
  */
  describe('POST /users', () => {
      it('it should not POST a user without a name', (done) => {
        let user =  {
            name: {},
            username: "Quantum",
            role: "Admin",
            email: "testmail@gmail.com",
            password: "testpass"
          }

        chai.request(app)
            .post('/users')
            .send(user)
            .end((err, res) => {
                res.status.should.eql(500);
                res.message.should.eql('Server Error');
              done();
            });
      });
      it('it should POST a user ', (done) => {
        let user =  {
            name: {first: "Quantum", last: "Universe"},
            username: "Quantum",
            role: "Admin",
            email: "testmail@gmail.com",
            password: "testpass"
          }

        chai.request(app)
            .post('/users')
            .send(user)
            .end((err, res) => {
                res.status.should.eql(201)
                res.user.should.be.a('object')
                res.message.eql('User successfully added!')
                res.user.should.have.property('name');
                res.user.should.have.property('username');
                res.user.should.have.property('role');
                res.user.should.have.property('email');
              done();
            });
      });
  });
});
