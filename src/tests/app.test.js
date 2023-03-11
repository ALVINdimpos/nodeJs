const request = require('supertest');
const server = require('../app');

describe('GET /', () => {
  it('responds with status code 200', async () => {
    const response = await request(server).get('/api');
    expect(response.statusCode).toBe(200);
  });
});
