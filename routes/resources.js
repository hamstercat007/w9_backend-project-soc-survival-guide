var express = require("express");
const {
  getAllResources,
  getResourcesByCategory,
  postResource,
  deleteResource,
} = require("../models/resources");
var router = express.Router();

//query params passed in url  = req.query. ?category=figma
//if there is at least one param
router.get("/", async function (req, res, next) {
  let responseObject;
  if (Object.keys(req.query).length > 0) {
    const query = req.query;
    responseObject = await getResourcesByCategory(query);
  } else {
    responseObject = await getAllResources();
  }

  const result = {
    success: true,
    payload: responseObject,
  };

  res.json(result);
});

/* GET all by category */

router.post("/", async function (req, res, next) {
  const request = await req.body;
  const responseObject = await postResource(request);
  res.json(responseObject);
});

/* Delete by id   */

router.delete("/:id", async function (req, res, next) {
  const request = await req.params;
  const responseObject = await deleteResource(request);
  res.json(responseObject);
});

module.exports = router;
