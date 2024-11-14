const con = require("../utils/db");

const getAllBooks = async (req, res) => {
  try {
    // Use await to get the result from the database query
    const [books] = await con.query("SELECT * FROM products");
    // Render the page with the fetched books
    return books;
  } catch (err) {
    console.error(err);
    res.status(500).send("Database query failed");
  }
};

module.exports = {
  getAllBooks,
};
