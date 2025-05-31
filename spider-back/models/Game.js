const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  imageUrl: String,
  releaseDate: Date,
  platform: [String],
});

module.exports = mongoose.model('Game', GameSchema);
