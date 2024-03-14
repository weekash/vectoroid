const mongoose = require('mongoose');

const webPageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique: true,
  },
  content:{
    type: String,
    required: true
  },
  embeddings: {
    type: [Number],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const WebPage = mongoose.model('WebPage', webPageSchema);

module.exports = WebPage;
