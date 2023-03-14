import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
title: {
type: String,
required: true,
minlength: 5,
maxlength: 255,
},
content: {
type: String,
required: true,
minlength: 10,
maxlength: 2000,
},
author: {
type: String,
required: true,
minlength: 2,
maxlength: 100,
},
image: {
type: String,
required: true,
minlength: 2,
maxlength: 400,
},
createdAt: {
type: Date,
default: Date.now,
},
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;