const express = require("express");
const bodyParser = require("body-parser");
const dishRoute = require("./routes/dishRouter");
const leaderRoute = require("./routes/leaderRouter");
const promoRoute = require("./routes/promoRouter");

const dishRouter = dishRoute.dishRouter;
const dishRouterId = dishRoute.dishRouterId;

const leaderRouter = leaderRoute.leaderRouter;
const leaderRouterId = leaderRoute.leaderRouterId;

const promoRouter = promoRoute.promoRouter;
const promoRouterId = promoRoute.promoRouterId;

const app = express();

app.use(bodyParser.json());

app.use("/dishes", dishRouter);
app.use("/dishes", dishRouterId);

app.use("/promotions", promoRouter);
app.use("/promotions", promoRouterId);

app.use("/leaders", leaderRouter);
app.use("/leaders", leaderRouterId);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
