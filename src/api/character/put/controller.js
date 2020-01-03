const httpStatus = require('http-status');

const { updateCharacter } = require('../../../database/character');

module.exports = async (req, res) => {
  await updateCharacter(req.query.character_id, req.body);
  res.status(httpStatus.ACCEPTED).end();
}
