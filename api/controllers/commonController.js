"use strict";
const execute = require("../../util/mysql").execute;
//const tableConstraints = require("../../../util/tableConstraints.json");

exports.getAll = async function (req, res) {
    const tableName = req.params[0];
    try {
        const result = await execute(`SELECT * FROM ${tableName}`);
        res.json(result);
    } catch (err) {
        res.status(404).json({ Error: err });
    }
};

exports.postAll = async function (req, res) {
    try {
        const tableName = req.params[0];
        const columns = Object.keys(req.body);

        // Create a string of Column Names
        const columnNames = columns.reduce(
            (previousValue, currentValue) => `${previousValue}, ${currentValue}`
        );

        // Create a string of Values
        const values = Object.values(req.body).map((val) => `"${val}"`);
        const requestValues = values.reduce(
            (previousValue, currentValue) => `${previousValue}, ${currentValue}`
        );

        // Execute SQL Query
        const result = await execute(
            `INSERT INTO ${tableName} (${columnNames}) VALUES (${requestValues})`
        );

        // Return to page user submitted from
        res.redirect("back");
    } catch (err) {
        res.status(404).json({ Error: err });
    }
};

exports.putAll = async function (req, res) {
    try {
        const tableName = req.params[0];
        const columns = Object.keys(req.body);

        let setQuery = "";
        let whereQuery = "";

        columns.forEach((column, index) => {
            if (index === 0) {
                whereQuery = `${column} = ${req.body[column]}`;
            } else if (setQuery === "") {
                setQuery = `${column} = ${req.body[column]}`;
            } else {
                setQuery += `, ${column} = ${req.body[column]}`;
            }
        });

        // Execute SQL Query
        const result = await execute(
            `UPDATE ${tableName} SET ${setQuery} WHERE ${whereQuery}`
        );

        res.redirect("back");
    } catch (err) {
        res.status(404).json({ Error: err });
    }
};

exports.deleteAll = async function (req, res) {
    const tableName = req.params[0];
    const EntityIDAttribute = Object.keys(req.body)[0];
    const EntityID = Object.values(req.body)[0];
    try {
        const result = await execute(
            `DELETE FROM ${tableName} WHERE ${EntityIDAttribute} = ${EntityID}`
        );
        res.json(result);
    } catch (err) {
        res.status(404).json({ Error: err });
    }
};
