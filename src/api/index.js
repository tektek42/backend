const express = require('express');

const character = require("./character");

const router = express.Router();

router.use('/api/character', character);

module.exports = router;