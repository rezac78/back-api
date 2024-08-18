const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  folder: { type: mongoose.Schema.Types.ObjectId, ref: 'Folder', required: true },
  name: { type: String, required: true }
});

module.exports = mongoose.model('Survey', surveySchema);
