import express from "express";
const router = express.Router();
import { createComment, getComments, deleteComment } from "../controllers/commentController.js";


// POST /blog/:blogId/comments
router.post("/blog/create/:blogId/comments",createComment);

// GET /blogs/:blogId/comments
router.get("/blog/:blogId/comments", getComments);

// DELETE /blogs/:blogId/comments/:commentId
router.delete("/blog/:blogId/comments/:commentId", deleteComment);

export default router;
