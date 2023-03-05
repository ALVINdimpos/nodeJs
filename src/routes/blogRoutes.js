const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const blogController = require('../controllers/blogController');

// GET /api/blogs - Get all blogs
router.get('/blogs', blogController.getAllBlogs);

// POST /api/blogs - Create a new blog
router.post('/blogs', [
    body('title').notEmpty().withMessage('Title is required'),
    body('content').notEmpty().withMessage('Content is required'),
    body('author').notEmpty().withMessage('Author is required'),
  ], async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { title, content, author,date } = req.body; // extract the required properties
      const newBlog = await blogController.createBlog({ title, content, author,date }); // pass the properties to createBlog
      return res.status(201).json(newBlog);
    } catch (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
  });
  
// GET /api/blogs/:id - Get a blog by ID
router.get('/blogs/:id', blogController.getBlogById);

// PUT /api/blogs/:id - Update a blog by ID
router.put('/blogs/:id', blogController.updateBlogId);

// DELETE /api/blogs/:id - Delete a blog by ID
router.delete('/blogs/:id', blogController.deleteBlogId);

module.exports = router;
