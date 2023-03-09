"use strict";

var express = require("express");
var router = express.Router();
var commentController = require("../controllers/commentController");

// POST /blog/:blogId/comments
router.post("/blog/create/:blogId/comments", commentController.createComment);

// GET /blogs/:blogId/comments
router.get("/blog/:blogId/comments", commentController.getComments);

// DELETE /blogs/:blogId/comments/:commentId
router["delete"]("/blog/:blogId/comments/:commentId", commentController.deleteComment);
module.exports = router;