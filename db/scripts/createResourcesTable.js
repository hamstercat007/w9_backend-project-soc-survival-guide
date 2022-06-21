const pool = require("../index.js")


async function createResourcesTable() {
    const queryString = "CREATE TABLE IF NOT EXISTS resources (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, headline TEXT, description TEXT, url VARCHAR(2083), category TEXT, format TEXT);"

    const response = await pool.query(queryString);
    console.log(response.command);
}

createResourcesTable();