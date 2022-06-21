const pool = require("../index.js");
const resourcesData = require("../../lib/resourcesData");

const queryString = "INSERT INTO resources (headline, description, url, category, format) VALUES ($1, $2, $3, $4, $5) RETURNING *; "

async function populateResourcesTable() {
    for(let i=0; i < resourcesData.length; i++) {
        const queryParams = [resourcesData[i].headline, resourcesData[i].description, resourcesData[i].url, resourcesData[i].category,resourcesData[i].format];
        let response = await pool.query(queryString, queryParams)
        console.log(response.command)
    }
}

populateResourcesTable();