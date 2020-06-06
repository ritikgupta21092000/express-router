const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();
const dishRouterId = express.Router();

dishRouter.use(bodyParser.json());
dishRouterId.use(bodyParser.json());

dishRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "type/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will Send All dishes to you");
  })
  .post((req, res, next) => {
    res.end(
      "Will add all the dish: " +
      req.body.name +
      " with details " +
      req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /dishes");
  })
  .delete((req, res, next) => {
    res.end("Deleting all dishes");
  });

dishRouterId
  .route("/:dishId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send you the details of: " + req.params.dishId);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST Operation not supported on /dishes/" + req.params.dishId);
  })
  .put((req, res, next) => {
    res.write("Updating the dish " + req.params.dishId + "\n");
    res.end(
      "Will Update the dish: " +
      req.body.name +
      " with details: " +
      req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Deleting the dish");
  });

module.exports = {dishRouter: dishRouter, dishRouterId: dishRouterId};
