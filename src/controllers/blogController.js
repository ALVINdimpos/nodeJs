const Blog = require('../models/Blog');

// Create a new blog post
exports.createBlog = async function(req, res) {
  const { title, content, author,date } = req.body;
  try {
    const blog = await Blog.create({
      title,
      content,
      author,
      date
    });
    res.status(201).json(blog);
  } catch (err) {
    console.error(err);
    if (err.name === 'ValidationError') {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).json({ error: 'Server error' });
  }
}
// Get all blog posts
exports.getAllBlogs = async function(req, res) {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}

// Get a blog post by ID
exports.getBlogById = async function(req, res) {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}

// Update a blog post by ID
exports.updateBlogId = async function(req, res) {
  const { id } = req.params;
  const { title, content, author } = req.body;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.author = author || blog.author;
    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}

// Delete a blog post by ID
exports.deleteBlogId = async function(req, res) {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}
