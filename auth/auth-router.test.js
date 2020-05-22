const request = require('supertest');
const server = require('../api/server');

const db = require('../database/dbConfig');

describe('server', () => {
  describe('get /api/jokes', () => {
    it('fails', () => {
      return request(server)
        .get('/')
        .then((res) => {
          expect(res.status).toBe(404);
        });
    });
  });

  describe('post /login', () => {
    it('sends back 200 on log in', async () => {
      await request(server)
        .post('/api/auth/login')
        .send({ username: 'user', password: 'test' })
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    it('sends back a token', async () => {
      await request(server)
        .post('/api/auth/login')
        .send({ username: 'user', password: 'test' })
        .then((res) => {
          expect(res.body.payload).toBeTruthy();
        });
    });
  });
});
