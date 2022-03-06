"use strict";
const express = require("express");
const router = express.Router();
const commonController = require("../controllers/commonController");
const { deleteAll, getAll, putAll, postAll, getSearchResults } =
    commonController;

router.get("/search", getSearchResults);
router.get("/*", getAll);
router.post("/*", postAll);
router.put("/*", putAll);
router.delete("/*", deleteAll);

module.exports = router;
