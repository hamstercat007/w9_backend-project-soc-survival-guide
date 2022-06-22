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
  if (req.query.category != undefined) {
    responseObject = await getResourcesByCategory(req.query.category);
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
  const result = {
    success: true,
    payload: responseObject,
  };
  res.json(result);
});

/* Delete by id   */

router.delete("/:id", async function (req, res, next) {
  const request = await req.params;
  const responseObject = await deleteResource(request);
  res.status(204).send();
});

module.exports = router;
