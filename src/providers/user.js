const { User, Ticket } = require("../models");

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (err) {
    console.error("Error when creating User", err);
    throw err;
  }
};



module.exports = { createUser };



/*
1)//el user(objeto) que me llega lo voy a tratar de crear como un usuario de frente manteca.
** await por que si no no se queda esperando a que finalice la promesa.
*/