const { User, Library } = require("../models");

const createLibrary = async (library) => {
  try {
    const newLibrary = await Library.create(library);
    return newLibrary;
  } catch (err) {
    console.error("Error when creating library", err);
    throw err;
  }
};

const getLibrary = async (libraryId) => {
  try {
    //const user = await User.findByPk(userId);
    const library = await Library.findByPk(libraryId, {include: {all:true} }); 
    return library
  } catch (err) {
    console.error("Error when fetching library", err);
    throw err;
  }
};

const getAllLibraries = async () => {
    try {
      const libraries = await Library.findAll({include: {all:true} });
      return libraries;
    } catch (err) {
      console.error("Error when fetching libraries", err);
      throw err;
    }
  };

  
  const updateLibrary = async (libraryId, updatedData) => {
    try {
      const library = await Library.findByPk(libraryId);
      
      if (!library) {
        throw new Error(`Library with ID ${libraryId} not found`);
      }
      
      await library.update(updatedData);
      
      console.log('Library updated:', library.name);
      
      return library;
    } catch (err) {
      console.error("Error when updating library", err);
      throw err;
    }
  };
  
  
const deleteLibrary = async (libraryId) => {
  try {
    const library = await Library.findOne({
      where: {
        id: libraryId
      }
    });

    if (!library) {
      throw new Error(`Library with ID ${libraryId} not found`);
    }

    await library.destroy();

    console.log('Library marked as deleted:', library.name);

    return library;
  } catch (err) {
    console.error("Error when updating library", err);
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
    createLibrary, 
    getLibrary, 
    getAllLibraries, 
    updateLibrary,
    deleteLibrary,
    validateUser 
};
