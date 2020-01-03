const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const psychology = new Schema({
  fears: {
    type: String,
    required: true
  },
  superstitions: {
    type: String,
    required: true
  },
  secrets: {
    type: String,
    required: true
  },
  temperament: {
    type: String,
    required: true
  },
  personality_disorders: {
    type: String,
    required: true
  },
  inhibitions: {
    type: String,
    required: true
  },
  complex: {
    type: String,
    required: true
  },
  personal_issues: {
    type: String,
    required: true
  },
  intelligence_type: {
    type: String,
    required: true
  },
  imagination: {
    type: String,
    required: true
  },
  habits: {
    type: String,
    required: true
  },
  morals: {
    type: String,
    required: true
  },
  values: {
    type: String,
    required: true
  },
  ambitions: {
    type: String,
    required: true
  },
  addictions: {
    type: String,
    required: true
  },
  injury: {
    type: String,
    required: true
  }
});

module.exports = psychology;
