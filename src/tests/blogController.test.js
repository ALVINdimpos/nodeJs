import request from 'supertest';
import app from '../app'; // assuming this is the main app file that uses the above modules
import {database } from "../config/config.js";
import mongoose from 'mongoose';
beforeAll(async () => {
    await mongoose.connect(database, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 60000
    });
});
afterAll(done => {
    mongoose.connection.close();
    done();
});
describe('Blog API', () => {
  let savedBlog;

  test('should create a new blog', async () => {
    const newBlog = {
      title: 'Test Blog',
      content: 'Lorem ipsum dolor sit amet',
      author: 'John Doe',
      image: 'https://fastly.picsum.photos/id/9/5000/3269.jpg'
    };

    const res = await request(app).post('/api/blog/create').send(newBlog);
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual(newBlog.title);
    expect(res.body.content).toEqual(newBlog.content);
    expect(res.body.author).toEqual(newBlog.author);
    expect(res.body.image).toEqual(newBlog.image);

    savedBlog = res.body; // save the created blog for later tests
  });

  test('should get all blogs', async () => {
    const res = await request(app).get('/api/blogs');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('should get a blog by ID', async () => {
    const res = await request(app).get(`/api/blog/${savedBlog._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual(savedBlog.title);
    expect(res.body.content).toEqual(savedBlog.content);
    expect(res.body.author).toEqual(savedBlog.author);
    expect(res.body.image).toEqual(savedBlog.image);
  });

  test('should update a blog', async () => {
    const updatedBlog = {
      title: 'Updated Blog',
      content: 'Dolor sit amet lorem ipsum',
      author: 'Jane Smith',
      image: 'https://example.com/new-image.png'
    };

    const res = await request(app)
      .put(`/api/blog/update/${savedBlog._id}`)
      .send(updatedBlog);
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual(updatedBlog.title);
    expect(res.body.content).toEqual(updatedBlog.content);
    expect(res.body.author).toEqual(updatedBlog.author);
    expect(res.body.image).toEqual(updatedBlog.image);

    savedBlog = res.body; // update the saved blog with the new data
  });
  test('should delete a blog', async () => {
    const res = await request(app).delete(`/api/blog/delete/${savedBlog._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual(savedBlog.title);
    expect(res.body.content).toEqual(savedBlog.content);
    expect(res.body.author).toEqual(savedBlog.author);
    expect(res.body.image).toEqual(savedBlog.image);

    const res2 = await request(app).get(`/api/blogs/${savedBlog._id}`);
    expect(res2.statusCode).toEqual(404);
  });
});
