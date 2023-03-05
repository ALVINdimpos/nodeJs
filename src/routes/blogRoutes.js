const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/blogs', blogController.getAllBlogs);
router.get('/blog/:id', blogController.getBlogById);
router.post('/blogCreate', blogController.createBlog);
router.put('/updateBlog/:id', blogController.updateBlog);
router.delete('/deleteBlog/:id', blogController.deleteBlog);

module.exports = router;
