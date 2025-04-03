const db = require("../models/bookModel");

// Get all books from the database
const getBooks = async (req, res) => {
  try {
    // Fetch all books from the database
    const books = await db.any("SELECT * FROM books");
    
    // Pass user from session to the view
    const user = req.session.user;

    // Render the 'books' view with books and user data
    res.render('books', { books, user }); // Make sure 'books.ejs' exists in the 'views' directory
  } catch (err) {
    console.error("❌ Error fetching books:", err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getBooks };
