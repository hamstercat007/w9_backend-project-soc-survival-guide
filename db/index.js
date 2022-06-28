require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.connectionString,
  ssl: { rejectUnauthorized: false },
});

// console.log(pool.query("SELECT NOW()"));
module.exports = pool;
