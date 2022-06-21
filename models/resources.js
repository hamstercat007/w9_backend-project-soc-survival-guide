const pool = require('../db/index');
require('dotenv').config()

/* GET all RESOURCES */

async function getAllResources () {
    const response = await pool.query("SELECT * FROM resources")
    const result = 
    {
    success: true,
    payload: response.rows
    }
  return result  
}

async function getResourcesByCategory(input) {
  let request = input.category;
  request = request.charAt(0).toUpperCase() + request.slice(1)
  console.log(request)
  const response = await pool.query("SELECT * FROM resources WHERE category = $1", [request])
  const result = 
  {
  success: true,
  payload: response.rows
  }
return result  
}




module.exports ={ getAllResources, getResourcesByCategory}