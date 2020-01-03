const httpStatus = require('http-status');
const httpError = require('http-errors');

const { deleteCharacter } = require('../../../database/character');

module.exports = async (req, res) => {
  await deleteCharacter(req.body);

  res.status(httpStatus.NO_CONTENT).end();
}
