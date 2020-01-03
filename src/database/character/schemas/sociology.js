const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sociology = new Schema({
  birthday: {
    type: String,
    required: true
  },
  ethnic_group: {
    type: String,
    required: true
  },
  religion: {
    type: String,
    required: true
  },
  political_opinion: {
    type: String,
    required: true
  },
  groups_membership: {
    type: String,
    required: true
  },
  sexual_orientation: {
    type: String,
    required: true
  },
  family_life: {
    type: String,
    required: true
  },
  criminal_record: {
    type: String,
    required: true
  },
  occupations: {
    type: String,
    required: true
  },
  hobbies: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  cv: {
    type: String,
    required: true
  },
  social_status: {
    type: String,
    required: true
  },
  biography: {
    type: String,
    required: true
  }
});

module.exports = sociology;
