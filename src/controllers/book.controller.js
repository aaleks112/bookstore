const { bookService } = require("../services");


const createBook = async (req, res) => {
  try {
    const newBook  = await bookService.createBook(req.body);
    res.json(newBook);
  } catch (err) {
    res.status(500).json({ action: "createBook ", error: err.message });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await bookService.getBook(req.params.bookId);
    if (!book ) {
      res.status(404).json({ action: "getBook", error: "Book11 Not Found"});
    } else {
      res.json(book);
    }
  } catch (err) {
    res.status(500).json({ action: "getBook", error: err.message });
  }
};

const getAllbooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks(); 
    if (!books) {
      res.status(404).json({ action: "getAllbooks", error: "books Not Found" });
    } else {
      res.json(books);
    }
  } catch (err) {
    res.status(500).json({ action: "getAllbooks", error: err.message });
  }
};


const updateBook = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const books = await bookService.updateBook(bookId, req.body);
    res.json(books);
  } catch (err) {
    res.status(500).json({ action: "updateBook", error: err.message });
  }
};


const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const book = await bookService.deleteBook(bookId);
    res.json(book);
  } catch (err) {
    res.status(500).json({ action: "deleteBook with destroy", error: err.message });
  }
};








module.exports = { createBook , getBook, getAllbooks, updateBook, deleteBook, createBook };

