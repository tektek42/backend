const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const physiognomy = new Schema({
   gender: {
      type: String,
      enum: ["homme", "femme"],
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    weight: {
      type: Number,
      required: true
    },
    hair: {
      type: String,
      required: true
    },
    eyes: {
      type: String,
      required: true
    },
    voice: {
      type: String,
      required: true
    },
    charisma: {
      type: String,
      required: true
    },
    appearance: {
      type: String,
      required: true
    },
    bands: {
      type: String,
      required: true
    },
    clothing: {
      type: String,
      required: true
    },
    strength: {
      type: String,
      required: true
    },
    agility: {
      type: String,
      required: true
    },
    endurance: {
      type: String,
      required: true
    },
    health: {
      type: String,
      required: true
    }
});

module.exports = physiognomy;