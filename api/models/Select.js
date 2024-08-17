// models/Select.js
const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  id: Number,
  value: String,
  isVisible: Boolean,
  hasChosen: Boolean,
});

const mediaSchema = new mongoose.Schema({
  isActive: Boolean,
  isVideoActive: Boolean,
  isImageActive: Boolean,
  file: String,
  videoLink: String,
});

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  description: {
    text: String,
    isActive: Boolean,
  },
  options: [optionSchema],
  media: mediaSchema,
  questionNumberShown: Boolean,
  isRequired: Boolean,
  isVertical: Boolean,
  priority: Number,
  multipleAnswer: Boolean,
});

module.exports = mongoose.model('Question', questionSchema);
