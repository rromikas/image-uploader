require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const imageToSvg = require("./functions/imageToSvg/imageToSvg");

app.use(express.json({ limit: "1000mb" }));
app.use(express.urlencoded({ extended: true, limit: "1000mb" }));
app.use(cors());
app.options("*", cors());

app.post("/imageToSvg", imageToSvg);

const listener = app.listen(process.env.port, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
