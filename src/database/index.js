const db = require("../services/mongodb");

const character = require("./character/schemas");

const conn = db.getConnect();

module.exports = {
  CharacterModel: conn.model("Character", character)
};
