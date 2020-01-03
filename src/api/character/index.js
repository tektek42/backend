const express = require("express");

const wrapper = require("../../utils/wrapper");

const post = require("./post/controller");
const get = require("./get/controller");
const put = require("./put/controller");
const remove = require("./remove/controller");

const router = express.Router();

router.post("/", wrapper(post));

router.get("/", wrapper(get));

router.put("/", wrapper(put));

router.delete("/", wrapper(remove));

module.exports = router;
