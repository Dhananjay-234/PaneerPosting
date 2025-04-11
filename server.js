const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const adminCredentials = require("./adminCredentials.js");

const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  const { identifier, password } = req.body;

  const isAdmin =
    (identifier === adminCredentials.id || identifier === adminCredentials.email) &&
    password === adminCredentials.password;

  if (isAdmin) {
    return res.redirect("/admin-dashboard.html");
  } else {
    return res.redirect("/paneerposting-website.html");
  }
});

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
