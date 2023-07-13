const { libraryProvider } = require("../providers"); //llamo al providers que es el encargado de crear usuarios


const createLibrary = async (library) => {
  return await libraryProvider.createLibrary(library);
};

const getLibrary  = async (libraryId) => {
  const library = await libraryProvider.getLibrary(libraryId);
  if (library ) {
    console.log(library.name);
  }
  return library;
};


const getAllLibraries = async () => {
  const libraries = await libraryProvider.getAllLibraries();
  if (libraries.length > 0) {
    libraries.forEach(library => {
      console.log(library.name);
    });
  }
  return libraries;
};

const updateLibrary = async (libraryId, updatedData) => {
  const library = await libraryProvider.getLibrary(libraryId);
  
  if (!library) {
    throw new Error(`Library with ID ${libraryId} not found`);
  }
  
  const updateLibrary  = await libraryProvider.updateLibrary(libraryId, updatedData);
  
  console.log('Library updated:', updateLibrary.name);
  
  return updateLibrary;
};


const deleteLibraryOld = async (libraryId) => {
  const library = await libraryProvider.getLibrary(libraryId);
  
  if (!library) {
    throw new Error(`Library with ID ${libraryId} not found`);
  }
  
  await libraryProvider.deleteLibrary(libraryId);
  console.log('Library deleted:', library.name);
};

const deleteLibrary = async (libraryId) => {
  const library = await libraryProvider.getLibrary(libraryId);
  
  if (!library) {
    throw new Error(`Library with ID ${libraryId} not found`);
  }
  
  await libraryProvider.deleteLibrary(libraryId);
  console.log('Library deleted:', library.name);
  
  return { message: 'Library deleted successfully' }; // Agregar mensaje de éxito
};




const validateUser = async (user, pass) => {
  const userFound = await userProvider.validateUser({ user, pass });
  return userFound;
};

const createBook = async (libraryId, book) => {
  const library = await libraryProvider.getLibrary (libraryId);
  if (library) {
    const newBook = await libraryProvider.createBook (libraryId, book);
    return newBook;
  }
  return null;
};

module.exports = { 
  createLibrary,
  getLibrary,
  getAllLibraries,
  updateLibrary,
  deleteLibrary,
  createBook,
  validateUser
};
