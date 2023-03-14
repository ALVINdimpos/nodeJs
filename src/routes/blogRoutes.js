import express from "express";
const router = express.Router();
import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from "../controllers/blogController.js";


router.get("/blogs", getAllBlogs);
router.get("/blog/:id", getBlogById);
router.post("/blog/create", createBlog);
router.put("/blog/update/:id", updateBlog);
router.delete("/blog/delete/:id", deleteBlog);

export default router;

