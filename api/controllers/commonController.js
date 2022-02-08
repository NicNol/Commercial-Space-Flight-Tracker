"use strict";
const execute = require("../../util/mysql").execute;

exports.getAll = async function (req, res) {
    const tableName = req.params[0];
    try {
        const result = await execute(`SELECT * FROM ${tableName}`);
        res.json(result);
    } catch (err) {
        res.status(404).json({ Error: err });
    }
};
