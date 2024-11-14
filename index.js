const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const db = require("./utils/db");

app.set("view engine", "ejs");
app.search("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<b>Page not found</b>");
});

app.listen(3003, () => {
  console.log("App started at port http://localhost:3003");
});
