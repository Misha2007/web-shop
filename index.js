const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const db = require("./utils/db");

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("not_found", { title: "Page Not Found" });
});

app.listen(3005, () => {
  console.log("App started at port http://localhost:3005");
});
