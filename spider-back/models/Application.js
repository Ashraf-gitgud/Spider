const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  imageUrl: String,
  releaseDate: Date,
  category: String,
});

module.exports = mongoose.model('Application', ApplicationSchema);
