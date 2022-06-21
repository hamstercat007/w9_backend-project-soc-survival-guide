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
  const response = await pool.query("SELECT * FROM resources WHERE category = $1", [input])
  const result = 
  {
  success: true,
  payload: response.rows
  }
return result  
}




module.exports ={ getAllResources, getResourcesByCategory}