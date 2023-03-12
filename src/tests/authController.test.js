const request = require('supertest');
const app = require('../app'); // assuming your Express app is defined in app.js
const User = require('../models/User');

describe('POST /api/login', () => {
  test('should return a JWT token when valid email and password are provided', async () => {
    const email = 'test@example.com';
    const password = 'password123';
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();

    const response = await request(app)
      .post('/api/login')
      .send({ email, password })
      .expect(200);

    expect(response.body.token).toBeDefined();
    // you may also want to check if the token is a valid JWT token using a library like jsonwebtoken
  });

  test('should return a 401 error when invalid email or password are provided', async () => {
    const email = 'test@example.com';
    const password = 'password123';
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();

    const response = await request(app)
      .post('/api/login')
      .send({ email: 'invalid@example.com', password })
      .expect(401);

    expect(response.body.message).toBe('Invalid email or password');
  });
});
