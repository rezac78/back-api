const mongoose = require('mongoose');

const appreciationSchema = new mongoose.Schema({
  description: { type: String, required: true },
  survey: { type: mongoose.Schema.Types.ObjectId, ref: 'Survey', required: true },
});

module.exports = mongoose.model('Appreciation', appreciationSchema);
