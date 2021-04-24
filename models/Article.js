// models/Article.js

const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String
  },
  journal: {
      type: String
  },
  publisher: {
    type: String
  },
  year: {
      type: String
  },
  month: {
    type: String
  },
  volumes: {
      type: String
  },
  pages: {
      type: String
  },
  eprint: {
      type: String
  },
  eprinttype: {
      type: String
  },
  eprintclass: {
      type: String
  },
  annote: {
      type: String
  },
  sepractice: {
    type: String
  },
  claim: {
    type: String
  },
  strength: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);