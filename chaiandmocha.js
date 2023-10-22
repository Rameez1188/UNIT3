const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); 
const expect = chai.expect;

chai.use(chaiHttp);

describe('Players API', () => {
  describe('/POST players', () => {
    it('it should POST a player', (done) => {
      const player = {
        Name: 'John Doe',
        jerseyNumber: 10,
        team: 'Team A',
        nationality: 'US',
        position: 'Forward'
      };
      chai.request(app)
        .post('/players')
        .send(player)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.a('string');
          done();
        });
    });
  });
  describe('/GET players', () => {
    it('it should GET all the players', (done) => {
      chai.request(app)
        .get('/players')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });

});
