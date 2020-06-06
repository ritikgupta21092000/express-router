const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();
const leaderRouterId = express.Router();

leaderRouter.use(bodyParser.json());
leaderRouterId.use(bodyParser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get(() => {
    res.end("Will Send All details of leader to you");
  })
  .post((req, res, next) => {
    res.end(
      "Will add all the details of leader: " +
        req.body.name +
        " with details " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /leaders");
  })
  .delete((req, res, next) => {
    res.end("Deleting all the detail");
  });

leaderRouterId
  .route("/:leaderId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "type/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send you the leader details of: " + req.params.leaderId);
  })
  .post((req, res, next) => {
    res.end("POST Operation not supported on /leaders/" + req.params.leaderId);
  })
  .put((req, res, next) => {
    res.write("Updating the detail " + req.params.leaderId + "\n");
    res.end(
      "Will Update the detail: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Deleting the detail " + req.params.leaderId);
  });

module.exports = {leaderRouter: leaderRouter, leaderRouterId: leaderRouterId};
