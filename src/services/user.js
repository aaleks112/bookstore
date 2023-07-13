const { userProvider } = require("../providers"); //llamo al providers que es el encargado de crear usuarios



const createUser = async (user) => {
  return await userProvider.createUser(user);
};

const getUser = async (userId) => {
  const user = await userProvider.getUser(userId);
  if (user) {
    // Lógica de negocio
    console.log(user.firstName);
  }
  return user;
};

const validateUser = async (user, pass) => {
  const userFound = await userProvider.validateUser({ user, pass });
  return userFound;
};

const createTicket = async (userId, ticket) => {
  const user = await userProvider.getUser(userId);
  if (user) {
    const newTicket = await userProvider.createTicket(userId, ticket);
    return newTicket;
  }
  return null;
};

module.exports = { createUser, getUser, createTicket, validateUser};



