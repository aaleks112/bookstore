const { User, Book } = require("../models");


const getBook = async (bookId) => {
  try {
    //const user = await User.findByPk(userId);
    const book = await Book.findByPk(bookId, {include: {all:true} }); 
    return book;
  } catch (err) {
    console.error("Error when fetching book", err);
    throw err;
  }
};

const getAllBooks = async () => {
    try {
      const books = await Book.findAll({include: {all:true} });
      return books;
    } catch (err) {
      console.error("Error when fetching books", err);
      throw err;
    }
  };

  
  const updateBook = async (bookId, updatedData) => {
    try {
      const book = await Book.findByPk(bookId);
      
      if (!book) {
        throw new Error(`Book with ID ${bookId} not found`);
      }
      
      await book.update(updatedData);
      
      console.log('Book updated:', book.name);
      
      return book;
    } catch (err) {
      console.error("Error when updating book", err);
      throw err;
    }
  };
  
  
const deleteBook = async (bookId) => {
  try {
    const book = await Book.findOne({
      where: {
        id: bookId
      }
    });

    if (!book) {
      throw new Error(`Book with ID ${bookId} not found`);
    }

    await book.destroy();

    console.log('Book marked as deleted:', book.name);

    return book;
  } catch (err) {
    console.error("Error when updating book", err);
    throw err;
  }
};

const createBook = async (book) => {
  try {
    const newBook = await Book.create(book);
    return newBook;
  } catch (err) {
    console.error("Error when creating Book", err);
    throw err;
  }
};


const validateUser = async (options) => {
  try {
    const user = await User.findAll({
      where: {
        email: options.user,
        password: options.pass,
      },
    });
    if (user.length !== 0) {
      return user;
    }
    return false;
  } catch (err) {
    console.error("Error when validating User", err);
    return false;
  }
};

module.exports = { 
    createBook, 
    getBook, 
    getAllBooks, 
    updateBook,
    deleteBook,
    createBook,
    validateUser 
};
