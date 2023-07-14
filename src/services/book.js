const { bookProvider } = require("../providers"); //llamo al providers que es el encargado de crear usuarios


const createBook = async (book) => {
  return await bookProvider.createBook(book);
};

const getBook = async (bookId) => {
  const book = await bookProvider.getBook(bookId);
  if (book) {
    console.log(book.titulo);
  }
  return book;
};


const getAllBooks = async () => {
  const books = await bookProvider.getAllBooks();
  if (books.length > 0) {
    books.forEach(book=> {
      console.log(book.titulo);
    });
  }
  return books;
};

const updatebooks = async (bookId, updatedData) => {
  const book = await bookProvider.getbook(bookId);
  
  if (!book) {
    throw new Error(`book with ID ${bookId} not found`);
  }
  
  const updatebook = await bookProvider.updateBook(bookId, updatedData);
  
  console.log('Book updated:', updateBook.titulo);
  
  return updateBook;
};


const deleteBook = async (bookId) => {
  const book = await bookProvider.getBook(bookId);
  
  if (!book) {
    throw new Error(`Book with ID ${bookId} not found`);
  }
  
  await bookProvider .deleteBook(bookId);
  console.log('Book deleted:', book.titulo);
  
  return { message: 'Book  deleted successfully' }; 
};




const validateUser = async (user, pass) => {
  const userFound = await userProvider.validateUser({ user, pass });
  return userFound;
};


module.exports = { 
  createBook,
  getBook,
  getAllBooks,
  updatebooks,
  deleteBook,
  validateUser
};
