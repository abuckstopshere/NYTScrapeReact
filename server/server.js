const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const path = require("path");
require("dotenv").config();

const mongoose = require("mongoose");
const db = mongoose.connection;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/articlesNYT";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("we are connected");
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static("build"));

require("./routes/apiRoutes/apiRoutes")(app);

require("./routes/routes/routes")(app);

app.listen(PORT, () => {
  console.log("server is listening on http://localhost:" + PORT);
});
