const pool = require("../db/index");
require("dotenv").config();

/* GET all RESOURCES */

async function getAllResources() {
  const response = await pool.query("SELECT * FROM resources");
  const result = {
    success: true,
    payload: response.rows,
  };
  return result;
}

//Single responsiblity. Load data from database and return it.
//Everything that has to do with the db should be done in the models
//write only the code you need, pass to the function the string you're looking.
// best to always have lower case in the db and upcase it if u need it.
// lower case each of the  db field and argument and
// async function getResourcesByCategory(category) {
//   const response = await pool.query("SELECT * FROM resources WHERE lower(category) = lower($1)", [category])
//   return response.rows
// }

//
async function getResourcesByCategory(input) {
  let request = input.category;
  request = request.charAt(0).toUpperCase() + request.slice(1);
  console.log(request);
  const response = await pool.query(
    "SELECT * FROM resources WHERE category = $1",
    [request]
  );
  const result = {
    success: true,
    payload: response.rows,
  };
  return result;
}

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
  const result = {
    success: true,
    payload: response.rows,
  };
  return result;
}

async function deleteResource(input) {
  const id = Number(input.id);

  const response = await pool.query(
    "DELETE FROM resources WHERE id = $1 RETURNING * ;",
    [id]
  );
  const result = {
    success: true,
    payload: response.rows,
  };
  return result;
}

module.exports = {
  getAllResources,
  getResourcesByCategory,
  postResource,
  deleteResource,
};
