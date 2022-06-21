const pool = require('../db/index');
require('dotenv').config()

/* GET all RESOURCES */

async function resources () {
    const response = await pool.query("SELECT * FROM resources")
    const result = 
    {
    success: true,
    payload: response.rows
    }
  return result  
}

module.exports = resources