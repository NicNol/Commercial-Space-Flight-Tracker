"use strict";
const express = require("express");
const router = express.Router();
const commonController = require("../controllers/commonController");
const { deleteAll, getAll, putAll, postAll } = commonController;

router.get("/*", getAll);
router.post("/*", postAll);
router.put("/*", putAll);
router.delete("/*", deleteAll);

module.exports = router;
