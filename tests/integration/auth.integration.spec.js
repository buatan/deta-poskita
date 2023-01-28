const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../..');

chai.use(chaiHttp);
chai.should();

describe('Auth Integration', function () {
  describe('GET /api/auth/local', function () {
    it('should cover success and returns jwt access token and user\'s info',  function (done) {
      const body = {
        identifier: 'johndoe123',
        password: 'TopSecretPassw0|)'
      }
      chai.request(app).post('/api/auth/local').send(body).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('user');
        res.body.should.have.property('accessToken');
        done();
      });
    });
  });

  describe('GET /api/auth/local/register', function () {
    it('should cover success and returns jwt access token and user\'s info',  function (done) {
      const body = {
        name: 'John Doe',
        username: 'johndoe123',
        email: 'johndoe@example.com',
        password: 'TopSecretPassw0|)'
      };
      chai.request(app).post('/api/auth/local/register').send(body).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('user');
        res.body.should.have.property('accessToken');
        done();
      });
    });
  });
});