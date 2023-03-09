const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.get("/blogs", blogController.getAllBlogs);
router.get("/blog/:id", blogController.getBlogById);
router.post("/blog/create", blogController.createBlog);
router.put("/blog/update/:id", blogController.updateBlog);
router.delete("/blog/delete/:id", blogController.deleteBlog);

module.exports = router;
