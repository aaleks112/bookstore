const { all } = require("axios");
const { User, Ticket} = require("../models");

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (err) {
    console.error("Error when creating User", err);
    throw err;
  }
};


const getUser = async (userId) => {
  try {
    //const user = await User.findByPk(userId);
    const user = await User.findByPk(userId, {include: {all:true} }); // c/busquemos un user traemos todos los tickets, todas las relaciones que tenemos.
    return user;
  } catch (err) {
    console.error("Error when fetching user", err);
    throw err;
  }
};

const createTicket = async (userId, ticket) => {
  try {
    const newTicket = await Ticket.create({ ...ticket, toto: userId });
    return newTicket;
  } catch (err) {
    console.error("Error when creating Ticket", err);
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



module.exports = { createUser, getUser, createTicket, validateUser };



/*
1)//el user(objeto) que me llega lo voy a tratar de crear como un usuario de frente manteca.
** await por que si no no se queda esperando a que finalice la promesa.
*/