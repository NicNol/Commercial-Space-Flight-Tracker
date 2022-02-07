"use strict";
const execute = require("../../util/mysql").execute;

exports.getAll = async function (req, res) {
    const tableName = req.params[0];
    const result = await execute(`SELECT * FROM ${tableName}`);
    res.json(result);
};
