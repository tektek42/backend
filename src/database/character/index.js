const httpStatus = require("http-status");
const httpError = require("http-errors");

const { CharacterModel } = require("..");

async function createCharacter(character) {
  if (
    await CharacterModel.findOne({
      creator_name: character.creator_name,
      name: character.name
    })
  ) {
    throw httpError(
      httpStatus.CONFLICT,
      "Cannot create 2 characters with the same name"
    );
  }

  const newCharacter = new CharacterModel(character);

  return newCharacter.save();
}

async function getCharacters(filters) {
  const character = await CharacterModel.find(filters);
  return character;
}

async function getOneCharacter(filters) {
  const character = await CharacterModel.findOne(filters);
  return character;
}

function updateCharacter(character_id, updates) {
  return CharacterModel.updateOne({ _id: character_id }, updates);
}

function deleteCharacter(character_id, updates) {
   return CharacterModel.deleteOne({ _id: character_id });
 }

module.exports = {
  createCharacter,
  getCharacters,
  getOneCharacter,
  updateCharacter,
  deleteCharacter
};
