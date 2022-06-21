/*

*/

var express = require('express');
const {getAllResources, getResourcesByCategory} = require('../models/resources');
var router = express.Router();

/* GET resources listing. */
router.get('/', async function(req, res, next) {
    const responseObject = await getAllResources()
  res.json(responseObject);
});

/* GET all by category */

router.get('/', async function(req, res, next) {
  const query = req.query
  const responseObject = await getResourcesByCategory(query) 
res.json(responseObject);
});




module.exports = router;