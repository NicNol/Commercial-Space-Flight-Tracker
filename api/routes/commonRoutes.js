"use strict";
const express = require("express");
const router = express.Router();
const commonController = require("../controllers/commonController");
const { getAll } = commonController;

router.get("/*", getAll);

module.exports = router;
