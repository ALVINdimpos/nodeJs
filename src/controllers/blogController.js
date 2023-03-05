const Blog = require("../models/Blog");
const Joi = require("joi");

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.send(blogs);
};

exports.getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).send("Blog not found");
  res.send(blog);
};

exports.createBlog = async (req, res) => {
  const { error } = validateBlog(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  });

  await blog.save();
  res.send(blog);
};

exports.updateBlog = async (req, res) => {
  const { error } = validateBlog(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    },
    { new: true }
  );

  if (!blog) return res.status(404).send("Blog not found");
  res.send(blog);
};

exports.deleteBlog = async (req, res) => {
  const blog = await Blog.findByIdAndRemove(req.params.id);
  if (!blog) return res.status(404).send("Blog not found");
  res.send(blog);
};

function validateBlog(blog) {
  const schema = Joi.object({
    title: Joi.string().min(5).max(255).required(),
    content: Joi.string().min(10).max(2000).required(),
    author: Joi.string().min(2).max(100).required(),
  });

  return schema.validate(blog);
}
