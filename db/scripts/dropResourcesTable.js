const pool = require("../index.js")

let queryString = "DROP TABLE IF EXISTS resources;"

async function dropTable() {
    const response = await pool.query(queryString);
    console.log(response.command)
}

dropTable();
