const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");
const Ticket = require("../models/ticket");

const User = sequelize.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Ticket);  // un usuario tiene muchos tickets (con un usuario buscas todos los ticket que tiene)
Ticket.belongsTo(User); // el ticket pertenece a un usuario (con un ticket buscas al usuario al que pertenece)

module.exports = User;


/*
const User = sequelize.define("Users", {       //que uso para definir los modelos? uso LA INSTANCIA sequelize (en minuscula)
Sequelize utiliza el objeto DataTypes para definir los tipos de datos de los atributos de un modelo. Algunos de los tipos de datos comunes que se pueden utilizar son:
STRING: Representa una cadena de caracteres.
INTEGER: Representa un número entero.

*/