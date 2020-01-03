const httpStatus = require("http-status");
const httpError = require("http-errors");

const { createCharacter } = require("../../../database/character");

module.exports = async (req, res) => {
  const character = await createCharacter(req.body);

  res.status(httpStatus.NO_CONTENT).end();
};
