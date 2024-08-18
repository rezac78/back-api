const mongoose = require('mongoose');

const welcomeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  survey: { type: mongoose.Schema.Types.ObjectId, ref: 'Survey', required: true },
});

module.exports = mongoose.model('Welcome', welcomeSchema);
