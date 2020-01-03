const mongoose = require("mongoose");

const physiognomy = require("./physiognomy");
const sociology = require("./sociology");
const psychology = require("./psychology");

const Schema = mongoose.Schema;

const character = new Schema({
  creator_name: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    required: true
  },
  physiognomy,
  sociology,
  psychology,
  additional_notes: {
    type: String,
    required: false
  }
});

module.exports = character;
