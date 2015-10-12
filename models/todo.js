'use strict';

var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  dueDate: { type: Date },
  isComplete: { type: Boolean, default: false }
});

module.exports = mongoose.model('Todo', todoSchema);
