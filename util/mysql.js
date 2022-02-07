const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

const execute = (sqlQuery) => {
    return new Promise((resolve, reject) => {
        pool.query(sqlQuery, (error, results, fields) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
};

module.exports = { execute };
