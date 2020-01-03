const httpStatus = require("http-status");
const httpError = require("http-errors");

const { getCharacters } = require("../../../database/character");

module.exports = async (req, res) => {
  const characters = await getCharacters(req.query);

  res.status(httpStatus.OK).send(characters);
};
