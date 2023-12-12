// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Import models
const Post = require('../models/post');
const Comment = require('../models/comment');

// Create comment
router.post('/', (req, res, next) => {
  // Create comment object
  const comment = new Comment({
    _id: new mongoose.Types.ObjectId(),
    content: req.body.content,
  });
});
