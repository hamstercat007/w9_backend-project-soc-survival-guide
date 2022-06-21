/*

*/

var express = require('express');
const {getAllResources, getResourcesByCategory} = require('../models/resources');
var router = express.Router();

router.get('/', async function(req, res, next) {
  if (Object.keys(req.query).length > 0){
    const query = req.query
    console.log(query)
    const responseObject = await getResourcesByCategory(query) 
    res.json(responseObject);
  } 
  else {
    const responseObject = await getAllResources()
  res.json(responseObject);
  }
    
});


/* GET all by category */





module.exports = router;