const express = require("express");
const cors = require("cors");

const api = require("../api");
const handleError = require("../middlewares/handleError");

module.exports = app => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(api);
  app.use(handleError);
};
