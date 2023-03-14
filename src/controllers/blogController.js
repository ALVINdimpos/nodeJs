import Blog from "../models/Blog.js";
import Joi from "joi";

export const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.send(blogs);
};

export const getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).send("Blog not found");
  res.send(blog);
};

export const createBlog = async (req, res) => {
  const { error } = validateBlog(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    image: req.body.image,
  });

  await blog.save();
  res.send(blog);
};

export const updateBlog = async (req, res) => {
  const { error } = validateBlog(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      image: req.body.image,
    },
    { new: true }
  );

  if (!blog) return res.status(404).send("Blog not found");
  res.send(blog);
};

export const deleteBlog = async (req, res) => {
  const blog = await Blog.findByIdAndRemove(req.params.id);
  if (!blog) return res.status(404).send("Blog not found");
  res.send(blog);
};

function validateBlog(blog) {
  const schema = Joi.object({
    title: Joi.string().min(5).max(255).required(),
    content: Joi.string().min(10).max(2000).required(),
    author: Joi.string().min(2).max(100).required(),
    image: Joi.string().min(2).max(2000).required(),
  });

  return schema.validate(blog);
}
