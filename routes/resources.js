/*

*/

var express = require('express');
const resources = require('../models/resources');
var router = express.Router();

/* GET resources listing. */
router.get('/', async function(req, res, next) {
    const responseObject = await resources()
  res.json(responseObject);
});

module.exports = router;