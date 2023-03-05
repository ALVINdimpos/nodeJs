const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// POST /blogs/:blogId/comments
router.post("/:blogId/comments", commentController.createComment);

// GET /blogs/:blogId/comments
router.get("/:blogId/comments", commentController.getComments);

// DELETE /blogs/:blogId/comments/:commentId
router.delete("/:blogId/comments/:commentId", commentController.deleteComment);

module.exports = router;
