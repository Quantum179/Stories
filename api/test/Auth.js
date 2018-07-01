/* import mongoose from 'mongoose'
//model user

import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../app'
let should = chai.should();

chai.use(chaiHttp);

describe('Auth', () => {
    beforeEach((done) => {
        Users.remove({}, (err) => {
           done();
        });
    });
  describe('POST /auth/login', () => {
      it('it should connected a validated user', (done) => {
        let user =  {
            email: "testmail@gmail.com",
            password: "testpass"
          }
        chai.request(app)
            .post('/auth/login')
            .end((err, res) => {
                res.status.should.eql(200);
                res.user.should.have.property('token');
                res.user.should.have.property('user');
                res.users.should.be.a('array');
                res.users.length.should.eql(0);
              done();
            });
      });
  });
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
                res.message.should.eql('Server Error'); //TODO : replace to resources constants
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
 */