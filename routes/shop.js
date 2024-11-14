const express = require("express");

const router = express.Router();
const bookController = require("../controllers/shop");

router.get("/", async (req, res, next) => {
  try {
    const data = await bookController.getAllBooks(req, res);
    res.render("index", { books: data });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
