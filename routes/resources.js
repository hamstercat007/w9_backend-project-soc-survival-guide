var express = require('express');
const {getAllResources, getResourcesByCategory, postResource, deleteResource} = require('../models/resources');
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

router.post('/', async function (req,res, next){
    const request = await req.body
    const responseObject = await postResource(request)
    res.json(responseObject)
});


/* Delete by id   */

router.delete('/:id', async function (req,res, next){
  const request = await req.params
  const responseObject = await deleteResource(request)
  res.json(responseObject)
});






module.exports = router;