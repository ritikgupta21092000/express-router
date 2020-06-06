const express = require("express");
const bodyParser = require("body-parser");

const promoRouter = express.Router();
const promoRouterId = express.Router();

promoRouter.use(bodyParser.json());
promoRouterId.use(bodyParser.json());

promoRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "type/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will Send All the Promotion Details to you");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the Promotion Detail: " +
        req.body.name +
        " with details " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT Operation is not supported on /promotions");
  })
  .delete((req, res, next) => {
    res.end("Deleting all the Promotion Details");
  });

promoRouterId
  .route("/:promotionId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "type/plain");
    next();
  })
  .get((req, res, next) => {
    res.end(
      "Will send you the Promotion details of: " + req.params.promotionId
    );
  })
  .post((req, res, next) => {
    res.end(
      "POST Operation not supported on /promotions/" + req.params.promotionId
    );
  })
  .put((req, res, next) => {
    res.write(
      "Updating the promotion details " + req.params.promotionId + "\n"
    );
    res.end(
      "Will Update the promotion detail: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Deleting the promotion detail of: " + req.params.promotionId);
  });

module.exports = {promoRouter: promoRouter, promoRouterId: promoRouterId}
