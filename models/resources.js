const pool = require("../db/index");
require("dotenv").config();

/* GET all RESOURCES */

async function getAllResources() {
  const response = await pool.query("SELECT * FROM resources");
  return response.rows
}

/* GET RESOURCES Filtering by CATEGORY*/

async function getResourcesByCategory(category) {
  const response = await pool.query("SELECT * FROM resources WHERE lower(category) = lower($1)", [category])
  return response.rows
}

/* POST RESOURCE to DATABASE*/

async function postResource(input) {
  const queryString =
    "INSERT INTO resources (headline, description, url, category, format) VALUES ($1, $2, $3, $4, $5) RETURNING *; ";
  const queryParams = [
    input.headline,
    input.description,
    input.url,
    input.category,
    input.format,
  ];
  const response = await pool.query(queryString, queryParams); 
  return response.rows[0] 

}

/* DELETE RESOURCE by ID*/

async function deleteResource(input) {
  const id = Number(input.id);

  const response = await pool.query(
    "DELETE FROM resources WHERE id = $1 RETURNING * ;",
    [id]
  );
}

module.exports = {
  getAllResources,
  getResourcesByCategory,
  postResource,
  deleteResource,
};
