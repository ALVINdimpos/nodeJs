const app = require('../app');
const request = require('supertest');

describe('Test the blog API', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(3000, () => {
      console.log('Server started on port 3000');
      done();
    });
  });

  afterAll((done) => {
    server.close(() => {
      console.log('Server closed');
      done();
    });
  });

  it('should return a 200 status code', async () => {
    const response = await request(app).get('/blog');
    expect(response.statusCode).toBe(200);
  });
});
